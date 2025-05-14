import { warmerOrColder } from '../types/types';

function warmerOrColderCalc(
  todaysTemp: number,
  yesterdaysTemp: number,
): string {
  const difference = todaysTemp - yesterdaysTemp;
  // eslint-disable-next-line no-console
  // console.log(
  //   `yesterday = ${yesterdaysTemp} today = ${todaysTemp} differenece = ${difference}`,
  // );

  // same as
  if (difference === 0) {
    // set_tempColour('green')
    return warmerOrColder.Same;
  }
  // colder
  if (difference < 0) {
    // set_tempColour('blue')
    if (difference < -3) {
      return warmerOrColder.LotCold;
    }
    return warmerOrColder.LilCold;
  }
  // warmer
  // set_tempColour('red')
  if (difference > 3) {
    return warmerOrColder.LotWarm;
  }
  return warmerOrColder.LilWarm;
}

export default warmerOrColderCalc;
