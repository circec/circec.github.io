const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  

  const prophets = jsonObject['towns'];

  for (let i = 0; i < prophets.length; i++ ) {

  
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let birthdate = document.createElement('p');
  let birthplace = document.createElement('p');
  let portrait = document.createElement('img');


  h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
  birthdate.textContent = "Day of Birth: " + prophets[i].birthdate;
  birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
  portrait.setAttribute('src', prophets[i].imageurl);

  card.appendChild(h2);
  card.appendChild(birthdate);
  card.appendChild(birthplace);
  card.appendChild(portrait);

  document.querySelector('div.cards').appendChild(card);
  }
});
