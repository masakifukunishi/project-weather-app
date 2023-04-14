const setCurrentWeather = (currentWeather, lat, lng) => {
  const currentWeatherElement = document.getElementById("current-weather");
  currentWeatherElement.querySelector(".city").innerHTML = currentWeather.city;
  currentWeatherElement.querySelector(".temperature").innerHTML = Math.round(currentWeather.temperature) + "°C";
  currentWeatherElement.querySelector(".weather").innerHTML = currentWeather.weather;
  currentWeatherElement.querySelector(".icon").src = `https://openweathermap.org/img/wn/${currentWeather.icon}.png`;
  currentWeatherElement.querySelector(".description").innerHTML = currentWeather.description;
  localStorage.setItem("lat", lat);
  localStorage.setItem("lng", lng);
  switchFavoriteRemove();
};

// This function is executed when a search is performed and when a select box is selected
const fetchWeatherData = async (lat, lng) => {
  const currentWeatherPromise = fetchCurrentWeather(lat, lng);
  const threeHourRangePromise = threeHourRange(lat, lng);
  const fiveDaysWeatherPromise = fiveDaysWeather(lat, lng);

  const [currentWeather, ,] = await Promise.all([currentWeatherPromise, threeHourRangePromise, fiveDaysWeatherPromise]);

  setCurrentWeather(currentWeather, lat, lng);

  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
};
