export const emailTemplates = {
  'otp-verification': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Your Verification Code</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .otp-code { font-size: 24px; font-weight: bold; letter-spacing: 5px; text-align: center; padding: 20px; background-color: #f0f0f0; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Your Verification Code</h1>
        <p>Hi {{name}},</p>
        <p>Your verification code is:</p>
        <div class="otp-code">{{otpCode}}</div>
        <p>Please enter this code to verify your email address. This code will expire in 10 minutes.</p>
        <p>If you didn't request this code, you can safely ignore this email.</p>
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'email-verification-success': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Email Verification Successful</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .success-icon { text-align: center; font-size: 48px; color: #4CAF50; margin: 20px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="success-icon">✓</div>
        <h1>Email Verification Successful</h1>
        <p>Hi {{name}},</p>
        <p>Your email address has been successfully verified. Thank you for completing this important security step.</p>
        <p>You can now enjoy full access to your account:</p>
        <p><a href="{{dashboardUrl}}" class="button">Go to Dashboard</a></p>
        <div class="footer">
          <p>If you have any questions, please contact our support team.</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,

  'account-creation-success': `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Account Created Successfully</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
          .account-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <h1>Welcome to {{companyName}}!</h1>
        <p>Hello {{name}},</p>
        <p>Your account has been created successfully. We're excited to have you join us!</p>
        <div class="account-info">
          <p><strong>Username:</strong> {{username}}</p>
          <p><strong>Email:</strong> {{email}}</p>
        </div>
        <p>To get started with your new account:</p>
        <p><a href="{{loginUrl}}" class="button">Log In Now</a></p>
        <p>If you haven't verified your email address yet, please check your inbox for our verification email.</p>
        <div class="footer">
          <p>Thank you for choosing our platform!</p>
          <p>&copy; {{year}} Your Company. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,
  'user-details-updated': `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Your Details Were Updated</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
      .button { display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
      .update-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
      .footer { margin-top: 30px; font-size: 12px; color: #777; }
    </style>
  </head>
  <body>
    <h1>Account Update Notice</h1>
    <p>Hello {{name}},</p>
    <p>We wanted to let you know that some details on your account have recently been updated.</p>
    <div class="update-info">
      <p><strong>Updated Fields:</strong></p>
      <ul>
        {{#each updatedFields}}
          <li>{{this.label}}: {{this.value}}</li>
        {{/each}}
      </ul>
    </div>
    <p>If you made these changes, no action is needed.</p>
    <p>If you didn’t update your information or if you believe this was done in error, please contact us immediately:</p>
    <p><a href="mailto:{{supportEmail}}" class="button">Contact Support</a></p>
    <div class="footer">
      <p>Thank you for being with {{companyName}}.</p>
      <p>&copy; {{year}} {{companyName}}. All rights reserved.</p>
    </div>
  </body>
  </html>
`,
};
