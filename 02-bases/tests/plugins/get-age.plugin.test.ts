import { describe, expect, it, jest, test } from '@jest/globals';

import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin.ts', () => {
  test('should return the age of a person', () => {
    const birthdate = '1997-07-07';
    const age = getAge(birthdate);

    expect(typeof age).toBe('number');
  });

  test('should return current age', () => {
    const birthdate = '1997-07-07';
    const age = getAge(birthdate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test('should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthdate = '1997-07-07';
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
