const setCurrentWeather = (currentWeather, lat, lng) => {
  const currentWeatherElement = document.getElementById("current-weather");
  currentWeatherElement.querySelector(".city").innerHTML = currentWeather.city;
  currentWeatherElement.querySelector(".temperature").innerHTML = Math.round(currentWeather.temperature) + "°C";
  currentWeatherElement.querySelector(".weather").innerHTML = currentWeather.weather;
  currentWeatherElement.querySelector(".icon").src = `https://openweathermap.org/img/w/${currentWeather.icon}.png`;
  currentWeatherElement.querySelector(".description").innerHTML = currentWeather.description;
  localStorage.setItem("lat", lat);
  localStorage.setItem("lng", lng);
  switchFavoriteRemove();
};

// This function is executed when a search is performed and when a select box is selected
const fetchWeatherData = async (lat, lng) => {
  // current weather
  const currentWeather = await fetchCurrentWeather(lat, lng);
  setCurrentWeather(currentWeather, lat, lng);
  // soojin - change 3 hour weather
  threeHourRange(lat, lng);
};
