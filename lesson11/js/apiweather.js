// One Call Weather API URL from OpenWeatherMap.org for Pocatello (lat=42.8752269&lon=-112.46417)
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.8752269&lon=-112.46417&exclude=minutely,hourly&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject); // uncomment out to see in inspect console    
        const description = jsObject.current.weather[0].description;
        const tempF = jsObject.current.temp;
        const humidity = jsObject.current.humidity;
        document.getElementById('current-temp').innerHTML = Math.round(tempF) + "&#176;F";
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('current-desc').textContent = description;
    });

    function closebutton() {
        document.querySelector(".weatheralert").style.display = "none";
    }

