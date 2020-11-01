/*function getWindchill() {
  const temperature = parseInt(document.getElementById('currTemp').innerText)
  const windSpeed = parseInt(document.getElementById('windSpeed').innerText)
  const windChill = 35.74 + (0.625*temperature) - (35.75*Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))
  document.getElementById(windChill).innerText = windChill.toFixed(2)*/

  /*getWindchill()*/

  function windChill(tempF, speed) {
    let s = Math.pow(speed, 0.16);
    f = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
    return f.toFixed(2) + "&#8457;";
  }
  
