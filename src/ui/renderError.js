/**
 * Renders error message in the weather container
 * @param {string} message - Error message to display
 */
export const renderError = (message) => {
  const container = document.getElementById('weather-container');
  
  const errorMessage = message.includes('network') 
    ? 'Failed to connect to weather service. Please check your internet connection.'
    : message.includes('400') || message.includes('No matching location')
    ? 'City not found. Please check the spelling and try again.'
    : 'An error occurred while fetching weather data.';
  
  container.innerHTML = `
    <div class="error">
      <p>${errorMessage}</p>
    </div>
  `;
};