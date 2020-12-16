const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f6541e29cb635a8e5272a1705e4acb7c';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject); 
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    let output = "N/A";
    document.getElementById('weather').innerHTML = jsObject.weather[0].description;
    document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
    if (t <= 50 && s >= 3) {
      let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
      output = Math.round(f);
    };
    document.getElementById("output").innerHTML = output + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
    document.getElementById('speed').innerHTML = Math.round(s) + " mph";

  });

  //forecast
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f59f532633b10d55bbf07be7f8538bff';
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.table(forecastObject);
    var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.table(forecast);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day = 0; day < forecast.length; day++) {
      const d = new Date(forecast[day].dt_txt);
      const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
      const desc = forecast[day].weather[0].description;
      document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
      document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
    }

  });

  //rentals

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    
    // console.table(jsonObject); // temporary checking for valid response and data parsing
  

const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
          if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let towninfo = document.createElement('section');
                let textcontainer = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');                
               
    
                h2.textContent = towns[i].name;

                // code for populating info
                towninfo.setAttribute('class', towns[i].name);
                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                image.setAttribute('src', "image/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                textcontainer.append(h2, motto, founded, population, rain, image);
                towninfo.append(textcontainer, image);

                document.querySelector('div.towns').appendChild(towninfo);
            }

        }
    });