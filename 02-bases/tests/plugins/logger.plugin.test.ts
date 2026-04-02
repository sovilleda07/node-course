import { describe, expect, it, jest, test } from '@jest/globals';

import { buildLogger, logger as winstonLogger } from '../../src/plugins';

describe('plugins/logger.plugin.ts', () => {
  test('should return a function logger', () => {
    const logger = buildLogger('test');

    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  test('should log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    );
  });

  test('should error a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');

    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);

    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        message,
        service,
      }),
    );
  });
});
