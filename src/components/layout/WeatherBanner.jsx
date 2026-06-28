import { useState } from 'react';
import "./WeatherBanner.scss";
import { useWeather } from '../../hooks/useWeather';
import WeatherIcon from '../common/WeatherIcon';
import CountUp from '../common/CountUp';

export default function WeatherBanner() {
  const { weather, city, error } = useWeather();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const isDemo = !!error;
  const weatherLoaded = !isDemo && !!weather

  return (
    <div className={`weather-banner ${isDemo ? 'weather-banner--demo' : ''}`}>

      <div className="weather-banner__left">
        <div className="weather-banner__icon-box">
          <WeatherIcon type={isDemo ? 'sun' : weather?.icon ?? 'sun'} />
        </div>

        <span className="weather-banner__tag">Now</span>

        <span className="weather-banner__text">
          {isDemo
            ? (
              <>
                위치 권한을 허용하면 현재 지역의 실시간 날씨를 확인할 수 있습니다.
              </>
            )
            : weather
              ? `${city} · ${weather.label}`
              : `${city}에서 날씨 불러오는 중...`}
        </span>
      </div>

      <div className="weather-banner__right">
        {isDemo ? (
          <>
            <span className="weather-banner__pill">🌐 OpenWeather API</span>
            <span className="weather-banner__pill">📍 Geolocation API</span>
          </>
        ) : weather ? (
          <>
            <span className="weather-banner__temp">
              <CountUp value={`${weather.temp}°C`} active={weatherLoaded} />
            </span>

            <span className="weather-banner__pill">
              습도 <CountUp value={`${weather.humidity}%`} active={weatherLoaded} />
            </span>

            <span className="weather-banner__pill">
              바람 <CountUp value={`${weather.wind}m/s`} active={weatherLoaded} />
            </span>
          </>
        ) : null}
      </div>

      <button
        onClick={() => setVisible(false)}
        className="weather-banner__close-btn"
        aria-label="날씨 알림 닫기"
      >
        ✕
      </button>

    </div>
  );
}