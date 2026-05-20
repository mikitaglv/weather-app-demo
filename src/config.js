// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.weatherapi.com/v1',
  ENDPOINT: '/current.json',
  KEY: import.meta.env.VITE_WEATHER_API_KEY || '9be882adaf6843798b4120516262005'
};

// App Constants
export const APP_CONSTANTS = {
  DEFAULT_CITY: 'London'
};