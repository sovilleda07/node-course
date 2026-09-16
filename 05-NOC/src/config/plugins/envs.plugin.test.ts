import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import { envs } from './envs.plugin.js';

describe('envs.plugin.ts', () => {
  test('should return env options', () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'sovilleda07@gmail.com',
      MAILER_SECRET_KEY: 'zgfnrgmogqssqkqy',
      PROD: false,
      MONGO_URL: 'mongodb://sonia:123456@localhost:27017',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'sonia',
      MONGO_PASS: '123456',
      POSTGRES_URL: 'postgresql://postgres:123456@localhost:5432/NOC',
    });
  });

  test('should return error if not found env', async () => {
    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin');
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
