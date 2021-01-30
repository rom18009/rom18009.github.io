// Small view hamburger menu
const hambutton = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar')

hambutton.addEventListener('click', () => {navbar.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) navbar.classList.remove('responsive')};