const API_KEY = "f8f6bee7d071ca7ad5262dbb8a3f2f76";
const UNIT = "metric";


function threeHourRange(lat, log){
    //console.log(lat, log);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&cnt=8&appid=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(url);
        const city = document.querySelector('.threeHour__city');
        const weather_0 = document.querySelector('.threeHour__0');
        const weather_3 = document.querySelector('.threeHour__3');
        const weather_6 = document.querySelector('.threeHour__6');
        const weather_9 = document.querySelector('.threeHour__9');
        const weather_12 = document.querySelector('.threeHour__12');
        const weather_15 = document.querySelector('.threeHour__15');
        const weather_18 = document.querySelector('.threeHour__18');
        const weather_21 = document.querySelector('.threeHour__21');

        city.innerText = `city : ${data.city.name}`;
        weather_0.innerText =`${data.list[0].dt_txt} : ${data.list[0].weather[0].description}`;
        weather_3.innerText =`${data.list[1].dt_txt} : ${data.list[1].weather[0].description}`;
        weather_6.innerText =`${data.list[2].dt_txt} : ${data.list[2].weather[0].description}`;
        weather_9.innerText =`${data.list[3].dt_txt} : ${data.list[3].weather[0].description}`;
        weather_12.innerText =`${data.list[4].dt_txt} : ${data.list[4].weather[0].description}`;
        weather_15.innerText =`${data.list[5].dt_txt} : ${data.list[5].weather[0].description}`;
        weather_18.innerText =`${data.list[6].dt_txt} : ${data.list[6].weather[0].description}`;
        weather_21.innerText =`${data.list[7].dt_txt} : ${data.list[7].weather[0].description}`;
    })
}

function threeHourError(){
    alert("Can't find you. No weather for you.")
}


// navigator.geolocation.getCurrentPosition(threeHourRange,threeHourError);