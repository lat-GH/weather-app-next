import { APIResponse } from '../types/types';
import convertToCelcius from '../lib/convertToCelcius';
import { error } from 'console';

function APITransformer(
  //TODO figure out a more rigerous way of handeling the types of the incoming api data than just any?
  succT: boolean,
  dataT: any,
  succY: boolean,
  dataY: any,
): APIResponse {
  //set a default
  let defaultData = {
    address: 'DEAFULT ADDRESS',
    days: [{ datetime: 'DEAFULT DATE', temp: 32, icon: 'DEAFULT ICON' }],
  };
  if (!succT) {
    dataT = defaultData;
  }
  if (!succY) {
    dataY = defaultData;
  }

  const returnData: APIResponse = {
    location: dataT.address,
    todays_date: dataT.days[0].datetime,
    todays_temperature: convertToCelcius(dataT.days[0].temp),
    todays_conditions: dataT.days[0].icon,
    yesterdays_date: dataY.days[0].datetime,
    yesterdays_temperature: convertToCelcius(dataY.days[0].temp),
  };

  return returnData;
}

async function queryWeatherApi(
  queryType: string,
  location: string,
): Promise<APIResponse> {
  if (queryType === 'API') {
    console.log(`in API query with location = ${location}`);
    // const API_URL =
    //   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    // // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=us&include=days&key=AGX6UGDFKCDXBXR42836HWC4L&contentType=json
    // const API_key = 'key=AGX6UGDFKCDXBXR42836HWC4L';

    // const responseToday = await fetch(
    //   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days&${API_key}&contentType=json`,
    // );
    // const dataToday = await responseToday.json();

    // const responseYesterday = await fetch(
    //   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/yesterday?unitGroup=us&${API_key}&contentType=json`,
    // );
    // const dataYesterday = await responseYesterday.json();

    // ----------------------------------------------------------------------

    let dataToday: object = {};
    let successfulDataToday = false;

    const API_key = 'key=AGX6UGDFKCDXBXR42836HWC4L';
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days&${API_key}&contentType=json`,
      );

      dataToday = await response.json();
      successfulDataToday = true;
      //console.log('+++++++++++ DATATODAY = ', dataToday);
      // console.log(
      //   '+++++++++++++++++++++++++++ DataToday type =',
      //   typeof dataToday,
      // );
    } catch (err) {
      // use an error management system e.g. Sentry
      console.error(err);
      //console.log('+++++++++IN THE CATCH');
    }

    let dataYesterday: object = {};
    let successfulDataYesterday = false;
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/yesterday?unitGroup=us&include=days&${API_key}&contentType=json`,
      );

      dataYesterday = await response.json();
      successfulDataYesterday = true;
      //console.log('+++++++++++ DATATODAY = ', dataToday);
    } catch (err) {
      // use an error management system e.g. Sentry
      console.error(err);
      //console.log('+++++++++IN THE CATCH');
    }

    return APITransformer(
      successfulDataToday,
      dataToday,
      successfulDataYesterday,
      dataYesterday,
    );
  }
  // used for testing with some mocked data built in
  else {
    if (location === 'Neverland') {
      // test case
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
}

export default queryWeatherApi;
