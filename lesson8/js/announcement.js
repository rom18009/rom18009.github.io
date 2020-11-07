// Shows Friday Announcement Banner
day = new Date().getDay();
let announcement = document.getElementById("announcement");

if (day == 5) {
    announcement.style.display = "block";
} else {
    announcement.style.display = "none";
}