import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { NotificationService } from './notification.service';
import { EmailProvider } from './providers/email.provider';
import { NotificationController } from './notification.controller';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [NotificationController],
  providers: [NotificationService, EmailProvider],
  exports: [NotificationService],
})
export class NotificationModule {}
