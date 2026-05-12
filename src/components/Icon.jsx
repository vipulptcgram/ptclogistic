import React from 'react';

const iconPaths = {
  truck: 'M3 7h11v8H3V7Zm11 3h3l2 2v3h-5v-5ZM7 17.5a1.5 1.5 0 1 1 0 .001ZM17 17.5a1.5 1.5 0 1 1 0 .001Z',
  plane: 'M2 14l8-3 4-7 2 1-2 7 6 2-1 2-6-1-3 5-2-1 1-5-5-1Z',
  ship: 'M3 10h18v4l-4 2-6 2-6-2-2-1v-5Zm3-4h12v3H6V6Z',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 2.7 3.8 6.2 3.8 10S14.5 19.3 12 22m0-20C9.5 4.7 8.2 8.2 8.2 12S9.5 19.3 12 22M2 12h20M4.9 6h14.2M4.9 18h14.2',
  phone: 'M6 3h4l1 4-2 2a14 14 0 0 0 6 6l2-2 4 1v4a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z',
  mail: 'M3 6h18v12H3V6Zm0 1 9 6 9-6',
  mapPin: 'M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5v5l3 2',
  check: 'M5 12l4 4 10-10',
  checkCircle: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-4 10 3 3 5-5',
  factory: 'M3 20h18V9l-5 3V9l-5 3V7L3 11v9Z',
  pill: 'M7 7a5 5 0 0 1 7 0l3 3a5 5 0 0 1-7 7l-3-3a5 5 0 0 1 0-7Zm2 2 6 6',
  car: 'M5 12 7 7h10l2 5v5h-1a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H5v-5Z',
  package: 'M3 7 12 3l9 4-9 4-9-4Zm0 4 9 4 9-4v6l-9 4-9-4v-6Z',
  shirt: 'M9 4 7 6 4 7l2 4 2-1v10h8V10l2 1 2-4-3-1-2-2H9Z',
  settings: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8 3.5-2 .7.1 2.1-2 1.2-1.3-1.6-2 .8-.4 2.1h-2.8l-.4-2.1-2-.8-1.3 1.6-2-1.2.1-2.1L4 12l.7-2-.1-2.1 2-1.2 1.3 1.6 2-.8.4-2.1h2.8l.4 2.1 2 .8 1.3-1.6 2 1.2-.1 2.1.7 2Z',
  leaf: 'M5 13c0-6 7-9 14-9-1 7-4 14-10 14-2 0-4-2-4-5Zm1 5c2-2 4-4 8-6',
  building: 'M4 20V6h7v14H4Zm9 0V3h7v17h-7ZM7 9h1m-1 3h1m7-6h1m-1 3h1m-1 3h1',
  laptop: 'M3 16h18l-1 3H4l-1-3Zm2-1V6h14v9H5Z',
  cup: 'M4 8h12v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm12 1h3a2 2 0 0 1 0 4h-2',
  flask: 'M10 3h4m-2 0v5l6 10a2 2 0 0 1-2 3H8a2 2 0 0 1-2-3l6-10V3Zm-4 9h8',
  shoppingCart: 'M3 5h2l2.2 9h9.8l2-7H7.3M9 19a1 1 0 1 0 0 .001M17 19a1 1 0 1 0 0 .001',
  shield: 'M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z',
  zap: 'M13 2 5 13h5l-1 9 8-11h-5l1-9Z',
  thermometer: 'M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0Z',
  chart: 'M4 19h16M7 16V9m5 7V6m5 10v-4',
  target: 'M12 3v18M3 12h18M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  telescope: 'M3 8l12-4 2 6-12 4-2-6Zm8 6 2 6m-4 0h8',
  gem: 'M4 8 8 3h8l4 5-8 13L4 8Z',
  clipboard: 'M9 4h6v2h3v14H6V6h3V4Zm1 0a2 2 0 1 0 4 0',
  calendar: 'M7 3v3m10-3v3M4 8h16v12H4V8Z',
  trophy: 'M8 4h8v3a4 4 0 0 1-8 0V4Zm-3 1h3v2a3 3 0 0 1-3-3V5Zm14 0h-3v2a3 3 0 0 0 3-3V5ZM10 14h4v3h-4v-3Zm-2 3h8v3H8v-3Z',
  handshake: 'M8 12 6 14a2 2 0 0 1-3-3l3-3a3 3 0 0 1 4 0l1 1m3 3 2-2a3 3 0 0 1 4 0l1 1a2 2 0 0 1-3 3l-2-2m-6-2 3 3',
  route: 'M5 6a2 2 0 1 0 0 .001M19 18a2 2 0 1 0 0 .001M7 6h5a4 4 0 0 1 0 8h-2a4 4 0 0 0 0 8h7',
  dollar: 'M12 3v18m3-14h-4a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4H9',
  fileText: 'M7 3h7l4 4v14H7V3Zm7 0v4h4M9 12h6M9 16h6',
  star: 'M12 3 14.9 8.9 21 9.8l-4.5 4.4 1.1 6.1L12 17.4 6.4 20.3l1.1-6.1L3 9.8l6.1-.9L12 3Z',
};

const Icon = ({ name, className = 'w-5 h-5', strokeWidth = 2 }) => {
  const path = iconPaths[name] || iconPaths.package;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
