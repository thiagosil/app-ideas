import { bin2Dec } from './app';

describe('App', () => {
  test('zero', () => {
    const number = '00000000';
    expect(bin2Dec(number)).toBe(0);
  });

  test('1', () => {
    const number = '00000001';
    expect(bin2Dec(number)).toBe(1);
  });

  test('2', () => {
    const number = '00000010';
    expect(bin2Dec(number)).toBe(2);
  });

  test('3', () => {
    const number = '0000011';
    expect(bin2Dec(number)).toBe(3);
  });

  test('Invalid Length', () => {
    const number = '000001111';
    expect(bin2Dec(number)).toBe('Invalid Length');
  });

  test('Invalid Char', () => {
    const number = '00003111';
    expect(bin2Dec(number)).toBe('Only 0 or 1 is accepted');
  });
});
