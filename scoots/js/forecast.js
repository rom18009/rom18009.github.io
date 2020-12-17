// Forecast URL with API Info
const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
  
        //console.log(jsObject);
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
        const d = new Date();

        for (let day = 0; day < 3; day++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[day].weather[0].icon + '.png';
            const desc = jsObject.daily[day].weather[0].description;
            document.getElementById("dayofweek" + (day + 1)).textContent = weekdays[d.getDay()+(day)];
            document.getElementById("forecast" + (day + 1)).innerHTML = Math.round(jsObject.daily[day].temp.day) + " &#176;F";
            document.getElementById("icon" + (day + 1)).setAttribute('src', imagesrc);
            document.getElementById("icon" + (day + 1)).setAttribute('alt', desc);
        }
    });