// constants and variables

const API_KEY = '0b5ff7344b660499375e72f1fa5dad25';

const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct?q='

function currentWeather(city) {


$.ajax(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
.then((cityName) => {
  const lat = (cityName[0].lat);
  const lon = (cityName[0].lon);
  const newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


  $.ajax(newURL)
  .then(weather => {
    console.log(weather)
    })
  })
}

$('button[id=submit]').on("click", (event) => {
  event.preventDefault();

  const inputText = $('input[type=text').val();

  currentWeather(inputText);
})

currentWeather("Seattle")