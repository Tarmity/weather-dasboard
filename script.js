let button = document.querySelector('.search-btn');
let userInput = document.querySelector('.input-text');


button.addEventListener('click', function (event) {
  event.preventDefault()
  getWeather(userInput.value);
  foreCast(userInput.value);
  storeCityList(userInput.value);
  renderCities();
})
//Function calling the openweather API and returing the current day weather forecast
function getWeather(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const currentDate = new Date(data.dt * 1000);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formatedDate = (day + '/' + month + '/' + year);
      //console.log(formatedDate);

      let weatherPic = data.weather[0].icon;
      let weatherUrl = "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png"
      let currentPic = $('#current-pic').attr('src', weatherUrl);

      $('.currentCity').text(data.name + " " + "(" + formatedDate + ")");
      $('.currentTemperature').text("Temperature:   " + data.main.temp);
      $('.currentHumidity').text("Humidity:   " + data.main.humidity);
      $('.currentWindSpeed').text("Wind Speed:   " + data.wind.speed);

      uvIndex(data.coord.lat, data.coord.lon)
        .then((uvData) => {
          $('.currentuvIndex').text("UV Index:   " + uvData.value);
          $('.currentuvIndex').attr("class", "badge badge-danger")
        })

    })
    .catch(err => (console.log(err)))



  //function to get the UV index 
  function uvIndex(lat, lon) {
    return fetch("https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
      .then(response => response.json())

  };

}



function foreCast(city) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&q=" + city + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
    .then(response => response.json())
    .then(forecast => {
      console.log(forecast)

      const forecastDateOne = new Date(forecast.list[7].dt * 1000);
      const forecastDayOne = forecastDateOne.getDate();
      const forecastMonthOne = forecastDateOne.getMonth() + 1;
      const forecastYearOne = forecastDateOne.getFullYear();
      const formatedDateOne = (forecastDayOne + '/' + forecastMonthOne + '/' + forecastYearOne);

      $('.dateOne').text(formatedDateOne);
      let iconcodeOne = forecast.list[7].weather[0].icon;
      let iconurlOne = "https://openweathermap.org/img/wn/" + iconcodeOne + "@2x.png";
      $('#wiconOne').attr('src', iconurlOne);
      $('.tempOne').text("Temp:   " + forecast.list[7].main.temp);
      $('.humidityOne').text("Humidity:   " + forecast.list[7].main.humidity);

      const forecastDateTwo = new Date(forecast.list[15].dt * 1000)
      const forecastDayTwo = forecastDateTwo.getDate();
      const forecastMonthTwo = forecastDateTwo.getMonth() + 1;
      const forecastYearTwo = forecastDateTwo.getFullYear();
      const formatedDateTwo = (forecastDayTwo + '/' + forecastMonthTwo + '/' + forecastYearTwo);

      $('.dateTwo').text(formatedDateTwo);
      let iconcodeTwo = forecast.list[15].weather[0].icon;
      let iconurlTwo = "https://openweathermap.org/img/wn/" + iconcodeTwo + "@2x.png";
      $('#wiconTwo').attr('src', iconurlTwo);
      $('.tempTwo').text("Temp:   " + forecast.list[15].main.temp);
      $('.humidityTwo').text("Humidity:   " + forecast.list[15].main.humidity);

      const forecastDateThree = new Date(forecast.list[23].dt * 1000)
      const forecastDayThree = forecastDateThree.getDate();
      const forecastMonthThree = forecastDateThree.getMonth() + 1;
      const forecastYearThree = forecastDateThree.getFullYear();
      const formatedDateThree = (forecastDayThree + '/' + forecastMonthThree + '/' + forecastYearThree);

      $('.dateThree').text(formatedDateThree);
      let iconcodeThree = forecast.list[23].weather[0].icon;
      let iconurlThree = "http://openweathermap.org/img/wn/" + iconcodeThree + "@2x.png";
      $('#wiconThree').attr('src', iconurlThree);
      $('.tempThree').text("Temp:   " + forecast.list[23].main.temp);
      $('.humidityThree').text("Humidity:   " + forecast.list[23].main.humidity);

      const forecastDateFour = new Date(forecast.list[31].dt * 1000)
      const forecastDayFour = forecastDateFour.getDate();
      const forecastMonthFour = forecastDateFour.getMonth() + 1;
      const forecastYearFour = forecastDateFour.getFullYear();
      const formatedDateFour = (forecastDayFour + '/' + forecastMonthFour + '/' + forecastYearFour);

      $('.dateFour').text(formatedDateFour);
      let iconcodeFour = forecast.list[31].weather[0].icon;
      let iconurlFour = "http://openweathermap.org/img/wn/" + iconcodeFour + "@2x.png";
      $('#wiconFour').attr('src', iconurlFour);
      $('.tempFour').text("Temp:   " + forecast.list[31].main.temp);
      $('.humidityFour').text("Humidity:   " + forecast.list[31].main.humidity);

      const forecastDateFive = new Date(forecast.list[39].dt * 1000)
      const forecastDayFive = forecastDateFive.getDate();
      const forecastMonthFive = forecastDateFive.getMonth() + 1;
      const forecastYearFive = forecastDateFive.getFullYear();
      const formatedDateFive = (forecastDayFive + '/' + forecastMonthFive + '/' + forecastYearFive);

      $('.dateFive').text(formatedDateFive);
      let iconcodeFive = forecast.list[39].weather[0].icon;
      let iconurlFive = "http://openweathermap.org/img/wn/" + iconcodeFive + "@2x.png";
      $('#wiconFive').attr('src', iconurlFive);
      $('.tempFive').text("Temp:   " + forecast.list[39].main.temp);
      $('.humidityFive').text("Humidity:   " + forecast.list[39].main.humidity);

    });

};
 
// Get local storage item

let storedCity = JSON.parse(localStorage.getItem("storedCity"));
if (storedCity !== null) {
  cityArray = storedCity;
} else {
  cityArray = [];
  cityArray[0] = "";
}
 renderCities();


function renderCities() {
  let cityList = $(".city-section")[0];
  cityList.innerHTML = "";
  for (let i = 0; i < cityArray.length; i++) {
    let cityli = document.createElement("button");
    $(cityli).attr("class", "form-control d-block sml-white");
    cityli.innerHTML = cityArray[i];
    cityList.appendChild(cityli);
    $(cityli).on("click", function (event) {
      event.preventDefault();
       getWeather(cityArray[i]);
       foreCast(cityArray[i]);
    });
  }
}
 
function storeCityList(city){
    let cityEntered = $(".input-text").val();

    if (cityEntered === "") {
      return;
    }

    for (i = 0; i < cityArray.length; i++) {
      if (cityEntered === cityArray[i]) {
        return;
      }
    }
    console.log(cityEntered);

    cityArray.push(cityEntered);
    localStorage.setItem("storedCity", JSON.stringify(cityArray));

    renderCities();
    getWeather();
    foreCast();

}
