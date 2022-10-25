// constants and variables

const API_KEY = '0b5ff7344b660499375e72f1fa5dad25';

const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=';

// HTML h4 selector variables 
const $city = $("#city");
const $temp = $("#temp");
const $index = $("#index");
const $desc = $("#desc");

// functions
function tempConverter(temp) {
  fahTemp = Math.round((temp - 273.15) * 9/5 + 32);
  return fahTemp
}


function currentWeather(city) {

// calling the api to gather the lat/lon 
$.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
.then((cityName) => {
  const lat = (cityName[0].lat);
  const lon = (cityName[0].lon);
  const newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

// using the lat/lon data and then calling for the weather for the city
  $.ajax(newURL)
  .then(weather => {
    console.log(weather);

// rendering the date to the page
    $city.text(weather.name);
    $temp.text(tempConverter(weather.main.temp));
    $index.text(tempConverter(weather.main.feels_like));
    $desc.text(weather.weather[0].description);
    })
  })
}

$('button[id=submit]').on("click", (event) => {
  event.preventDefault();

  const inputText = $('input[type=text').val();

  currentWeather(inputText);
})

