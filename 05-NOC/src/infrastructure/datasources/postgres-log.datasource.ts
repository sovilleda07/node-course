import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, SeverityLevel } from '../../generated/prisma/client';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { envs } from '../../config/plugins/envs.plugin';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: envs.POSTGRES_URL }),
});

const severityEnum = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH,
};

export class PostgresLogDataSource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const level = severityEnum[log.level];

    const newLog = await prisma.logModel.create({
      data: {
        ...log,
        level,
      },
    });

    console.log('Postgres saved');
  }

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = severityEnum[severityLevel];

    const dbLogs = await prisma.logModel.findMany({
      where: {
        level,
      },
    });

    return dbLogs.map(LogEntity.fromObject);
  }
}
