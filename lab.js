

// variable for weather/geo api key
const apiKey = "0b5ff7344b660499375e72f1fa5dad25";

// variable for base URL for weather
const weatherURL = "http://api.openweathermap.org";




function geoLocation(cityInput) {

  $("#submit").on("click", (event) => {
    event.preventDefault();
    const cityInput = $("input[type=text]").val();
    
  })

  const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&appid=${apiKey}`

  $.ajax(geoURL)
  .then((city) => {
    console.log(city)

  })

}

function weatherSearch(city) {
  const urlW = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`
  console.log(urlW)

}


weatherSearch('bonney lake')