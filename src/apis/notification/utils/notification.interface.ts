import {
  NotificationStatus,
  NotificationTemplate,
  NotificationType,
} from './notification.enum';

export interface NotificationResponse {
  id: string | null;
  success: boolean;
  message?: string;
}

export interface NotificationContent {
  [key: string]: any;
}

export interface Notification {
  type: NotificationType;
  template: NotificationTemplate;
  recipient: string;
  subject?: string;
  content: NotificationContent;
}

export interface NotificationResult {
  id: string;
  type: NotificationType;
  template: NotificationTemplate;
  recipient: string;
  status: NotificationStatus;
  sentAt?: Date;
  errorMessage?: string;
}
