/* Summary */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let temp = getRndInteger(25,90);
    let wind = getRndInteger(1,12);
    let precipitation = getRndInteger(30,100);
    let windchill = "N/A"
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







function windChill(tempF, speed) {
    let s = Math.pow(speed, 0.16);
    f = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
    return f.toFixed(2) + "&#8457;";
  }