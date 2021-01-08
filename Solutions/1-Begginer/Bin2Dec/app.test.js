import { bin2Dec } from './app';

describe('App', () => {
  test('the first verse', () => {
    const number = '00000000';
    expect(bin2Dec(number)).toBe(0);
  });
});
