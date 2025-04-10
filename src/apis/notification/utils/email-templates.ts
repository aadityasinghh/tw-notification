export const emailTemplates = {
  'email-verification': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Verify Your Email</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Verify Your Email</h1>
        <p>Hi {{name}},</p>
        <p>Please verify your email by clicking the button below:</p>
        <p><a href="{{verificationUrl}}" class="button">Verify Email</a></p>
        <p>Or copy and paste this link into your browser:</p>
        <p>{{verificationUrl}}</p>
        <p>This link will expire in 24 hours.</p>
        <div class="footer">
          <p>If you didn't create an account, you can safely ignore this email.</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'user-creation': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Welcome to Our Platform</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Welcome, {{name}}!</h1>
        <p>Your account has been created successfully.</p>
        <p>You can now start exploring our platform:</p>
        <p><a href="{{loginUrl}}" class="button">Log In Now</a></p>
        <div class="footer">
          <p>If you have any questions, please contact our support team.</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'tour-creation': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>New Tour Created</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .tour-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>New Tour Created</h1>
        <p>Hello {{name}},</p>
        <p>Your tour has been created successfully:</p>
        <div class="tour-info">
          <h2>{{tourName}}</h2>
          <p>{{tourDescription}}</p>
        </div>
        <p><a href="{{tourUrl}}" class="button">View Tour Details</a></p>
        <div class="footer">
          <p>Thank you for using our platform!</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'password-reset': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Reset Your Password</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Reset Your Password</h1>
        <p>Hi {{name}},</p>
        <p>We received a request to reset your password. Click the button below to create a new password:</p>
        <p><a href="{{resetUrl}}" class="button">Reset Password</a></p>
        <p>Or copy and paste this link into your browser:</p>
        <p>{{resetUrl}}</p>
        <p>This link will expire in 1 hour.</p>
        <div class="footer">
          <p>If you didn't request a password reset, you can safely ignore this email.</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'booking-confirmation': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Booking Confirmation</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .booking-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Booking Confirmation</h1>
        <p>Hello {{name}},</p>
        <p>Your booking has been confirmed:</p>
        <div class="booking-info">
          <h2>{{tourName}}</h2>
          <p><strong>Date:</strong> {{tourDate}}</p>
          <p><strong>Guests:</strong> {{guestCount}}</p>
          <p><strong>Booking Reference:</strong> {{bookingReference}}</p>
        </div>
        <p><a href="{{bookingUrl}}" class="button">View Booking Details</a></p>
        <div class="footer">
          <p>Thank you for booking with us!</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,
};
