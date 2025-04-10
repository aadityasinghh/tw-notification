export interface NotificationProvider {
  send(to: string, subject: string, content: string): Promise<boolean>;
}
