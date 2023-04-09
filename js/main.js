const setCurrentWeather = (currentWeather, lat, lng) => {
  document.getElementById("city").innerHTML = currentWeather.city;
  document.getElementById("currentTemperature").innerHTML = currentWeather.temperature;
  document.getElementById("currentWeather").innerHTML = currentWeather.weather;
  document.getElementById("currentDescription").innerHTML = currentWeather.description;
  localStorage.setItem("lat", lat);
  localStorage.setItem("lng", lng);
  switchFavoriteRemove();
};

// This function is executed when a search is performed and when a select box is selected
const fetchWeatherData = async (lat, lng) => {
  // current weather
  const currentWeather = await fetchCurrentWeather(lat, lng);
  setCurrentWeather(currentWeather, lat, lng);
};
