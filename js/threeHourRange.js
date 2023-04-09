const API_KEY = "f8f6bee7d071ca7ad5262dbb8a3f2f76";

function threeHourRange(position){
    const lat = localStorage.getItem("lat");
    const lon = localStorage.getItem("lng");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(url);

        const weather_0 = document.querySelector('.threeHour__0');
        const weather_3 = document.querySelector('.threeHour__3');
        const weather_6 = document.querySelector('.threeHour__6');
        const weather_9 = document.querySelector('.threeHour__9');
        const weather_12 = document.querySelector('.threeHour__12');
        const weather_15 = document.querySelector('.threeHour__15');
        const weather_18 = document.querySelector('.threeHour__18');
        const weather_21 = document.querySelector('.threeHour__21');

        weather_0.innerText =`0 - 3 : ${data.weather[0].main}`;
        weather_3.innerText =`3 - 6 : ${data.weather[0].main}`;
        weather_6.innerText =`6 - 9 : ${data.weather[0].main}`;
        weather_9.innerText =`9 - 12 : ${data.weather[0].main}`;
        weather_12.innerText =`12 - 15 : ${data.weather[0].main}`;
        weather_15.innerText =`15 - 18 : ${data.weather[0].main}`;
        weather_18.innerText =`18 - 21 : ${data.weather[0].main}`;
        weather_21.innerText =`21 - 0 : ${data.weather[0].main}`;
    })
}

function threeHourError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(threeHourRange,threeHourError);