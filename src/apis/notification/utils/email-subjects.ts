import { NotificationTemplate } from './notification.enum';

export const emailSubjects: Record<NotificationTemplate, string> = {
  [NotificationTemplate.EMAIL_VERIFICATION]: 'Verify Your Email',
  [NotificationTemplate.USER_CREATION]: 'Welcome to Our Platform',
  [NotificationTemplate.TOUR_CREATION]: 'New Tour Created',
  [NotificationTemplate.PASSWORD_RESET]: 'Reset Your Password',
  [NotificationTemplate.BOOKING_CONFIRMATION]: 'Your Booking Confirmation',
};
