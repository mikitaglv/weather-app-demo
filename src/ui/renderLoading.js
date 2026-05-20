/**
 * Renders loading state in the weather container
 */
export const renderLoading = () => {
  const container = document.getElementById('weather-container');
  container.innerHTML = '<div class="loading">Loading...</div>';
};