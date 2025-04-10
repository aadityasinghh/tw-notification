import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/db/db.module';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { EmailProvider } from './notification/providers/email.provider';

@Module({
  imports: [DatabaseModule, NotificationModule, ConfigModule, HttpModule],
  providers: [NotificationService, EmailProvider],
  controllers: [NotificationController],
})
export class ApiModule {}

// // src/core/core.module.ts - Update to include NotificationModule

// @Module({
//   imports: [AuthModule, DbModule, NotificationModule],
//   exports: [AuthModule, DbModule, NotificationModule],
// })
// export class CoreModule {}
