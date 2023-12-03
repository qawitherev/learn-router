import { useEffect, useState } from "react";
import WeatherModel from "../../models/WeatherModel";
import WeatherApi from "../../constants/WeatherApi";

function Weather() {
  const [weather, setWeather] = useState(null);
  const { API_KEY, PREFIX } = WeatherApi;
  const lat = 4.75;
  const long = 115.0;
  const [inputtedLocation, setInputtedLocation] = useState('');

  useEffect(() => {
    // console.log(`API_KEY is ${API_KEY}, prefix is ${PREFIX}`)
    /*
    just temporary, later use Geocoding API
    lat: 4.75000000
    long: 115.00000000
    */
    const url = `${PREFIX}${lat}&lon=${long}&exclude=minutely&units=metric&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //make the weather object
        const currentWeather = new WeatherModel(
          data.weather[0].main,
          data.weather[0].description,
          data.main.temp,
          data.main.feels_like,
          data.main.temp_min,
          data.main.temp_max,
          data.sys.sunrise,
          data.sys.sunset,
          data.name
        );
        setWeather(currentWeather);
      })
      .catch((error) => console.error(`Error fetching data error: ${error}`));
  }, []);

  const WeatherDisplay = () => {
    return (
        <div>
            <p>Main: {weather.main}</p>
            <p>Description: {weather.description}</p>
            <p>Current Temperature: {weather.temp}°</p>
            <p>Feels Like: {weather.feels_like}</p>
            <p>Minimum Temperature: {weather.tempMin}</p>
            <p>Maximum Temperature: {weather.tempMax}</p>
            <p>Sunrise: {weather.sunrise}</p>
            <p>Sunset: {weather.sunset}</p>
        </div>
    ); 
  }

  const SearchLocation = () => {

    return (
        <div>
            <h2>Enter your location</h2>
            <input type='text' value={inputtedLocation}  />
            <button>Find out Weather</button>
        </div>
    ); 
  }

  return (
    <div>
      <h1>Weather</h1>
      <h2>City: {weather && weather.city}</h2>
      {weather ? <WeatherDisplay /> : <p>Weather data is loading...</p>}
      <div>
        <SearchLocation />
      </div>
    </div>
  );
}

export default Weather;


/*
flow 
1. user enter location inside textbox 
2. click search
3. display weatherData

flow technical 
1. get inputted location 
2. get location 
    if has space, add hypen in between (format)
3. make url, combine prefix with formatted location
4. get jsonData, check if location is 'MY'
5. get the lat, long
6. get the weather data 
7. END 

*/