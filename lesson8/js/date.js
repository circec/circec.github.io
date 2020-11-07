let date = new Date();
let todaydate = date.getDate();

document.getElementById("update").innerHTML = date.toDateString();

//pancakes

if (new Date().getDay() == 5) {
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
];

// Range Adjustment
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}