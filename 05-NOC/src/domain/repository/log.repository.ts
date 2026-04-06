import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// Quien va a permitirme llama al DataSource
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
