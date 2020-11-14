const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    
    // console.table(jsonObject); // temporary checking for valid response and data parsing
  

  /*const towns = jsonObject['towns'];

  towns.forEach(towns => {


    if (towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs') {

        let card = document.createElement('section');

        let display = document.createElement('div');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('h3');
        let currentPopulation = document.createElement('h3');
        let photo = document.createElement('img');
        let name = document.createElement('h2');
        let averageRainfall = document.createElement('h3');

        photo.setAttribute('src', towns.photo);
        motto.innerHTML = `<i>${towns.motto}`;
        display.setAttribute('class', 'display');
        card.setAttribute('class', 'sectdiv');

        currentPopulation.innerHTML = `Population: ${towns.currentPopulation}`;
        yearFounded.innerHTML = `Year Founded: ${towns.yearFounded}`;
        name.innerHTML = `${towns.name}`;
        averageRainfall.innerHTML = `Average Rainfall :${towns.averageRainfall}`;
        card.appendChild(display);
        display.appendChild(name);

        display.appendChild(motto);
        display.appendChild(yearFounded);
        display.appendChild(currentPopulation);
        display.appendChild(averageRainfall);

        card.appendChild(photo);

        document.querySelector('div.cards').appendChild(card);
    }
});
});*/

const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let towninfodenise = document.createElement('section');
                let textcontainer = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                //dle code for populating info
                towninfodenise.setAttribute('class', towns[i].name);
                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                textcontainer.append(h2, motto, founded, population, rain);
                towninfodenise.append(textcontainer, image);

                document.querySelector('div.towns').appendChild(towninfodenise);
            }

        }
    });