import { useEffect, useRef, useState } from "react";
import WeatherModel from "../../models/WeatherModel";
import WeatherApi from "../../constants/WeatherApi";

function Weather() {
  const [weather, setWeather] = useState(null);
  const { API_KEY, WEATHER_PREFIX, GEOCODE_PREFFIX } = WeatherApi;
  const lat = 4.75;
  const long = 115.0;
  const [inputtedLocation, setInputtedLocation] = useState("");
  const locationFetchLimit = "5";

  const submitLocation = () => {
    const formattedLocation = inputtedLocation
      .toLowerCase()
      .split(" ")
      .join("-");
    const url = `${GEOCODE_PREFFIX}${formattedLocation}&limit=${locationFetchLimit}&appid=${API_KEY}`;
    var alreadyHasLocation = false;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.find((location) => {
          if (location.country === "MY" && alreadyHasLocation === false) {
            console.log(
              location.name,
              "lat: ",
              location.lat,
              "long: ",
              location.lon
            );
            getWeather(location.lat, location.lon);
          }
        });
      });
  };

  const getWeather = (lat, lon) => {
    const url = `${WEATHER_PREFIX}${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("json is", JSON.stringify(data, null, 2));
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
      });
  };

  useEffect(() => {
    /*
    just temporary, later use Geocoding API
    lat: 4.75000000
    long: 115.00000000
    */

    //TODO: refactor get the location into its own function
    const url = `${WEATHER_PREFIX}${lat}&lon=${long}&exclude=minutely&units=metric&appid=${API_KEY}`;
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
        <p>Minimum Temperature: {weather.tempMin}</p>
        <p>Maximum Temperature: {weather.tempMax}</p>
        <p>Sunrise: {weather.sunrise}</p>
        <p>Sunset: {weather.sunset}</p>
      </div>
    );
  };

  const SearchLocation = () => {
    const inputRef = useRef();

    const handleInput = (event) => {
      setInputtedLocation(event.target.value);
    };

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus(null);
      }
    }, []);

    return (
      <div>
        <h2>Enter your location</h2>
        <input value={inputtedLocation} onChange={handleInput} ref={inputRef} />
        <button onClick={submitLocation}>Find out Weather</button>
      </div>
    );
  };

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
