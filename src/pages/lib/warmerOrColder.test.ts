import warmerOrColder from './warmerOrColder';

// assigning the array to a union type woth 2 dimensions
const testCases: (number | string)[][] = [
  [10, 10, 'feels the same'], // Difference: 0
  [-16, -15, 'feels a little bit colder'], // Difference: -1
  [32, 35, 'feels a little bit colder'], // Difference: -3
  [3, 8, 'feels a lot colder'], // Difference: -5
  [14, 12, 'feels a little warmer'], // Difference: 2
  [-2, -5, 'feels a little warmer'], // Difference: 3
  [26, 20, 'feels a lot warmer'], // Difference: 6
];

describe('Returns the correct string based on the sifferent differences', () => {
  it.each(testCases)(
    'returns the correct warmer or colder string %i & %i = %s',
    (t, y, s) => {
      expect(warmerOrColder(<number>t, <number>y)).toBe(s);
    },
  );
});
