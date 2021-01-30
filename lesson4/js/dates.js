const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-GB', options);

// Current Year
// document.getElementById('currentYear').textContent = new Date().getFullYear();

// Shows Last Modified Date
// document.getElementById('lastUpdated').innerHTML = document.lastModified;