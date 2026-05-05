import { useState, useEffect } from 'react';
import "./WeatherBanner.scss";
import { useWeather } from '../../hooks/useWeather';
import WeatherIcon from '../common/WeatherIcon';

export default function WeatherBanner() {
  const { weather, city, error } = useWeather();
  const [visible, setVisible] = useState(true)

  // error 시 배너 닫기
  if (!visible || error) return null

  return (
    <div className="weather-banner">

      <div className="weather-banner__left">
        <div className="weather-banner__icon-box">
          <WeatherIcon type={weather?.icon ?? 'sun'} />
        </div>
        <span className="weather-banner__tag">Now</span>
        <span className="weather-banner__text">
          {weather ? `${city} · ${weather.label}` : `${city}에서 날씨 불러오는 중 · · · `}
        </span>
      </div>

      {weather && (
        <div className="weather-banner__right">
          <span className="weather-banner__temp">{weather.temp}°C</span>
          <span className="weather-banner__pill">습도 {weather.humidity}%</span>
          <span className="weather-banner__pill">바람 {weather.wind}m/s</span>
        </div>
      )}

      <button
        onClick={() => setVisible(false)}
        className="weather-banner__close-btn"
        aria-label="날씨 알림 닫기"
      >
        ✕
      </button>
    </div>
  )
}

