import { useState, useEffect } from 'react';

const WMO_CODES = {
    0: { label: '기분 좋은 맑음', icon: 'sun' },
    1: { label: '햇살 가득한 날', icon: 'sun' },
    2: { label: '뭉게구름 살짝', icon: 'partly-cloudy' },
    3: { label: '포근하게 흐린 날', icon: 'cloud' },
    45: { label: '몽글몽글 안개', icon: 'fog' },
    48: { label: '앞이 보이지 않는 안개', icon: 'fog' },
    51: { label: '속삭이는 이슬비', icon: 'drizzle' },
    61: { label: '톡톡 내리는 비', icon: 'rain' },
    63: { label: '시원하게 쏟아지는 비', icon: 'rain' },
    71: { label: '포슬포슬 눈꽃', icon: 'snow' },
    80: { label: '갑작스런 소나기', icon: 'rain' },
    95: { label: '우르르 쾅쾅 뇌우', icon: 'thunder' },
  }

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('위치 확인 중');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('위치 정보를 지원하지 않는 브라우저입니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const { latitude: lat, longitude: lon } = coords;
        
        // 도시명 가져오기
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ko`);
        const geoData = await geoRes.json();
        setCity(geoData.address?.city || geoData.address?.county || '현재 위치');

        // 날씨 데이터 가져오기
        const meteoRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m&timezone=auto`);
        const meteoData = await meteoRes.json();
        const cur = meteoData.current;

        setWeather({
          temp: Math.round(cur.temperature_2m),
          wind: cur.windspeed_10m.toFixed(1),
          humidity: cur.relativehumidity_2m,
          ...WMO_CODES[cur.weathercode] ?? { label: '알 수 없음', icon: 'cloud' },
        });
      } catch (err) {
        setError('날씨 정보를 불러오는 데 실패했습니다.');
      }
    }, () => setError('위치 권한이 거부되었습니다.'));
  }, []);

  return { weather, city, error };
};