import { useState, useEffect } from 'react';

import warmerOrColderCalc from '../lib/warmerOrColderCalc';
import queryWeatherApi from '../api/queryWeatherApi';
import { current_weather_State, warmerOrColder } from '../types/types';

export default function useWeatherStateUpdate(currentLocation: string) {
  const [weatherState, setWeatherState] = useState<current_weather_State>({
    todays_date: 'default date',
    curr_location: 'default_location',
    today_tempurature: 0,
    warmer_or_colder: warmerOrColder.Same,
    todays_conditions: 'default condition',
  });

  // these fucntions will get run when the curr_location key of the WatherState object gets changed
  useEffect(() => {
    // console.log('IN USE EFFECT' + weatherState.curr_location);

    //beacue i need this fucntion to run asynchornoulsy(beacuse it fetches api data), i need to first rcreate it before i can run it
    //keep the function definition inside of the useEffect so that it is only created when the useffect runs
    //not everytime the hook (that would mean it would be called everytime the componet rerendere)

    const setWeatherData = async () => {
      // console.log('IN getWeatherData ASYNC FUNCTION');
      const newAipQuery = await queryWeatherApi('API', currentLocation);

      let newState: current_weather_State = {
        todays_date: newAipQuery.todays_date,
        curr_location: currentLocation,
        today_tempurature: newAipQuery.todays_temperature,
        warmer_or_colder: warmerOrColderCalc(
          newAipQuery.todays_temperature,
          newAipQuery.yesterdays_temperature,
        ),
        todays_conditions: newAipQuery.todays_conditions,
      };
      setWeatherState(newState);
    };

    // creating an calling the async function because its depende upon an api
    setWeatherData();
  }, [currentLocation]);

  return { weatherState };
}
