/*function menuToggle() {
    document.getElementsByClassName("clearfix")[0].classList.toggle("responsive");

    if (document.getElementById("hamburger").innerHTML === "Menu") {
        document.getElementById("hamburger").innerHTML = "&#9776;";
    } else {
        document.getElementById("hamburger").innerHTML = "Menu";
    }
}*/


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);