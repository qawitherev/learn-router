class WeatherModel {
  constructor(
    main,
    description,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    sunrise,
    sunset,
    city
  ) {
    this.main = main;
    this.description = description;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this._sunrise = sunrise;
    this._sunset = sunset;
    this.city = city;
  }

  //factory
  static fromJson(json) {
    return new WeatherModel(
      json.weather[0].main,
      json.weather[0].description,
      json.main.temp,
      json.main.feels_like,
      json.main.temp_min,
      json.main.temp_max,
      json.sys.sunrise,
      json.sys.sunset,
      json.name
    );
  }

  get sunrise() {
    return this.convertUnixToReadable(this._sunrise);
  }

  get sunset() {
    return this.convertUnixToReadable(this._sunset);
  }

  convertUnixToReadable(unixTimeStamp) {
    const date = new Date(unixTimeStamp * 1000);
    const readable = date.toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return readable;
  }
}

export default WeatherModel;

/*
JSON sample is 
{
    "coord": {
        "lon": 115,
        "lat": 4.75
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 29.06,
        "feels_like": 36.06,
        "temp_min": 29.06,
        "temp_max": 29.06,
        "pressure": 1008,
        "humidity": 87,
        "sea_level": 1008,
        "grnd_level": 1008
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.85,
        "deg": 8,
        "gust": 1.7
    },
    "clouds": {
        "all": 85
    },
    "dt": 1701600264,
    "sys": {
        "type": 1,
        "id": 9377,
        "country": "MY",
        "sunrise": 1701555229,
        "sunset": 1701597936
    },
    "timezone": 28800,
    "id": 1737714,
    "name": "Limbang",
    "cod": 200
}
*/
