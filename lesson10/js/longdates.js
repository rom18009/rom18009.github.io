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

