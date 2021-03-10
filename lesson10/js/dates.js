// Shows Last Modified Date
// document.getElementById('lastUpdated').innerHTML = document.lastModified;

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-GB', options);

// Shows Friday Announcement Banner if Day equals 5
day = new Date().getDay();
let announcement = document.getElementById("announcement");

if (day == 1) {
    announcement.style.display = "block";
} else {
    announcement.style.display = "none";
}