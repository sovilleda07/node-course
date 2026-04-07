import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions {
  to: string;
  subject: string;
  htmlBody: string;
  //todo: attachements
}

// todo: Attachement

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: `smtp.${envs.MAILER_SERVICE}.com`,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody } = options;

    try {
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
      });

      console.log(sentInformation);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
