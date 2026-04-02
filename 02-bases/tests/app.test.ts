import { describe, expect, it, test } from '@jest/globals';

// 1. Arrange: preparar todo lo que vamos a probar en el test

// 2. Act: aplicar algún tipo de estímulo, probando algo o haciendo alguna ejecución.

// 3: Assert: Lo que vamos a evaluar después de haber aplicado el estímulo.

describe('Test in the App file', () => {
  test('should be 30', () => {
    // 1. Arrange
    const num1 = 10;
    const num2 = 20;

    // 2. Acct
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBe(30);
  });
});
