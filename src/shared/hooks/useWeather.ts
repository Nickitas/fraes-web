import { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  uvIndex: number;
  pressure: number;
  location: string;
}

interface WeatherError {
  message: string;
}

export function useWeather(lat: number, lon: number) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<WeatherError | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,uv_index,surface_pressure&timezone=auto`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        const weatherData: WeatherData = {
          temperature: Math.round(data.current.temperature_2m),
          apparentTemperature: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
          weatherCode: data.current.weather_code,
          uvIndex: Math.round(data.current.uv_index),
          pressure: Math.round(data.current.surface_pressure),
          location: "Сочи",
        };

        setWeather(weatherData);
      } catch (err) {
        setError({ message: err instanceof Error ? err.message : "Unknown error" });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Обновляем данные каждые 10 минут
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [lat, lon]);

  return { weather, loading, error };
}

function getWeatherEmoji(code: number): string {
  // Коды погоды Open-Meteo: https://open-meteo.com/en/docs
  if (code === 0) return "☀️"; // Ясно
  if (code <= 3) return "🌤️"; // Переменная облачность
  if (code <= 49) return "☁️"; // Туман
  if (code <= 69) return "🌧️"; // Дождь
  if (code <= 79) return "❄️"; // Снег
  if (code <= 99) return "⛈️"; // Гроза
  return "🌤️"; // По умолчанию
}

function getUVDescription(uvIndex: number): string {
  if (uvIndex <= 2) return "(низкий)";
  if (uvIndex <= 5) return "(умеренный)";
  if (uvIndex <= 7) return "(высокий)";
  if (uvIndex <= 10) return "(очень высокий)";
  return "(экстремальный)";
}

export { getWeatherEmoji, getUVDescription };