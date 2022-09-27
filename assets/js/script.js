const APIKey = "9073278d26315ddad5d7b4c589fbb8c2";
const city = $('#cities').val()


//get city lat/long
// function getLatLong(){
//   let city = $('#cities').val()
//   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + APIKey)
//   .then(response => {
//     return response.json();
//   })
//     .then(data => {
//       localStorage.setItem("lat",JSON.stringify(data.coord.lat))
//       localStorage.setItem("lon",JSON.stringify(data.coord.lon))
//     })
//   };


// fetching 5 day forecast
// function getForecast(){
// let lat = localStorage.getItem("lat","");
// let lon = localStorage.getItem("lon","");
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,daily&units=imperial&appid=" + APIKey)
//   .then(response => {
//     return response.json();
//   })
//     .then(data => {
//       console.log(JSON.stringify(data))
//     })
// };



//fetch request for daily weather
function getWeather() {
  let city = $('#cities').val();
  var dailyInfo = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey)
    .then(response => {
      return response.json();
    })
    .then(data => {
      localStorage.setItem('practice', JSON.stringify(data))
      console.log(JSON.stringify(data.main))
      // changing text content
      document.querySelector('#cityName').innerText = data.name;
      document.querySelector("#weatherInfo").innerText = "Conditions: " + data.weather[0].description;
      document.querySelector("#humidity").innerText = "Humidity: " + JSON.stringify(data.main.humidity);
      document.querySelector("#windSpeed").innerText = "Wind Speed: " + JSON.stringify(data.wind.speed); 
      document.querySelector("#temp").innerText = "Current temp: " + JSON.stringify(data.main.temp) + "°";
      let icon = data.weather[0].icon
      $('#icon').attr(
        "src", "http://openweathermap.org/img/wn/" + icon + ".png",
        "alt", "weather icon"
      );
      });
  };
let date = moment().format("MMM, DD, YYYY");
      $("#date").text(date)



//on click function
$('#search').on("click", getWeather);

