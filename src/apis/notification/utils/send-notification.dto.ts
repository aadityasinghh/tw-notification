import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { NotificationTemplate, NotificationType } from './notification.enum';

export class SendNotificationDto {
  @IsEnum(NotificationType)
  type: NotificationType = NotificationType.EMAIL;

  @IsEnum(NotificationTemplate)
  template: NotificationTemplate;

  @IsNotEmpty()
  @IsEmail()
  recipient: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsNotEmpty()
  @IsObject()
  content: Record<string, any>;
}
