import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import type { CreateMessageDto } from './create-message.dto.js';

export interface StoredMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  receivedAt: string;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly file = resolve(
    process.env.MESSAGES_FILE ?? 'storage/messages.json',
  );
  private queue: Promise<unknown> = Promise.resolve();

  async create(dto: CreateMessageDto): Promise<{ id: string } | null> {
    if (dto.website) {
      // Honeypot filled in: silently accept without storing.
      this.logger.warn(`Discarded likely spam from ${dto.email}`);
      return null;
    }

    const entry: StoredMessage = {
      id: randomUUID(),
      name: dto.name,
      email: dto.email,
      subject: dto.subject || undefined,
      message: dto.message,
      receivedAt: new Date().toISOString(),
    };

    // Serialise writes so concurrent submissions don't overwrite each other.
    this.queue = this.queue.then(() => this.append(entry));
    await this.queue;

    this.logger.log(`New message from ${entry.name} <${entry.email}>`);
    void this.notify(entry);
    return { id: entry.id };
  }

  async findAll(): Promise<StoredMessage[]> {
    try {
      return JSON.parse(await readFile(this.file, 'utf8')) as StoredMessage[];
    } catch {
      return [];
    }
  }

  /**
   * Forwards the message to NOTIFY_WEBHOOK_URL (a Google Apps Script that relays it
   * to Telegram, which the server cannot reach directly). Failures are only logged:
   * the message is already stored.
   */
  private async notify(entry: StoredMessage) {
    const url = process.env.NOTIFY_WEBHOOK_URL;
    if (!url) return;

    const text = [
      'New message on homazohdi.ir',
      '',
      `From: ${entry.name} <${entry.email}>`,
      entry.subject ? `Subject: ${entry.subject}` : null,
      '',
      entry.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    try {
      // Apps Script runs the request, then answers with a redirect to its output.
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: process.env.NOTIFY_SECRET ?? '', text }),
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
      });
      const body = (await res.text()).trim();
      if (body.startsWith('<')) {
        // The script already ran; Google sometimes fails to serve its output page from here.
        this.logger.warn(`Notification sent, but the relay reply was unreadable (${res.status})`);
      } else if (!res.ok || body !== 'ok') {
        this.logger.error(`Notification failed (${res.status}): ${body.slice(0, 200)}`);
      }
    } catch (err) {
      this.logger.error(`Notification failed: ${(err as Error).message}`);
    }
  }

  private async append(entry: StoredMessage) {
    const messages = await this.findAll();
    messages.unshift(entry);
    await mkdir(dirname(this.file), { recursive: true });
    await writeFile(this.file, JSON.stringify(messages, null, 2), 'utf8');
  }
}
