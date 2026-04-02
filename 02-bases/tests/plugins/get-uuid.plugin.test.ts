import { describe, expect, it, jest, test } from '@jest/globals';

import { getUUID } from '../../src/plugins';

describe('plugins/get-uuid.plugin.ts', () => {
  test('should return a UUID', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
