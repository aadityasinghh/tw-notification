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

  @Post('email-verification')
  async sendEmailVerification(
    @Body() body: { email: string; name: string; token: string },
  ): Promise<NotificationResponse> {
    const { email, name, token } = body;
    return this.notificationService.sendEmailVerification(email, name, token);
  }

  @Post('user-creation')
  async sendUserCreationNotification(
    @Body() body: { email: string; name: string },
  ): Promise<NotificationResponse> {
    const { email, name } = body;
    return this.notificationService.sendUserCreationNotification(email, name);
  }

  @Post('tour-creation')
  async sendTourCreationNotification(
    @Body()
    body: {
      email: string;
      name: string;
      tourName: string;
      tourDescription: string;
      tourId: string;
    },
  ): Promise<NotificationResponse> {
    const { email, name, tourName, tourDescription, tourId } = body;
    return this.notificationService.sendTourCreationNotification(
      email,
      name,
      tourName,
      tourDescription,
      tourId,
    );
  }

  @Post('password-reset')
  async sendPasswordResetNotification(
    @Body() body: { email: string; name: string; token: string },
  ): Promise<NotificationResponse> {
    const { email, name, token } = body;
    return this.notificationService.sendPasswordResetNotification(
      email,
      name,
      token,
    );
  }

  @Post('booking-confirmation')
  async sendBookingConfirmationNotification(
    @Body()
    body: {
      email: string;
      name: string;
      tourName: string;
      tourDate: string;
      guestCount: number;
      bookingReference: string;
      bookingId: string;
    },
  ): Promise<NotificationResponse> {
    const {
      email,
      name,
      tourName,
      tourDate,
      guestCount,
      bookingReference,
      bookingId,
    } = body;
    return this.notificationService.sendBookingConfirmationNotification(
      email,
      name,
      tourName,
      tourDate,
      guestCount,
      bookingReference,
      bookingId,
    );
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
