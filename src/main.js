import { fetchWeather } from './api/weather.js';
import { renderWeather } from './ui/renderWeather.js';
import { renderError } from './ui/renderError.js';
import { renderLoading } from './ui/renderLoading.js';
import { APP_CONSTANTS } from './config.js';

/**
 * Handles search form submission
 * @param {Event} e - Form submit event
 */
const handleSearch = async (e) => {
  e.preventDefault();
  
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value.trim();
  
  if (!city) {
    renderError('Please enter a city name');
    return;
  }
  
  // Show loading state
  renderLoading();
  
  // Fetch weather data
  const result = await fetchWeather(city);
  
  // Render appropriate view based on result
  if (result.success) {
    renderWeather(result.data);
  } else {
    renderError(result.error);
  }
};

/**
 * Initializes the application
 */
const init = () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleSearch);
  }
  
  // Set up initial state
  document.getElementById('city-input').focus();
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);