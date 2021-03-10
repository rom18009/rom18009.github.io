// console.log(jsObject); // uncomment "console.log(jsObject);"" to check within console

// Pull In "current-temp" and "windspeed" innerHTML span id elements
let t = document.getElementById("current-temp").innerHTML;
let s = document.getElementById("windspeed").innerHTML;
let wc = "N/A";

// if to set temp of 50 or less and windspeed greater than 3 and calculate wind chill
if (t <= 50 && s >= 3.0) {
    let calc = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
    wc = Math.round(calc) + "&#176; F";
} 
// Inject wc var into windchill innerHTML
document.getElementById("windchill").innerHTML = wc;



