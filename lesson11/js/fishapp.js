const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&lat=42.0380399&lon=-111.4048681&APPID=f6541e29cb635a8e5272a1705e4acb7c';

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
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=f6541e29cb635a8e5272a1705e4acb7c';
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    /*console.table(forecastObject);*/
    var forecast = jsObject['list'];
    /*.filter(x => x.dt_txt.includes('18:00:00')*/
    
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
