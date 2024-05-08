export function warmer_or_colder_calculator(todays_temp:number,yesterdays_temp:number): string
    {
        const difference = todays_temp - yesterdays_temp
        console.log(`yesterday = ${yesterdays_temp} today = ${todays_temp} differenece = ${difference}`)

         //same as
         if(difference === 0){
            //set_tempColour('green')
            return "feels the same"
           
        }
        //colder
        if(difference < 0){
            //set_tempColour('blue')
            if(difference < -3){
                return "feels a lot colder"

            }else{
                return "feels a little bit colder"
            }          
        }
        //warmer
        else{
            //set_tempColour('red')
            if (difference > 3){
                return "feels a lot warmer"
            }else{
                return "feels a little warmer"
            }          
        }


        
    }