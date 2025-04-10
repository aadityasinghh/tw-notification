import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { NotificationProvider } from './provider.interface';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class EmailProvider implements NotificationProvider {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailProvider.name);

  constructor(private configService: ConfigService) {
    const host = process.env.MAIL_HOST;
    const port = process.env.MAIL_PORT;
    const secure = false;
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASSWORD;

    console.log(host, port);
    this.logger.log(
      `Initializing email provider with host: ${host}, port: ${port}, secure: ${secure}`,
    );

    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  async send(to: string, subject: string, content: string): Promise<boolean> {
    try {
      this.logger.debug(`Sending email to ${to} with subject: ${subject}`);

      const result = await this.transporter.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject,
        html: content,
      });

      this.logger.debug(`Email sent successfully: ${result.messageId}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to send email: ${error.message}`, error.stack);
      return false;
    }
  }

  // For testing purposes - verify connection to SMTP server
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      this.logger.log('SMTP connection verified successfully');
      return true;
    } catch (error) {
      this.logger.error(
        `SMTP connection verification failed: ${error.message}`,
        error.stack,
      );
      return false;
    }
  }
}
