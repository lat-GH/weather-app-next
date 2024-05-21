import convertToCelcius from './convertToCelcius';

describe('convertToCelcius', () => {
  it('returns True', () => {
    expect(convertToCelcius(100)).toBe(38);
    expect(convertToCelcius(0)).toHaveBeenCalledWith(0);
  });
});
