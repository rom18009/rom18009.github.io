// WeatherAPI Info
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        // console.log(jsObject); // -> use to check within console
        document.getElementById('currdescription').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(jsObject.main.temp) + " &#176;F";
        document.getElementById('low-temp').innerHTML = Math.round(jsObject.main.temp_min) + " &#176;F";
        document.getElementById('hi-temp').innerHTML = Math.round(jsObject.main.temp_max) + " &#176;F";
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        
    });

// ForecastAPI Info
const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        // forecast array
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var forecastHeader = document.getElementsByClassName("forecastheader");
        var forecastImg = document.getElementsByClassName("forecastimg");
        var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
        var forecastTemp = document.getElementsByClassName("forecasttemp");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);

            forecastHeader[i].textContent = weekday[d.getDay()];

        // forecast icons
        const imagesfc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
        const description = data[i].weather[0].description;
        forecastImg[i].setAttribute('src', imagesfc);
        forecastImg[i].setAttribute('alt', description);

        // forecast temp
        forecastTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
        }

    });