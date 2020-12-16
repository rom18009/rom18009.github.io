// Weather API Info
const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
	 
        // console.log(jsObject); // -> use to check within console
        document.getElementById('current-description').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('current-humidity').textContent = jsObject.main.humidity;
		
		var d = 1;
        
        // Weekday array
        let weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
		
		for (i = 0; i < jsObject.daily.length; i++) {
        let date = new Date(jsObject.daily[i].dt * 1000)
        let weather = weekDay[date.getDay()];

        if ( d <= 3){
           document.getElementById('weather' + d).textContent = weather;

           document.getElementById('forecast' + d).textContent = Math.ceil(jsObject.daily[i].temp.day) + '°F';

           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
           const desc = jsObject.daily[i].weather[0].description;
           document.getElementById('icon' + d).setAttribute('src', imagesrc);
           document.getElementById('icon' + d).setAttribute('alt', desc);
        

           d++

       }
   }
});
