function menuToggle() {
    document.getElementsByClassName("clearfix")[0].classList.toggle("responsive");

    if (document.getElementById("hamburger").innerHTML === "Menu") {
        document.getElementById("hamburger").innerHTML = "X";
    } else {
        document.getElementById("hamburger").innerHTML = "Menu";
    }
}