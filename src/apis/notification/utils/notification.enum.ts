export enum NotificationType {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
}

export enum NotificationTemplate {
  EMAIL_VERIFICATION = 'email-verification',
  USER_CREATION = 'user-creation',
  TOUR_CREATION = 'tour-creation',
  PASSWORD_RESET = 'password-reset',
  BOOKING_CONFIRMATION = 'booking-confirmation',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
}
