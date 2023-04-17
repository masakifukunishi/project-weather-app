const API_KEY = "f8f6bee7d071ca7ad5262dbb8a3f2f76";
const DATA_CNT = 8;

async function threeHourRange(lat, log) {
  //console.log(lat, log);
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&cnt=${DATA_CNT}&appid=${API_KEY}&units=metric`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i < 8; i++){
            let dt = data.list[i].dt;
            let weatherTime = new Date(dt * 1000);
            let day ="";
            switch(weatherTime.getDay()){
                case 1 : day = "Mon"; break;
                case 2 : day = "Tue"; break;
                case 3 : day = "Wed"; break;
                case 4 : day = "Thur"; break;
                case 5 : day = "Fri"; break;
                case 6 : day = "Sat"; break;
                case 7 : day = "Sun"; break;
            }
  
            let hour = weatherTime.getHours() < 12 ? `${weatherTime.getHours()} AM` : `${weatherTime.getHours()} PM`;
            // let weather = data.list[i].weather[0].main;
            let weatherDes = data.list[i].weather[0].description;
            let temperature = Math.round(data.list[i].main.temp);
            let weatherIcon = data.list[i].weather[0].icon;
          
            document.querySelector(`.threeHour-${i} .threeHour__time`).innerText = `${day} ${hour}`;
            document.querySelector(`.threeHour-${i} .threeHour__weather`).innerText =`${weatherDes}`;
            document.querySelector(`.threeHour-${i} .threeHour__temp`).innerText =`${temperature} ℃`;
            document.querySelector(`.threeHour-${i} > img`).src = `https://openweathermap.org/img/wn/${weatherIcon}.png`; 
      }
    })
    .catch((error) => console.error(error));
}
