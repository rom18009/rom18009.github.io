// Shows Last Modified Date
// document.getElementById('lastUpdated').innerHTML = document.lastModified;

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-GB', options);

// // Current Year
// document.getElementById('currentYear').textContent = new Date().getFullYear();

// Shows Friday Announcement Banner
day = new Date().getDay();
let announcement = document.getElementById("announcement");

if (day == 5) {
    announcement.style.display = "block";
} else {
    announcement.style.display = "none";
}