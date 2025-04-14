/* eslint-disable import/extensions */
import React, {
  // FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';

import { Select } from '@headlessui/react';
import useWeatherSateUpdate from '../hooks/useWeatherStateUpdate';

// const WeatherCard: FunctionComponent = () => {
// TODO understand what the difference between a function and fucntionComponent is
export default function WeatherCard() {
  const [currentLocation, setCurrentLocation] = useState('');
  //const { weatherState } = useWeatherSateUpdate(currentLocation);
  const weatherState = {
    todays_date: 'default date',
    curr_location: 'default_location',
    today_tempurature: 0,
    warmer_or_colder: 'default colder',
    todays_conditions: 'default condition',
  };

  // called in the onChange event handeler
  const locationSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    //setCurrentLocation(e.currentTarget.value);
    console.log('locationSelection triggered');
  };

  return (
    <div>
      <h2 data-testid="date">{weatherState.todays_date}</h2>

      <Select
        name="location"
        // TODO be sure that you should be pasing in the object directly?
        //value={weatherState.curr_location} // TODO learn what this value means? is this supposed to be the default // look up controlled inputs
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
