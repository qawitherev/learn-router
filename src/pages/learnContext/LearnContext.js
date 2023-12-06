import React, { createContext, useContext, useEffect, useState } from 'react';
import WeatherApi from '../../constants/WeatherApi';
import useFetch from '../../utils/useFetch';
import WeatherModel from '../../models/WeatherModel';

const WeatherContext = createContext()
const  { API_KEY, WEATHER_PREFIX, GEOCODE_PREFIX } = WeatherApi


const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null)
    const [latLon, setLatLon] = useState({lat: -1, lon: -1})
    const [state, setState] = useState(0) //-> 0: initial, 1: found, 2: not found

    useEffect(() => {
        if (state === 1) {
            console.log('location found')
            return 
        }
        if (state === 2) {
            console.log('location not found')
        }
    }, [state])

    return (
        <WeatherContext.Provider value={{weather, setWeather, latLon, setLatLon, state, setState}} >
            {children}
        </WeatherContext.Provider>
    )
}

export function MyWeather() {
    return (
        <WeatherProvider>
            <SearchLocation />
            <SearchWeather />
        </WeatherProvider>
    )
}

function SearchLocation() {
    const { setLatLon, setState } = useContext(WeatherContext)
    const [input, setInput] = useState("")
    const [url, setUrl] = useState(null)    

    const { data, loading, error } = useFetch(url)

    const handleOnChange = e => {
        setInput(e.target.value)
    }

    const handleLocationChange = () => {
        if (input === "") return
        const formattedLocation = input.toLowerCase().split(" ").join("-")
        setUrl(`${GEOCODE_PREFIX}${formattedLocation}&limit=5&appid=${API_KEY}`)
        console.log('url is: ', url)
    }

    useEffect(() => {
        console.log(JSON.stringify(data, null, 2))
        if (data) {
            if (data.length === 0) {
                setState(2)
                return 
            }

            data.find((item) => {
                if (item.name.toLowerCase() === input.toLowerCase() && item.country === 'MY') {
                    const latLon = { lat: item.lat, lon: item.lon}
                    setLatLon(latLon)
                    setState(1)
                }
            })
        }
    }, [data, loading, error])

    return (
        <>
            <p>Enter your location</p>
            <input type="text" value={input} onChange={handleOnChange} />
            <button onClick={handleLocationChange} >test</button>
        </>
    )
}

function SearchWeather() {
    const { latLon, weather, setWeather, state } = useContext(WeatherContext)
    const { lat, lon } = latLon
    const url = `${WEATHER_PREFIX}${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`
    const { data, loading, error } = useFetch(url)

    useEffect(() => {
        if (data) {
            // console.log(JSON.stringify(data, null, 2))
            const weatherData = WeatherModel.fromJson(data)
            setWeather(weatherData)
        }
    }, [data, loading, error])

    return (
        //case location not found, case location found, show weather 
        <>
            { state === 2 ? <p>Location not found</p> : null}
            { lat != -1 && lon != -1 && state === 1 ? <p>This is weather for {weather.city} </p> : null }
        </>
    )
}