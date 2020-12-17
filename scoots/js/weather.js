// Weather API Info
const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4999&lon=-86.9499&units=imperial&appid=f53db318c33586f3b186050f6fe7e3ea";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        const desc = jsObject.current.weather[0].description;
        const tempF = jsObject.current.temp;
        document.getElementById('temperatureinput').textContent = Math.round(tempF);
        document.getElementById('weatherdescription').textContent = desc;
        document.getElementById('weatherhumidity').textContent = jsObject.current.humidity;
        document.getElementById('alertarea').textcontent = desc;

    });

function closebutton() {
    document.querySelector(".weatheralert").style.display = "none";
}
