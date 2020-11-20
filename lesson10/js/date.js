function main(){
    doBanner();
    getDate();
    getSummary();
}

let date = new Date();
let todaydate = date.getDate();

document.getElementById("update").innerHTML = date.toDateString();

//pancakes

/*if (new Date().getDay() == 5) {
    document.getElementById("pancakes").innerHTML = "Saturday = Preston Pancakes in the Park!</br>9:00 a.m. Saturday at the city park pavilion.";
} else {
    document.getElementById("pancakes").style.display = "none";
}
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];*/

var pancakeExists = document.querySelector("#pancakes") !== null;
if (pancakeExists && new Date().getDay() != 5) {
  document.querySelector("#pancakes").style.display = 'none';
}


/* Summary */


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let temp = getRndInteger(25,90);
    let wind = getRndInteger(1,12);
    let precipitation = getRndInteger(30,100);
    let windchill = "N/A";
    /*windChill(tempF, speed);*/
    if (temp <= 50 && wind > 3.0){
        windchill = windChill(temp, wind);
    }

    if (precipitation  > 70) {
        traffic = "Heavy. Average delay of 40 - 50 minutes.";
    }
    else if (precipitation > 50){
        traffic = "Mild. Average delay of 20 - 30 minutes.";
    }
    else{
        traffic = "Normal. No delays expected.";
    }

    document.getElementById('temperature').innerHTML = `Current temperature: ${temp}&#8457;`
    document.getElementById('precipitation').innerHTML = `Precipitation: ${precipitation}%`
    document.getElementById('wind').innerHTML = `Wind speed: ${wind} MPH`
    document.getElementById('windchill').innerHTML = `Wind Chill: ${windchill}`
    document.getElementById('traffic').innerHTML = `Traffic: ${traffic}`
}


