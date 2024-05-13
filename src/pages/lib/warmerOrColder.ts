function warmerOrColder(todaysTemp: number, yesterdaysTemp: number): string {
  const difference = todaysTemp - yesterdaysTemp;
  // eslint-disable-next-line no-console
  console.log(
    `yesterday = ${yesterdaysTemp} today = ${todaysTemp} differenece = ${difference}`,
  );

  // same as
  if (difference === 0) {
    // set_tempColour('green')
    return 'feels the same';
  }
  // colder
  if (difference < 0) {
    // set_tempColour('blue')
    if (difference < -3) {
      return 'feels a lot colder';
    }
    return 'feels a little bit colder';
  }
  // warmer
  // set_tempColour('red')
  if (difference > 3) {
    return 'feels a lot warmer';
  }
  return 'feels a little warmer';
}

export default warmerOrColder;
