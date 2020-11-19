const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f6541e29cb635a8e5272a1705e4acb7c';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
       console.log(jsObject);

       const curtemp = document.querySelector('#current-temp');
       const iconsource = document.querySelector('#imagesrc');
       const weathericon = document.querySelector('#icon');

       curtemp.innerHTML = jsObject.main.temp;
       iconsource.textContent = 'https://api.openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
       const isrc =  'https://api.openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
       weathericon.setAttribute('src', isrc);
       weathericon.setAttribute('alt', jsObject.weather[0].description);
       
  
      /*document.getElementById('current-temp').textContent = jsObject.main.temp;

  
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
document.getElementById('current-temp').textContent = jsObject.main.temp;*/

});