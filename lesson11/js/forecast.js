if (document.getElementById("weathername").innerHTML.indexOf("Preston") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else if (document.getElementById("weathername").innerHTML.indexOf("Soda") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
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