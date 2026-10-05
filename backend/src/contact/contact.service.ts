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
    return { id: entry.id };
  }

  async findAll(): Promise<StoredMessage[]> {
    try {
      return JSON.parse(await readFile(this.file, 'utf8')) as StoredMessage[];
    } catch {
      return [];
    }
  }

  private async append(entry: StoredMessage) {
    const messages = await this.findAll();
    messages.unshift(entry);
    await mkdir(dirname(this.file), { recursive: true });
    await writeFile(this.file, JSON.stringify(messages, null, 2), 'utf8');
  }
}
