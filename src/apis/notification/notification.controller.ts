import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './utils/send-notification.dto';
import { NotificationResponse } from './utils/notification.interface';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(
    @Body() dto: SendNotificationDto,
  ): Promise<NotificationResponse> {
    return this.notificationService.sendNotification(dto);
  }

  @Get('verify-connection')
  async verifyConnection(): Promise<{ success: boolean; message: string }> {
    try {
      const emailProvider = this.notificationService['emailProvider'];
      const isConnected = await emailProvider.verifyConnection();

      return {
        success: isConnected,
        message: isConnected
          ? 'Email service connection verified successfully'
          : 'Failed to connect to email service',
      };
    } catch (error) {
      return {
        success: false,
        message: `Error verifying connection: ${error.message}`,
      };
    }
  }
}
