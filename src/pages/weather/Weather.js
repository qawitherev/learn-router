import { useEffect, useRef, useState } from "react";
import WeatherModel from "../../models/WeatherModel";
import WeatherApi from "../../constants/WeatherApi";
import useFetch from "../../utils/useFetch";

// function Weather() {
//   const [weather, setWeather] = useState(null);
//   const { API_KEY, WEATHER_PREFIX, GEOCODE_PREFFIX } = WeatherApi;
//   const deafultLat = 4.75;
//   const defaultLon = 115.0;
//   const [inputtedLocation, setInputtedLocation] = useState("");
//   const locationFetchLimit = "5";

//   const submitLocation = () => {
//     const formattedLocation = inputtedLocation
//       .toLowerCase()
//       .split(" ")
//       .join("-");
//     const url = `${GEOCODE_PREFFIX}${formattedLocation}&limit=${locationFetchLimit}&appid=${API_KEY}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         data.find((location) => {
//           if (location.country === "MY") {
//             console.log(
//               location.name,
//               "lat: ",
//               location.lat,
//               "long: ",
//               location.lon
//             );
//             getWeather(location.lat, location.lon);
//           }
//         });
//       });
//   };

//   const getWeather = (lat, lon) => {
//     const url = `${WEATHER_PREFIX}${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`;
//     const {data, loading, error } = useFetch(url);

//   };

//   const WeatherDisplay = () => {
//     return (
//       <div>
//         <p>Main: {weather.main}</p>
//         <p>Description: {weather.description}</p>
//         <p>Current Temperature: {weather.temp}°</p>
//         <p>Minimum Temperature: {weather.tempMin}</p>
//         <p>Maximum Temperature: {weather.tempMax}</p>
//         <p>Sunrise: {weather.sunrise}</p>
//         <p>Sunset: {weather.sunset}</p>
//       </div>
//     );
//   };

//   const SearchLocation = () => {
//     const inputRef = useRef();

//     const handleInput = (event) => {
//       setInputtedLocation(event.target.value);
//     };

//     useEffect(() => {
//       if (inputRef.current) {
//         inputRef.current.focus(null);
//       }
//     }, []);

//     return (
//       <div>
//         <h2>Enter your location</h2>
//         <input value={inputtedLocation} onChange={handleInput} ref={inputRef} />
//         <button onClick={submitLocation}>Find out Weather</button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Weather</h1>
//       <h2>City: {weather && weather.city}</h2>
//       {weather ? <WeatherDisplay /> : <p>Weather data is loading...</p>}
//       <div>
//         <SearchLocation />
//       </div>
//     </div>
//   );
// }

// function Weather() {
//   //vanilla
//   const defaultLat = 4.75;
//   const defaultLon = 115.0;
//   const { API_KEY, WEATHER_PREFIX, GEOCODE_PREFFIX } = WeatherApi;
//   const locationFetchLimit = "5";

//   //hooks
//   const [location, setLocation] = useState("");
//   const [url, setUrl] = useState(null);
//   const { data, loading, error } = useFetch(url);
//   const [latlon, setLatLon] = useState([])

//   const SearchArea = () => {
//     const inputRef = useRef();

//     const handleInput = (event) => {
//       //   setUrl(null);
//       setLocation(event.target.value);
//     };

//     const handleButtonClick = () => {
//       const formattedLocation = location.toLowerCase().split(" ").join("-");
//       const url = `${GEOCODE_PREFFIX}${formattedLocation}&limit=${locationFetchLimit}&appid=${API_KEY}`;
//       setUrl(url);
//     };

//     useEffect(() => {
//       if (inputRef.current) {
//         inputRef.current.focus(null);
//       }
//       if (!loading && data) {
//         data.forEach((fetchedLocation) => {
//           if (
//             fetchedLocation.country === "MY" &&
//             fetchedLocation.name.toLowerCase() === location.toLowerCase()
//           ) {
//             // setLatLon([fetchedLocation.lat, fetchedLocation.lon])
//             // console.log('name: ', fetchedLocation.name, 'latlon: ', latlon[0], latlon[1])
//           }
//         });
//       }
//     }, [loading, data]);

//     return (
//       <div>
//         <h2>Enter your location</h2>
//         <input value={location} onChange={handleInput} ref={inputRef} />
//         <button onClick={handleButtonClick}>Get Weather</button>
//         {data && (
//           <div>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <SearchArea />
//     </div>
//   );
// }

function Weather() {
  const [locationChoosen, setLocationChoosen] = useState(null);
  const { API_KEY, WEATHER_PREFIX, GEOCODE_PREFIX: GEOCODE_PREFFIX } = WeatherApi;

  const [searchInput, setSearchInput] = useState(null);

  const onSearchChange = (newData) => {
    setSearchInput(newData);
    console.log('onSearchChange(), searchInput is now', searchInput)
  };

  const onLocationChoosenChange = (newData) => {
    console.log('LocationArea onDataChange');
    setLocationChoosen(newData);
  };

  useEffect(() => {
    console.log('Weather() useEffect')
  }, [searchInput, locationChoosen])

  return (
    <>
      <SearchArea onDataChange={onSearchChange} />
      {searchInput && (
        <LocationArea
          location={searchInput}
          prefix={GEOCODE_PREFFIX}
          apiKey={API_KEY}
          onDataChange={onLocationChoosenChange}
        />
      )}
      {locationChoosen && (
        <WeatherArea
          latLon={[locationChoosen.lat, locationChoosen.lon]}
          prefix={WEATHER_PREFIX}
          apiKey={API_KEY}
        />
      )}
    </>
  );
}

function SearchArea(props) {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    props.onDataChange(inputValue);
  };

  return (
    <>
      <h3>Enter your location</h3>
      <input value={inputValue} onChange={handleOnChange} autoFocus />
      <button onClick={handleOnClick}>Search Location</button>
    </>
  );
}

function LocationArea(props) {
  console.log('LocationArea rendered')
  const location = props.location;
  const prefix = props.prefix;
  const apiKey = props.apiKey;
  const formattedLocation = location.toLowerCase().split(" ").join("-");
  const url = `${prefix}${formattedLocation}&limit=5&appid=${apiKey}`;

  const [isFound, setIsFound] = useState(null);
  const [foundLocation, setFoundLocation] = useState("");

  const { data, loading, error } = useFetch(url);

  //case array empty => no location found
  useEffect(() => {
    console.log('LocationArea useEffect()');
    if (data) {
      if (data.length === 0) {
        setIsFound(0);
        return;
      }
      data.find((data) => {
        if (
          data.name.toLowerCase() === location.toLowerCase() &&
          data.country === "MY"
        ) {
          setIsFound(1);
          setFoundLocation(data);
          props.onDataChange(foundLocation);
        }
      });
    }
  }, [data, loading]);
  return (
    <>
      {isFound === 0 && <p>Location not found</p>}
      {isFound === 1 && <p>Location found! {foundLocation.name}</p>}
    </>
  );
}

function WeatherArea(props) {
  const latLon = props.latLon;
  const prefix = props.prefix;
  const apiKey = props.apiKey;
  const url = `${prefix}${latLon[0]}&lon=${latLon[1]}&exclude=minutely&units=metric&appid=${apiKey}`

  const [waetherData, setWeatherData] = useState(null)

  const { data, loading, error } = useFetch(url)

  useEffect(() => {
    if (data) {
      console.log('WeatherArea useEffect')
      setWeatherData(WeatherModel.fromJson(data))
    }
  }, [url, loading])

  return (
    <>
      {waetherData && <p>Hey! This is the weather for {waetherData.city}</p>}
    </>
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
