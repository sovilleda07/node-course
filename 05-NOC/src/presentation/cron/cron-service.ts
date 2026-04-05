import { CronJob } from 'cron';

// Interfaces cuando son objetos con propiedades
// Type para cuando es un tipo de datos
type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  public static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
    const job = new CronJob(cronTime, onTick);

    job.start();

    return job;
  }
}
