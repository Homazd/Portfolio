import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, Length, MaxLength } from 'class-validator';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

export class CreateMessageDto {
  @Transform(trim)
  @IsString()
  @Length(2, 100, { message: 'Name must be between 2 and 100 characters.' })
  name: string;

  @Transform(trim)
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(200)
  email: string;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(150)
  subject?: string;

  @Transform(trim)
  @IsString()
  @Length(10, 5000, { message: 'Message must be between 10 and 5000 characters.' })
  message: string;

  /** Honeypot: hidden in the UI, real visitors leave it empty. */
  @IsOptional()
  @IsString()
  website?: string;
}
