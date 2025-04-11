import { NotificationTemplate } from './notification.enum';

export const emailSubjects: Record<NotificationTemplate, string> = {
  [NotificationTemplate.EMAIL_VERIFICATION]: 'Verify Your Email',
  [NotificationTemplate.EMAIL_VERIFICATION_SUCCESS]: 'Account Created',
  [NotificationTemplate.USER_CREATION]: 'Your Account has been created ',
  [NotificationTemplate.USER_DETAILS]: 'Your Details has been updated',
  // [NotificationTemplate.TOUR_CREATION]: 'New Tour Created',
  // [NotificationTemplate.PASSWORD_RESET]: 'Reset Your Password',
  // [NotificationTemplate.BOOKING_CONFIRMATION]: 'Your Booking Confirmation',
  // [NotificationTemplate.EMAIL_VERIFICATION_SUCCESS]:'Your email has been verified'
};
