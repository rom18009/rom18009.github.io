// One Call Forecast API from OpenWeatherMap.org for Pocatello (5604045)
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604045&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // OpenWeatherMAP.org Forecast Array for Weekdays
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var fcHeader = document.getElementsByClassName("fc_header");
        var fcImg = document.getElementsByClassName("fc_img");

        // dt_txt to pull 6 pm (18:00:00) data
        var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        var fcTemp = document.getElementsByClassName("fc_temp");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);
            // Sets fcHeader array to start on current day
            fcHeader[i].textContent = weekday[d.getDay()];

            // OpenWeatherMAP.org Forecast Icons
            const imagesfc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
            const description = data[i].weather[0].description;
            fcImg[i].setAttribute('src', imagesfc);
            fcImg[i].setAttribute('alt', description);

            // OpenWeatherMAP.org Forecast Temperature
            fcTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
        }

    });
