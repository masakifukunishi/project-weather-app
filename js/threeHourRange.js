const API_KEY = "f8f6bee7d071ca7ad5262dbb8a3f2f76";
const UNIT = "metric";


function threeHourRange(lat, log){
    //console.log(lat, log);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&cnt=8&appid=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        // console.log(url);
        const city = document.querySelector('.threeHour-city > span');
        const weather_0 = document.querySelector('.threeHour-0 > span');
        const weather_0_img = document.querySelector('.threeHour-0 > img');
        const weather_1 = document.querySelector('.threeHour-1 > span');
        const weather_1_img = document.querySelector('.threeHour-1 > img');
        const weather_2 = document.querySelector('.threeHour-2 > span');
        const weather_2_img = document.querySelector('.threeHour-2 > img');
        const weather_3 = document.querySelector('.threeHour-3 > span');
        const weather_3_img = document.querySelector('.threeHour-3 > img');
        const weather_4 = document.querySelector('.threeHour-4 > span');
        const weather_4_img = document.querySelector('.threeHour-4 > img');
        const weather_5 = document.querySelector('.threeHour-5 > span');
        const weather_5_img = document.querySelector('.threeHour-5 > img');
        const weather_6 = document.querySelector('.threeHour-6 > span');
        const weather_6_img = document.querySelector('.threeHour-6 > img');
        const weather_7 = document.querySelector('.threeHour-7 > span');
        const weather_7_img = document.querySelector('.threeHour-7 > img');
        
        for(let i = 0; i < 8; i++){
            
            let weatherTime = data.list[i].dt_txt; 
            let weatherDes = data.list[i].weather[0].description;
            let weatherIcon = data.list[i].weather[0].icon;
            
            city.innerText = `city : ${data.city.name}`;
            eval('weather_'+ i).innerText =`${weatherTime} : ${weatherDes}`;
            eval('weather_'+ i +'_img').src = `https://openweathermap.org/img/w/${weatherIcon}.png`; 
        }
    })
    .catch((error) => console.error(error));
}

