export {};

declare global {
  interface APIResponse {
    location: string;
    todays_date: string;
    todays_temperature: number;
    todays_conditions: string;
    yesterdays_date: string;
    yesterdays_temperature: number;
  }
}
