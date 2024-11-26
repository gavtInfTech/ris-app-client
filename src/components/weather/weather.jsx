import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress, Link, Select, MenuItem } from "@mui/material";
import { api } from "../../axiosConfig";

const cityData = {
  Березино: 26853,
  Бобруйск: 26961,
  Брест: 33008,
  Витебск: 26666,
  Гомель: 33041,
  Гродно: 26820,
  Жлобин: 26966,
  Лоев: 519308,
  Минск: 26851,
  Могилев: 26862,
  Мозырь: 33036,
  Наровля: 518295,
  Петриков: 521285,
  Пинск: 33019,
  Полоцк: 26653,
  Речица: 524304,
  Светлогорск: 526298,
  Славгород: 26878,
  Шклов: 542303
};

export default function WeatherComponent() {
  const [selectedCity, setSelectedCity] = useState("Минск"); // Default to Минск
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (cityId) => {
    try {  
      setLoading(true);
      const response = await api.get(`weather/${cityId}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(cityData[selectedCity]);
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!weatherData) {
    return <Typography>Не удалось загрузить погоду.</Typography>;
  }

  const {
    t,
    speedWind,
    dirWind,
    w,
    pStation,
    pSea,
    vis_m,
  } = weatherData;

  const windDirections = [
    "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный",
    "Южный", "Юго-Западный", "Западный", "Северо-Западный"
  ];
  const windDirection = windDirections[Math.round(dirWind / 45) % 8];

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f4f7fa",
        maxWidth: 300,
        textAlign: "center",
      }}
    >
      <Select
        value={selectedCity}
        onChange={handleCityChange}
        sx={{ mb: 2 }}
      >
        {Object.keys(cityData).map((city) => (
          <MenuItem key={city} value={city}>{city}</MenuItem>
        ))}
      </Select>

      <Typography variant="h6" gutterBottom>
        Фактическая погода
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {new Date(weatherData.d).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}
      </Typography>
      <Typography variant="h2" color="primary" sx={{ fontWeight: "bold", mt: 2 }}>
        {t}°C
      </Typography>
      
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Typography variant="body2">Ветер:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            {speedWind} м/с, {windDirection}
          </Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Typography variant="body2">Влажность:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{w}%</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2">Давление (ст.):</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{pStation} гПа</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2">Давление (море):</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{pSea} гПа</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2">Видимость:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{(vis_m / 1000).toFixed(2)} км</Typography>
        </Grid>
      </Grid>

      <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
        Данные взяты с сайта{" "}
        <Link href="https://pogoda.by/" target="_blank" rel="noopener noreferrer" underline="hover">
          pogoda.by
        </Link>
      </Typography>
    </Box>
  );
}
