const apiKey = "f8f6bee7d071ca7ad5262dbb8a3f2f76";

const fetchCurrentWeather = async (lat, lng) => {
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${unit}&appid=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const temperature = data.main.temp;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      return { city, temperature, weather, icon, description };
    })
    .catch((error) => console.error(error));
};
