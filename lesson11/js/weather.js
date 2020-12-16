if (document.getElementById("weathername").innerHTML.indexOf("Preston") != -1) {
    weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
} else if (document.getElementById("weathername").innerHTML.indexOf("Soda") != -1) {
    weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
} else {
    weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
}

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject); // -> use to check within console

        document.getElementById('current-temp').innerHTML = Math.round(jsObject.main.temp) + " &#176;F";
        document.getElementById('hi-temp').innerHTML = Math.round(jsObject.main.temp_max) + " &#176;F";
        document.getElementById('low-temp').innerHTML = Math.round(jsObject.main.temp_min) + " &#176;F";
        document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('currdescription').textContent = jsObject.weather[0].description;

        // calculate windchill
        let t = (Math.round(jsObject.main.temp));
        let s = (Math.round(jsObject.wind.speed));
        let wc = "N/A";
        if (t <= 50 && s >= 3.0) {
            let calc = (35.74 + (.6215 * t)) - (35.75 * (Math.pow(s, .16))) + (.4275 * (t * (Math.pow(s, .16))));
            wc = Math.round(calc) + " &#176;F";
        }
        document.getElementById("windchill").innerHTML = wc;
    });

if (document.getElementById("weathername").innerHTML.indexOf("Preston") != -1) {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else if (document.getElementById("weathername").innerHTML.indexOf("Soda") != -1) {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
}

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