function convertToCelcius(f: number): number {
  return Math.round((f - 32) * (5 / 9));
}

export default convertToCelcius;
