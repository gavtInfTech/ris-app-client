import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress, Link } from "@mui/material";
import { IconBrandSpeedtest, IconDroplet } from "@tabler/icons-react";
import { api } from "../../axiosConfig";

// ⚠️ Лучше переместить API ключ в переменные окружения (.env)
const API_KEY = "3a608d0742cb14e9bc5a090a3b3719d0";

const reverseGeocode = async (lat, lon) => {
  try {
    const response = await api.get(`/weatherName?lat=${lat}&lon=${lon}`);
    const data = response.data; // ✅ axios уже распарсил JSON
    console.log("Название:", data);

    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.state
    );
  } catch (error) {
    console.error("Ошибка при геокодировании:", error);
    return "Неизвестное место";
  }
};

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("WEATHER DATA:", data);

      if (data.cod !== 200) {
        console.error("Ошибка OpenWeatherMap API:", data.message);
        setWeatherData(null);
        return;
      }

      const RU_name = await reverseGeocode(lat, lon);

      setWeatherData({ ...data, name: RU_name });
    } catch (error) {
      console.error("Ошибка при получении погоды:", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocationByIP();
  }, []);

  const getLocationByIP = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const { latitude, longitude } = data;

      if (latitude && longitude) {
        fetchWeather(latitude, longitude);
      } else {
        setLocationError("Не удалось определить местоположение по IP.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Ошибка при получении IP-геолокации:", error);
      setLocationError("Ошибка при определении местоположения.");
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;
  if (locationError) return <Typography>{locationError}</Typography>;
  if (!weatherData)
    return (
      <Typography sx={{ textAlign: "center" }}>
        Не удалось загрузить погоду.
      </Typography>
    );

  const {
    name,
    main: { temp, humidity, pressure, grnd_level },
    visibility,
    wind: { speed, deg },
    dt,
    weather,
  } = weatherData;

  const windDirections = [
    "Северный",
    "Северо-Восточный",
    "Восточный",
    "Юго-Восточный",
    "Южный",
    "Юго-Западный",
    "Западный",
    "Северо-Западный",
  ];
  const windDirection = windDirections[Math.round(deg / 45) % 8];

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f4f7fa",
        textAlign: "left",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "26px" }} gutterBottom>
          Фактическая погода, {name}
          <Typography
            sx={{ display: "inline", fontSize: "16px" }}
            variant="body2"
            color="textSecondary"
          >
            {" "}
            {new Date(dt * 1000).toLocaleTimeString("ru-RU", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          color="orange"
          sx={{ fontWeight: "bold", fontSize: "32px" }}
        >
          {Math.round(temp)}°C
        </Typography>
        {weather?.[0]?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            title={weather[0].description}
            style={{ width: 68, height: 68 }}
          />
        )}
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <IconDroplet />
          <Typography>Влажность: {humidity}%</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <IconBrandSpeedtest />
          <Typography>
            Давление: на уровне станции {grnd_level} гПа [
            {(grnd_level * 0.75006).toFixed(1)} мм рт. ст.]
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <IconBrandSpeedtest />
          <Typography>
            Давление: на уровне моря {pressure} гПа [
            {(pressure * 0.75006).toFixed(1)} мм рт. ст.]
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            Ветер: {speed} м/с, {windDirection}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Видимость: {(visibility / 1000).toFixed(1)} км
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 2,
          textAlign: "center",
          fontSize: "14px",
          color: "#888",
        }}
      >
        Данные предоставлены{" "}
        <a
          href={`https://openweathermap.org/`}
          target="_blank"
          style={{ color: "blue" }}
        >
          OpenWeatherMap
        </a>
      </Box>
    </Box>
  );
}
