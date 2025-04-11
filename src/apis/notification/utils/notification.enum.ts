export enum NotificationType {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
}

export enum NotificationTemplate {
  EMAIL_VERIFICATION = 'otp-verification',
  EMAIL_VERIFICATION_SUCCESS = 'email-verification-success',
  USER_CREATION = 'account-creation-success',
  USER_DETAILS = 'user-details-updated',
  // TOUR_CREATION = 'tour-creation',
  // PASSWORD_RESET = 'password-reset',
  // BOOKING_CONFIRMATION = 'booking-confirmation',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
}
