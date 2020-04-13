// Importamos el objeto `cipher`, que contiene los métodos `cifrar` y `descifrar`
import cipher from '../src/cipher';

describe('cifrar', () => {

  test('should be an object', () => {
    expect(typeof cifrar).toBe('object');
  });

  describe('cipher.cifrar', () => {

    test('should be a function', () => {
      expect(typeof cipher.cifrar).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });


  });

  describe('cipher.descifrar', () => {

    test('should be a function', () => {
      expect(typeof cipher.descifrar).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.descifrar('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

  });

});
