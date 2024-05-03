import React, {FunctionComponent} from 'react';
import { convert_to_Celcius } from '../lib/convert_to_celcius';

interface current_weather_State {
    curr_location: string,
    today_tempurature: number,
    warmer_or_colder: string
    //add in icon variable when know how best to pass around an image variable
}

const Weather_card: FunctionComponent<current_weather_State> = ({curr_location,today_tempurature,warmer_or_colder}) => {
    return( 
    <div>
        {/* need to pass in the date value from the API query */}
        <h2>"Todays date"</h2> 
        <h1>current location is {curr_location}</h1>
        <h2>Tempurature = {convert_to_Celcius(today_tempurature)} °C</h2>
        <h2>{warmer_or_colder}</h2>
    </div>
    )   
};

export default Weather_card;