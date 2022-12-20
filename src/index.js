//feature 1
let now = new Date();

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayofWeek = week[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let currentMinute = ("0" + now.getMinutes()).slice(-2);

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${dayofWeek} ${currentHour}:${currentMinute}`;

//feature 2

function changeCity(event) {
  event.preventDefault();
  let searchText = document.querySelector("#search-input-text");
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = searchText.value;
}

let searchForm = document.querySelector(".searchSection");
searchForm.addEventListener("submit", changeCity);

//feature 3
function changetoCelsius(event) {
  event.preventDefault;
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = "3";
}

function changetoFahrenheit(event) {
  event.preventDefault;
  let currentTemperature2 = document.querySelector("#current-temp");
  currentTemperature2.innerHTML = "66";
}

let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");

celsius.addEventListener("click", changetoCelsius);
fahrenheit.addEventListener("click", changetoFahrenheit);
