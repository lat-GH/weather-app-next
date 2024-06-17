import { APIResponse } from '../types/types';
import convertToCelcius from '../lib/convertToCelcius';

function queryWeatherApi(queryType: string, location: string): APIResponse {
  // console.log(`in API query with location = ${location}`);

  // test case
  if (location === 'Neverland') {
    return {
      location: 'neverland',
      todays_date: '08-05-2024',
      todays_temperature: convertToCelcius(40),
      todays_conditions: 'rain',
      yesterdays_date: '07-05-2024',
      yesterdays_temperature: convertToCelcius(50),
    };
  }
  // otherwise grab data from API
  return {
    location: 'far far away',
    todays_date: '08-05-2024',
    todays_temperature: convertToCelcius(82),
    todays_conditions: 'sun',
    yesterdays_date: '07-05-2024',
    yesterdays_temperature: convertToCelcius(80),
  };
}

export default queryWeatherApi;
