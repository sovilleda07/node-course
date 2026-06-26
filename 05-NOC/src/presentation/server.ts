import { CheckService } from '../domain/use-cases/checks/check-service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDataSource } from '../infrastructure/datasources/mongo-log.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const logRepository = new LogRepositoryImpl(
  // new FileSystemDatasource()
  new MongoLogDataSource(),
);
const emailService = new EmailService();

export class Server {
  public static start() {
    console.log('Server started...');

    //todo: Enviar email
    // emailService.sendEmail({
    //   to: 'email@gmail.com',
    //   subject: 'Logs de sistema',
    //   htmlBody: `
    //   <h3>Logs de sistema - NOC</h3>
    //   <p>Lorem ipsum</p>
    //   <p>Ver logs adjuntos</p>
    //   `,
    // });
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute(
    //   'email@gmail.com',
    // );

    CronService.createJob('*/5 * * * * *', () => {
      const url = 'http://google.com';

      new CheckService(
        logRepository,
        () => console.log(`${url} is ok`),
        (error) => console.log(error),
      ).execute(url);
    });
  }
}
