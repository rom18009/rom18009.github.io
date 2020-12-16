// Rental Information from API
const rentalURL = 'https://rom18009.github.io/final/data/rentalinfo.json';

fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(rentalURL);

        const rental = jsObject.rental;
        
        for (let type = 0; type < rental.length; type++) {
            document.getElementById(`max${type+1}`).textContent = rental[type].maximum; // maximum persons
            document.getElementById(`half${type+1}`).textContent = rental[type].reservation[0].half; //half reservation prices
            document.getElementById(`full${type+1}`).textContent = rental[type].reservation[0].full; // full reservation prices
        }

    });