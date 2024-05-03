import React, {FunctionComponent} from 'react';

interface test_props {
    location: string;
}

const Weather_card: React.FC<test_props> = ({location}) => {
    return( 
    <div>
        <h1>current location is {location}</h1>
    </div>
    )   
};

export default Weather_card;