function fiveDaysWeather(lat, lng) {
    const apiKey = "f8f6bee7d071ca7ad5262dbb8a3f2f76";

    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
    fetch(URL)
    .then(response =>response.json())
    .then(data =>{
        const interval = Math.floor(data.list.length / 5);
        let count = 0;
        for (i = 0; i < data.list.length; i += interval) {
          document.getElementById(`day${count + 1}Min`).innerHTML = "Min:" + Math.round(data.list[i].main.temp_min) + "°";
          document.getElementById(`day${count + 1}Max`).innerHTML = "Max:" + Math.round(data.list[i].main.temp_max) + "°";
          document.getElementById(`img${count + 1}`).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
          document.querySelector(`.weather_day${count+1}`).innerText = data.list[i].weather[0].main; 
          count++;
        }
    })
}

