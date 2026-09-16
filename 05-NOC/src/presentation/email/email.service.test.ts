import { describe, expect, jest, test } from '@jest/globals';
import { EmailService, Attachment, SendMailOptions } from './email.service';
import nodemailer from 'nodemailer';

describe('EmailService', () => {
  const mockSendMail = jest.fn();
  // Mock al createTransport
  nodemailer.createTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail,
  });

  const emailService = new EmailService();

  test('should send email', async () => {
    const options: SendMailOptions = {
      to: 'sovilleda07@gmail.com',
      subject: 'Test',
      htmlBody: '<h1>Test</h1>',
    };
    const emailSent = await emailService.sendEmail(options);
    expect(mockSendMail).toHaveBeenCalledWith({
      attachments: expect.any(Array),
      html: '<h1>Test</h1>',
      subject: 'Test',
      to: 'sovilleda07@gmail.com',
    });
  });

  test('should send email with attachemets', async () => {
    const email = 'sovilleda07@gmail.com';

    await emailService.sendEmailWithFileSystemLogs(email);

    expect(mockSendMail).toHaveBeenCalledWith({
      to: email,
      subject: 'Logs del servidor',
      html: expect.any(String),
      attachments: expect.arrayContaining([
        {
          fileName: 'logs-all.log',
          path: './logs/logs-all.log',
        },
        {
          fileName: 'logs-high.log',
          path: './logs/logs-high.log',
        },
        {
          fileName: 'logs-medium.log',
          path: './logs/logs-medium.log',
        },
      ]),
    });
  });
});
