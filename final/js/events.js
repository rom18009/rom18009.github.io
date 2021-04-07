// Town Events JSON Reference

const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towneventsobj = jsonObject['towns'];
        // If Else logic to detect main_h2 Id Element for injecting town information to the correct page
        if (document.getElementById("main_h2").innerHTML.indexOf("Preston") != -1) {
            var eventtown = towneventsobj.filter(index => index.name.includes('Preston'));
        } else if (document.getElementById("main_h2").innerHTML.indexOf("Soda") != -1) {
            var eventtown = towneventsobj.filter(x => x.name.includes('Soda'));
        } else {
            var eventtown = towneventsobj.filter(x => x.name.includes('Fish'));
        }

        // console.log(eventtown);

        for (i = 0; i < eventtown[0].events.length; i++) {
            document.getElementById("townevents").innerHTML += "<p>" + eventtown[0].events[i] + "</p>";
        }

    });