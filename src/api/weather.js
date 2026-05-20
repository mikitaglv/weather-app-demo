import { API_CONFIG } from '../config.js';

/**
 * Fetches current weather data for a given city
 * @param {string} city - City name to search for
 * @returns {Promise<Object>} Weather data or error object
 */
export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT}?key=${API_CONFIG.KEY}&q=${city}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.status || 'network_error'
    };
  }
};