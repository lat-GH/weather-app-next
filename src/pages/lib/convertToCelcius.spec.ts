import convertToCelcius from './convertToCelcius';

const testCases = [
  [14.0, -10],
  [32, 0],
  [41, 5],
  [48.2, 9],
  [64.4, 18],
];

describe('Can convert 32F to 0C', () => {
  it('returns 0', () => {
    expect(convertToCelcius(32)).toBe(0);
  });
});

describe('Can convert a selction of farenhieghts to Celcius', () => {
  it('returns the appropriate test case result', () => {
    testCases.forEach(([f, c]) => {
      expect(convertToCelcius(f)).toBe(c);
    });
  });
});
