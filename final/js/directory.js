const requestURL = 'https://rom18009.github.io/final/json/businesses.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const businesses = jsonObject['businesses'];

        for (let i = 0; i < businesses.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let address = document.createElement('p');
            let city = document.createElement('p');
            let state = document.createElement('p');
            let zipcode = document.createElement('p');
            let phone = document.createElement('p');
            let image = document.createElement('img');
            let url = document.createElement('p');



            h2.textContent = businesses[i].name;
            address.textContent = "Address: " + businesses[i].address;
            city.textContent = businesses[i].city + ", " + businesses[i].state + " " + businesses[i].zipcode;
            phone.textContent = "Phone: " + businesses[i].phone;
            url.textContent = businesses[i].url;
            image.setAttribute('src', businesses[i].logo);
            image.setAttribute('alt', businesses[i].name + ' - ' + businesses[i].order);


            card.append(h2, address, city, phone, image, url);

            document.querySelector('div.cards').appendChild(card);

        }
    });