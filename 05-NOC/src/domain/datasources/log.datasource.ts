import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// Reglas de negocio de como quiero que funciones

// Abstract porque nos asegura que no se pueda crear una instancia de una clase abstracta.
// Servirá para obligar el comportamiento que se define en el datasource sobre otras clases
export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
