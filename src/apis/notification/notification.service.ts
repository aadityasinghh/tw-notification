import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { SendNotificationDto } from './utils/send-notification.dto';
import {
  NotificationResponse,
  NotificationResult,
} from './utils/notification.interface';
import {
  NotificationStatus,
  NotificationTemplate,
  NotificationType,
} from './utils/notification.enum';
import { EmailProvider } from './providers/email.provider';
import * as Handlebars from 'handlebars';
import { emailTemplates } from './utils/email-templates';
import { emailSubjects } from './utils/email-subjects';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private readonly compiledTemplates: Map<
    NotificationTemplate,
    Handlebars.TemplateDelegate
  > = new Map();
  private readonly externalServiceUrl: string;
  private readonly useExternalService: boolean;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly emailProvider: EmailProvider,
  ) {
    this.externalServiceUrl = this.configService.get<string>(
      'NOTIFICATION_SERVICE_URL',
      '',
    );
    this.useExternalService =
      this.configService.get<string>('USE_EXTERNAL_NOTIFICATION_SERVICE') ===
      'true';

    // If using local notifications, compile templates
    if (!this.useExternalService) {
      this.compileTemplates();
    }
  }

  private compileTemplates(): void {
    for (const [key, template] of Object.entries(emailTemplates)) {
      this.compiledTemplates.set(
        key as NotificationTemplate,
        Handlebars.compile(template),
      );
    }
  }

  /**
   * Send a notification (either using external service or local implementation)
   */
  async sendNotification(
    dto: SendNotificationDto,
  ): Promise<NotificationResponse> {
    try {
      // Add current year to all templates
      dto.content.year = new Date().getFullYear();

      if (this.useExternalService) {
        return this.sendNotificationExternal(dto);
      } else {
        return this.sendNotificationLocal(dto);
      }
    } catch (error) {
      this.logger.error(
        `Error in sendNotification: ${error.message}`,
        error.stack,
      );
      return {
        id: null,
        success: false,
        message: `Unexpected error: ${error.message}`,
      };
    }
  }

  /**
   * Send notification using the external notification service
   */
  private async sendNotificationExternal(
    dto: SendNotificationDto,
  ): Promise<NotificationResponse> {
    try {
      let endpoint = `${this.externalServiceUrl}/notifications`;

      if (dto.type === NotificationType.EMAIL) {
        endpoint = `${this.externalServiceUrl}/notifications/email/send`;

        // Transform our DTO to match the external service's expected format
        const payload = {
          template: dto.template,
          context: dto.content,
          to: dto.recipient,
          subject: dto.subject || this.getDefaultSubject(dto.template),
        };

        this.logger.debug(
          `Sending notification to external service: ${JSON.stringify(payload)}`,
        );

        const { data } = await firstValueFrom(
          this.httpService.post<NotificationResult>(endpoint, payload).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(
                `Failed to send notification: ${error.message}`,
              );
              throw new Error(`Failed to send notification: ${error.message}`);
            }),
          ),
        );

        return {
          id: data.id,
          success: data.status === NotificationStatus.SENT,
          message: data.errorMessage,
        };
      } else {
        // For future notification types (SMS, push)
        throw new Error(
          `Notification type ${dto.type} not yet implemented for external service`,
        );
      }
    } catch (error) {
      this.logger.error(`Error sending notification: ${error.message}`);
      return {
        id: null,
        success: false,
        message: error.message,
      };
    }
  }

  /**
   * Send notification using the local implementation
   * (useful for testing or if you don't have the external service)
   */
  private async sendNotificationLocal(
    dto: SendNotificationDto,
  ): Promise<NotificationResponse> {
    try {
      if (dto.type === NotificationType.EMAIL) {
        const template = this.compiledTemplates.get(dto.template);
        if (!template) {
          throw new Error(`Template ${dto.template} not found`);
        }

        // Generate email content from template
        const content = template(dto.content);
        const subject = dto.subject || this.getDefaultSubject(dto.template);

        // Send email
        const success = await this.emailProvider.send(
          dto.recipient,
          subject,
          content,
        );

        return {
          id: `local-${Date.now()}`,
          success,
          message: success ? 'Email sent successfully' : 'Failed to send email',
        };
      } else {
        // For future notification types (SMS, push)
        throw new Error(
          `Notification type ${dto.type} not yet implemented for local service`,
        );
      }
    } catch (error) {
      this.logger.error(
        `Error sending notification locally: ${error.message}`,
        error.stack,
      );
      return {
        id: null,
        success: false,
        message: error.message,
      };
    }
  }

  /**
   * Get a default subject line based on the template type
   */
  private getDefaultSubject(template: NotificationTemplate): string {
    return emailSubjects[template] || 'Notification';
  }
}
