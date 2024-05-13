/* eslint-disable import/extensions */
import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';

import { Select } from '@headlessui/react';
import warmerOrColder from '../lib/warmerOrColder';
import convertToCelcius from '../lib/convertToCelcius';
import queryWeatherApi from '../api/queryWeatherApi';

interface current_weather_State {
  todays_date: string;
  curr_location: string;
  today_tempurature: number;
  warmer_or_colder: string;
  todays_conditions: string;
  // add in icon variable when know how best to pass around an image variable
}

const WeatherCard: FunctionComponent = () => {
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
    console.log(`weatherState object AFTER = ${copy.curr_location}`);
    setWeatherState(copy);
    // console.log('weatherState object AFTER = ' + weatherState.curr_location);
  };

  useEffect(() => {
    const newAipQuery = queryWeatherApi('test', weatherState.curr_location);
    const copy = { ...weatherState };
    copy.todays_date = newAipQuery.todays_date;
    // TODO move this function call to inside if the api function not here
    copy.today_tempurature = convertToCelcius(newAipQuery.todays_temperature);
    copy.warmer_or_colder = warmerOrColder(
      newAipQuery.todays_temperature,
      newAipQuery.yesterdays_temperature,
    );
    copy.todays_conditions = newAipQuery.todays_conditions;
    setWeatherState(copy);
  }, [weatherState.curr_location]);

  return (
    <div>
      <Select
        name="location"
        value={weatherState.curr_location}
        onChange={locationSelection}
        className="border data-[hover]:shadow data-[focus]:bg-blue-100"
        aria-label="Selected location"
      >
        <option value="London">London</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Sydney">Sydney</option>
        <option value="Neverland">Neverland</option>
      </Select>

      <h2>{weatherState.todays_date}</h2>
      <h1>current location = {weatherState.curr_location}</h1>

      <h2>Tempurature = {weatherState.today_tempurature} °C</h2>
      <h2>{weatherState.warmer_or_colder}</h2>
      <h2>{weatherState.todays_conditions}</h2>
    </div>
  );
};

export default WeatherCard;