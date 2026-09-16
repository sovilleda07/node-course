import { describe, expect, test } from '@jest/globals';
import { LogEntity, LogSeverityLevel } from './log.entity';

describe('LogEntity', () => {
  const dataObj = {
    message: 'Hola Mundo',
    level: LogSeverityLevel.high,
    origin: 'log.entity.test.ts',
  };

  test('should create a LogEntity Instance', () => {
    const log = new LogEntity(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test('should create a LogEntity instance from fromJson', () => {
    const json = `{"level":"low","message":"Service http://google.com working","createdAt":"2026-06-29T04:44:55.269Z","origin":"check-service.ts"}`;

    const log = LogEntity.fromJson(json);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe('Service http://google.com working');
    expect(log.level).toBe(LogSeverityLevel.low);
    expect(log.origin).toBe('check-service.ts');
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test('should create a LogEntity instance from fromObject', () => {
    const log = LogEntity.fromObject(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });
});
