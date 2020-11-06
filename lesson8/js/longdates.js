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

/*// Shows Friday Announcement Banner
day = new Date().getDay();
let announcement = document.getElementById("announcement");

if (day == 5) {
    announcement.style.display = "block";
} else {
    announcement.style.display = "none";
}*/