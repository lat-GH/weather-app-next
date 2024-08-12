/* eslint-disable import/extensions */
import React, {
  // FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';

import { Select } from '@headlessui/react';
import warmerOrColder from '../lib/warmerOrColder';
import queryWeatherApi from '../api/queryWeatherApi';

interface current_weather_State {
  todays_date: string;
  curr_location: string;
  today_tempurature: number;
  warmer_or_colder: string;
  todays_conditions: string;
  // add in icon variable when know how best to pass around an image variable
}

// const WeatherCard: FunctionComponent = () => {
// TODO understand what the difference between a component and fucntion component is
export default function WeatherCard() {
  // const [weatherState, set_weatherState] = useState<current_weather_State[]>();

  const [weatherState, setWeatherState] = useState<current_weather_State>({
    todays_date: 'default date',
    curr_location: 'default_location',
    today_tempurature: 0,
    warmer_or_colder: 'default colder',
    todays_conditions: 'default condition',
  });

  // called in the onChange event handeler
  const locationSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log("running event handler = " + e.currentTarget.value)
    console.log(`weatherState object BEFORE = ${weatherState.curr_location}`);
    const newLocation = e.currentTarget.value;
    const copy = { ...weatherState };
    copy.curr_location = newLocation;
    console.log(`weatherState object COPY = ${copy.curr_location}`);
    setWeatherState(copy);
    console.log('weatherState object AFTER = ' + weatherState.curr_location);
  };

  // these fucntions will get run when the curr_location key of the WatherState object gets changed
  useEffect(() => {
    // console.log('IN USE EFFECT' + weatherState.curr_location);

    //beacue i need this fucntion to run asynchornoulsy(beacuse it fetches api data), i need to first rcreate it before i can run it
    const getWeatherData = async () => {
      // console.log('IN getWeatherData ASYNC FUNCTION');
      const newAipQuery = await queryWeatherApi(
        'API',
        weatherState.curr_location,
      );

      let newState: current_weather_State = {
        todays_date: newAipQuery.todays_date,
        curr_location: weatherState.curr_location,
        today_tempurature: newAipQuery.todays_temperature,
        warmer_or_colder: warmerOrColder(
          newAipQuery.todays_temperature,
          newAipQuery.yesterdays_temperature,
        ),
        todays_conditions: newAipQuery.todays_conditions,
      };
      setWeatherState(newState);
    };

    // creating an calling the async function because its depende upon an api
    getWeatherData();
  }, [weatherState.curr_location]);

  return (
    <div>
      <h2 data-testid="date">{weatherState.todays_date}</h2>

      <Select
        name="location"
        // TODO be sure that you should be pasing in the object directly?
        //value={weatherState.curr_location} // TODO learn what this value means? is this supposed to be the default
        onChange={locationSelection}
        className="border data-[hover]:shadow data-[focus]:bg-blue-100"
        // aria-label="Selected location"
        // data-testid="dropDown"
      >
        <option value="Select a location">Select a location</option>
        <option value="London">London</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Sydney">Sydney</option>
        <option value="Neverland">Neverland</option>
        <option value="foo">bar</option>
      </Select>

      <h1>current location = {weatherState.curr_location}</h1>

      <h2>Tempurature = {weatherState.today_tempurature} °C</h2>
      <h2>{weatherState.warmer_or_colder}</h2>
      <h2>{weatherState.todays_conditions}</h2>
    </div>
  );
}

// export default WeatherCard;
