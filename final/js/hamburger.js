function menuToggle() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");

    if (document.getElementById("hamburger").innerHTML === "Menu") {
        document.getElementById("hamburger").innerHTML = "&#9776;";
    } else {
        document.getElementById("hamburger").innerHTML = "Menu";
    }
}