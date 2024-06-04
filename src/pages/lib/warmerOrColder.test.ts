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

describe('Can returne the correct string based on different differences', () => {
  it('returns the approaite test case result', () => {
    testCases.forEach(([t, y, s]) => {
      expect(warmerOrColder(<number>t, <number>y)).toBe(<string>s);
    });
  });
});
