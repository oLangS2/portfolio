const WeatherIcon = ({ type, size = 14 }) => {
  const s = { width: size, height: size };

  const icons = {
    sun: (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#ffe500" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const d = (deg * Math.PI) / 180;
          const x1 = 12 + 6 * Math.cos(d);
          const y1 = 12 + 6 * Math.sin(d);
          const x2 = 12 + 9 * Math.cos(d);
          const y2 = 12 + 9 * Math.sin(d);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </svg>
    ),
    cloud: (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    rain: (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
        <path d="M17.5 15H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9z" />
        <line x1="8" y1="19" x2="8" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="16" y1="19" x2="16" y2="21" />
      </svg>
    ),

    snow: (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round">
        <path d="M17.5 15H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9z" />
        <path d="M8 18h0m0-2h0m0 4h0m-1-2h2" strokeWidth="2.5" />
        <path d="M12 20h0m0-2h0m0 4h0m-1-2h2" strokeWidth="2.5" />
        <path d="M16 18h0m0-2h0m0 4h0m-1-2h2" strokeWidth="2.5" />
      </svg>
    ),
  };

  return icons[type] || icons.sun;
};

export default WeatherIcon;