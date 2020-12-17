// Weather API Info
const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";

//weather summary
const reqURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
fetch(reqURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const iconSrc = "https://openweathermap.org/img/w/" + jsObject.current.weather[0].icon + '.png';
        const altText = jsObject.current.weather[0].description;
        document.getElementById(`icon`).setAttribute('src', iconSrc);
        document.getElementById(`icon`).setAttribute('alt', altText);

        const temp = jsObject.current.temp;
        document.getElementById('ctemperature').textContent = temp;

        const desc = jsObject.current.weather[0].main;
        document.getElementById('description').textContent = desc;

        const humid = jsObject.current.humidity;
        document.getElementById('humidity').textContent = humid;
    });

//3-day forecast
const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";
fetch(forecastURL)
    .then((res) => res.json())
    .then(res => {
        const {
            daily
        } = res;

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        for (let day = 0; day < daily.length; day++) {
            const d = new Date(daily[day].temp.day);
            console.log(d);
            document.getElementById(`fcDay${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`fcTemp${day+1}`).textContent = daily[day].temp.day;
            const imgSrc = 'https://openweathermap.org/img/w/' + daily[day].weather[0].icon + '.png';
            const altDesc = daily[day].weather[0].description;
            document.getElementById(`fcIcon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`fcIcon${day+1}`).setAttribute('alt', altDesc);
        }

        //alerts
        const alertEvent = jsObject.alert.event;
        document.getElementById('alertevent').textContent = alertEvent;
        const alertText = jsObject.alert.description;
        document.getElementById('alertdesc').textContent = alertText;
    });
