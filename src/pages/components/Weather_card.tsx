/* eslint-disable import/extensions */
import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';

import { Select } from '@headlessui/react';
import warmerOrColder from '../lib/warmerOrColder';
import convert_to_Celcius from '../lib/convert_to_celcius';
import { query_weather_api } from '../api/query_weather_API';

interface current_weather_State {
  todays_date: string;
  curr_location: string;
  today_tempurature: number;
  warmer_or_colder: string;
  todays_conditions: string;
  //add in icon variable when know how best to pass around an image variable
}

//TODO --- find out if you still need to pass in these paramters into the fucntion component
const Weather_card: FunctionComponent = () => {
  // const [weatherState, set_weatherState] = useState<current_weather_State[]>();

  const [weatherState, set_weatherState] = useState<current_weather_State>({
    todays_date: 'default date',
    curr_location: 'default_location',
    today_tempurature: 0,
    warmer_or_colder: 'default colder',
    todays_conditions: 'default condition',
  });

  //this is the fucntion that gets called in the onChange event handeler
  const location_selection = (e: ChangeEvent<HTMLSelectElement>) => {
    //console.log("running event handler = " + e.currentTarget.value)
    console.log('weatherState object BEFORE = ' + weatherState.curr_location);
    const new_location = e.currentTarget.value;
    let copy = { ...weatherState };
    copy.curr_location = new_location;
    console.log('weatherState object AFTER = ' + copy.curr_location);
    set_weatherState(copy);
    //console.log('weatherState object AFTER = ' + weatherState.curr_location);
  };

  useEffect(() => {
    let new_api_query = query_weather_api('test', weatherState.curr_location);
    let copy = { ...weatherState };
    copy.todays_date = new_api_query.todays_date;
    copy.today_tempurature = convert_to_Celcius(
      new_api_query.todays_temperature,
    ); //TODO move this function call to inside if the api function not here
    copy.warmer_or_colder = warmerOrColder(
      new_api_query.todays_temperature,
      new_api_query.yesterdays_temperature,
    );
    copy.todays_conditions = new_api_query.todays_conditions;
    set_weatherState(copy);
  }, [weatherState.curr_location]);

  return (
    <div>
      <Select
        name="location"
        value={weatherState.curr_location}
        onChange={location_selection}
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

export default Weather_card;
