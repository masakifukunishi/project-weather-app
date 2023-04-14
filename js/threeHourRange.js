const API_KEY = "f8f6bee7d071ca7ad5262dbb8a3f2f76";
const DATA_CNT = 8;


function threeHourRange(lat, log){
    //console.log(lat, log);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${log}&cnt=${DATA_CNT}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        //console.log(url);
        //const city = document.querySelector('.threeHour-city');
        const weather_0_date = document.querySelector('.threeHour-0 .threeHour__date');
        const weather_0_time = document.querySelector('.threeHour-0 .threeHour__time');
        const weather_0_weather = document.querySelector('.threeHour-0 .threeHour__weather');
        const weather_0_des = document.querySelector('.threeHour-0 .threeHour__temp');
        const weather_0_img = document.querySelector('.threeHour-0 > img');

        const weather_1_date = document.querySelector('.threeHour-1 .threeHour__date');
        const weather_1_time = document.querySelector('.threeHour-1 .threeHour__time');
        const weather_1_weather = document.querySelector('.threeHour-1 .threeHour__weather');
        const weather_1_des = document.querySelector('.threeHour-1 .threeHour__temp');
        const weather_1_img = document.querySelector('.threeHour-1 > img');

        const weather_2_date = document.querySelector('.threeHour-2 .threeHour__date');
        const weather_2_time = document.querySelector('.threeHour-2 .threeHour__time');
        const weather_2_weather = document.querySelector('.threeHour-2 .threeHour__weather');
        const weather_2_des = document.querySelector('.threeHour-2 .threeHour__temp');
        const weather_2_img = document.querySelector('.threeHour-2 > img');

        const weather_3_date = document.querySelector('.threeHour-3 .threeHour__date');
        const weather_3_time = document.querySelector('.threeHour-3 .threeHour__time');
        const weather_3_weather = document.querySelector('.threeHour-3 .threeHour__weather');
        const weather_3_des = document.querySelector('.threeHour-3 .threeHour__temp');
        const weather_3_img = document.querySelector('.threeHour-3 > img');

        const weather_4_date = document.querySelector('.threeHour-4 .threeHour__date');
        const weather_4_time = document.querySelector('.threeHour-4 .threeHour__time');
        const weather_4_weather = document.querySelector('.threeHour-4 .threeHour__weather');
        const weather_4_des = document.querySelector('.threeHour-4 .threeHour__temp');
        const weather_4_img = document.querySelector('.threeHour-4 > img');

        const weather_5_date = document.querySelector('.threeHour-5 .threeHour__date');
        const weather_5_time = document.querySelector('.threeHour-5 .threeHour__time');
        const weather_5_weather = document.querySelector('.threeHour-5 .threeHour__weather');
        const weather_5_des = document.querySelector('.threeHour-5 .threeHour__temp');
        const weather_5_img = document.querySelector('.threeHour-5 > img');

        const weather_6_date = document.querySelector('.threeHour-6 .threeHour__date');
        const weather_6_time = document.querySelector('.threeHour-6 .threeHour__time');
        const weather_6_weather = document.querySelector('.threeHour-6 .threeHour__weather');
        const weather_6_des = document.querySelector('.threeHour-6 .threeHour__temp');
        const weather_6_img = document.querySelector('.threeHour-6 > img');

        const weather_7_date = document.querySelector('.threeHour-7 .threeHour__date');
        const weather_7_time = document.querySelector('.threeHour-7 .threeHour__time');
        const weather_7_weather = document.querySelector('.threeHour-7 .threeHour__weather');
        const weather_7_des = document.querySelector('.threeHour-7 .threeHour__temp');
        const weather_7_img = document.querySelector('.threeHour-7 > img');
        
        for(let i = 0; i < 8; i++){
            let dt = data.list[i].dt;
            let weatherTime = new Date(dt * 1000);
            
            switch(weatherTime.getDay()){
                case 1 : day = "Mon"; break;
                case 2 : day = "Tue"; break;
                case 3 : day = "Wed"; break;
                case 4 : day = "Thur"; break;
                case 5 : day = "Fri"; break;
                case 6 : day = "Sat"; break;
                case 7 : day = "Sun"; break;
            }
            
            // switch( weatherTime.getMonth()){
            //     case 1 : month = "Jan"; break;
            //     case 2 : month = "Feb"; break;
            //     case 3 : month = "Mar"; break;
            //     case 4 : month = "Apr"; break;
            //     case 5 : month = "May"; break;
            //     case 6 : month = "Jun"; break;
            //     case 7 : month = "Jul"; break;
            //     case 8 : month = "Aug"; break;
            //     case 9 : month = "Sep"; break;
            //     case 10 : month = "Oct"; break;
            //     case 11 : month = "Nov"; break;
            //     case 12 : month = "Dec"; break;
            // }
            
            let date = weatherTime.getDate();
            let hour = weatherTime.getHours() < 12 ? `${weatherTime.getHours()} AM` : `${weatherTime.getHours()} PM`;
            // let weather = data.list[i].weather[0].main;
            let weatherDes = data.list[i].weather[0].description;
            let temperature = Math.round(data.list[i].main.temp);
            let weatherIcon = data.list[i].weather[0].icon;
            
            // city.innerText = `city : ${data.city.name}`;
            // eval('weather_'+ i +'_date').innerText =  `${month}-${date} ${hour}` ;
            eval('weather_'+ i +'_time').innerText = `${day} ${hour}`;
            eval('weather_'+ i +'_weather').innerText =`${weatherDes}`;
            eval('weather_'+ i +'_des').innerText =`${temperature} ℃`;
            eval('weather_'+ i +'_img').src = `https://openweathermap.org/img/w/${weatherIcon}.png`; 
        }
    })
    .catch((error) => console.error(error));
}

