import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ContactService } from './contact.service.js';
import { CreateMessageDto } from './create-message.dto.js';

@Controller('contact')
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  @Post()
  @HttpCode(201)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async create(@Body() dto: CreateMessageDto) {
    await this.contact.create(dto);
    return { success: true, message: 'Thank you — your message has been received.' };
  }

  /** Read submitted messages. Requires the ADMIN_TOKEN env variable. */
  @Get()
  findAll(@Headers('x-admin-token') token?: string) {
    const expected = process.env.ADMIN_TOKEN;
    if (!expected || token !== expected) {
      throw new UnauthorizedException();
    }
    return this.contact.findAll();
  }
}
