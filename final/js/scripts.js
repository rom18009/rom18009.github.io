/* This is the main scripts.js that combine all scripts used for the site*/

// Date Script 
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

// Shows Current Date
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-GB', options);

// Shows Current Year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Menu Toggle Script
function menuToggle() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");

    if (document.getElementById("hamburger").innerHTML === "Menu") {
        document.getElementById("hamburger").innerHTML = "&#9776;";
    } else {
        document.getElementById("hamburger").innerHTML = "Menu";
    }
}

// Web Font
WebFont.load({
    google: {
        families: ['Roboto']
    }
});