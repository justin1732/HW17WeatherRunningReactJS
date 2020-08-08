import React, { useState } from 'react';
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
   let [responseObj, setResponseObj ] = useState({});
   function getForecast() {
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Seattle", {
         "method": "GET",
         "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "266bc2b71cmshbb78cfc2479da47p1be11ajsn2733c6547a4b"
         }
      })
.then (response => response.json())
.then(response => {
	setResponseObj(response)
})
.catch(err => {
	console.log(err);
});
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions
        responseObj = {responseObj}
        />
</div>
   )
}
export default Forecast;