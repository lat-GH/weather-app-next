export function query_weather_api(query_type:string, location:string): api_response
    {
        console.log("in API query with location = " + location)

        if(location === "Neverland") {
            return (
                {
                    location: "neverland",
                    todays_date: "08-05-2024",
                    todays_temperature: 40,
                    todays_conditions: "rain",
                    yesterdays_date: "07-05-2024",
                    yesterdays_temperature: 50
                }
             )
        }
        else{
            return (
                {
                    location: "far far away",
                    todays_date: "08-05-2024",
                    todays_temperature: 82,
                    todays_conditions: "sun",
                    yesterdays_date: "07-05-2024",
                    yesterdays_temperature: 80
                }
             )

        }
        
        
    }