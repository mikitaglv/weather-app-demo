/**
 * Renders weather data in the weather container
 * @param {Object} data - Weather data from API
 */
export const renderWeather = (data) => {
  const container = document.getElementById('weather-container');
  const current = data.current;
  const location = data.location;
  
  container.innerHTML = `
    <div class="weather-card">
      <div class="location">
        <h2>${location.name}, ${location.country}</h2>
      </div>
      
      <div class="weather-info">
        <div class="temp">
          <span class="temp-value">${current.temp_c}°C</span>
        </div>
        
        <div class="condition">
          <img src="${current.condition.icon}" alt="${current.condition.text}" class="weather-icon" />
          <span class="condition-text">${current.condition.text}</span>
        </div>
        
        <div class="details">
          <div class="detail-item">
            <span class="detail-label">Humidity</span>
            <span class="detail-value">${current.humidity}%</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Wind Speed</span>
            <span class="detail-value">${current.wind_kph} km/h</span>
          </div>
        </div>
      </div>
    </div>
  `;
};