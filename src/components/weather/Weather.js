import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

import WeatherWidget from './WeatherWidget';

const OPEN_WEATHER_MAP_KEY = '982aa7242b3357db5ad69bf590d59619';

let city;

export default function Weather() {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');


  const fetchWeatherAsync = async () => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast',
        {
          params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude, 
            lang: 'ru',
            appid: OPEN_WEATHER_MAP_KEY,
            units: 'metric',
          },
        },
        
      );
      console.log(response)
      city = response.data.city.name;

      const transformData = await response.data.list.map((data) => ({
        dt: data.dt,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
        clouds: data.clouds.all,
        wind: data.wind.speed,
      }));
      setForecast(transformData);
    } catch (err) {
        setError(err.stack);
    }
  });
  };

  useEffect(() => {
    fetchWeatherAsync();
  }, []);
console.log(forecast)
  return (
    <div className="App">
      {error.length === 0 ? (
        <WeatherWidget
          config={{
            location: city,
            unit: 'metric',
            locale: 'ru'
          }}
          forecast={forecast}
        />
      ) : (
        <div>
          <h2>Unable to fetch weather data!</h2>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};