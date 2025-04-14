export type APIResponse = {
  location: string;
  todays_date: string;
  todays_temperature: number;
  todays_conditions: string;
  yesterdays_date: string;
  yesterdays_temperature: number;
};

export type current_weather_State = {
  todays_date: string;
  curr_location: string;
  today_tempurature: number;
  warmer_or_colder: string;
  todays_conditions: string;
  // add in icon variable when know how best to pass around an image variable
};
