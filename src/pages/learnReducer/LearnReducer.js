import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import useFetch from "../../utils/useFetch";
import { useEffect } from "react";
import WeatherApi from "../../constants/WeatherApi";
import WeatherModel from "../../models/WeatherModel";
import userEvent from "@testing-library/user-event";

export function LearnReducer() {
  return (
    <>
      <h1>Learn Reducer</h1>
      <p>
        Just a simple counter using <code>useReducer</code>
      </p>
      <Counter />
      <h3>Now using useContext and useReducer with the weather example</h3>
      <Weather />
    </>
  );
}

/**
 * Things in recuder has 3 things
 * 1. the Reducer function (the event and what to do; like bloc)
 * 2. the initialState
 * 3. the component that is using the reducer
 */

//the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
};

//initial state
const initialState = { count: 0 };

//component tht is using the reducer
const Counter = () => {
  //declare the reducer, give the reducer function and the state to the reducer constructor
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
};

//******************************************************** */
//the w means weather

//initial state

const { API_KEY, WEATHER_PREFIX, GEOCODE_PREFIX } = WeatherApi;

const wInitialState = {
  latLon: null,
  weatherData: null,
  searchState: null //--> 0: not found (array empty, no 'MY'), 1: found
};

//reducer function
const wReducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      console.log('SET_LOCATION action')
      return { ...state, latLon: action.payload };
    case "SET_WEATHERDATA":
      return { ...state, weatherData: action.payload };
      case "SET_STATE": 
      return { ...state, }
    default:
      return state;
  }
};

//create the context object
const WeatherContext = createContext();

//component that is uisng the reducer, in this case a context
const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wReducerFunction, wInitialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

const Weather = () => {
  const [state, dispatch] = useReducer(wReducerFunction, wInitialState)
  return (
    <>
      <WeatherProvider>
        <SearchLocation />
        <SearchWeather />
      </WeatherProvider>
    </>
  );
};

const SearchLocation = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState(null);
  const { data, loading, error } = useFetch(url);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    if (inputValue === "") return;
    const formattedLocation = inputValue.toLowerCase().split(" ").join("-");
    setUrl(`${GEOCODE_PREFIX}${formattedLocation}&limit=5&appid=${API_KEY}`);
  };

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        console.log('No data')
        return 
      }
      const latLon = data.find((item) => {
        if (
          item.name.toLowerCase() === inputValue.toLowerCase() &&
          item.country === "MY"
        ) {
          console.log(JSON.stringify(item, null, 2))
          const value = { lat: item.lat, lon: item.lon };
          return value;
        }
        return null;
      });
      if (latLon) {
        dispatch({type: "SET_LOCATION", payload: latLon})
      }

    }
  }, [data, loading, error]);

  return (
    <>
      <h3>Enter your location</h3>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Get Weather</button>
      {state.latLon && <p>location latlon is {state.latLon.lat}, {state.latLon.lon}</p>}
    </>
  );
};

const SearchWeather = () => {
  console.log('SearchWeather')
  const { state, dispatch } = useContext(WeatherContext)
  const url =  state.latLon ? `${WEATHER_PREFIX}${state.latLon.lat}&lon=${state.latLon.lon}&exclude=minutely&units=metric&appid=${API_KEY}` : null
  const { data, loading, error } = useFetch(url)

  useEffect(() => {
    if (data) {
      const weatherModel = WeatherModel.fromJson(data)
      dispatch({type: 'SET_WEATHERDATA', payload: weatherModel})
    }
  }, [data, loading, error])

  return (
    <>
      { state.weatherData && <WeatherDisplay />}
    </>
  ) 
}

const WeatherDisplay = () => {
  const { state, dispatch } = useContext(WeatherContext)
  
  return (
    <>
      <h3>Weather for {state.weatherData.city}</h3>
    </>
  )
}
