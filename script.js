// get search input to save to local storage and become a list
// use input to retive information from open weather
// once information is retived display it in the current city container
// retive the 5 day forecast 
// display the 5 day for5cast in the 5 day forecast cards  
//api key 
let button = document.querySelector('.search-btn');
let userInput = document.querySelector('.input-text');
let currentCity = document.querySelector('.currentCity');
let currentTemperature = document.querySelector('.currentTemperature');
let currentHumidity = document.querySelector('.currentHumidity');
let currentWindSpeed = document.querySelector('.currentWindSpeed');
let currentUvIndex = document.querySelector('.currentuvIndex');
let dateOne = document.querySelector('.dateOne');
let iconOne = document.querySelector('.iconOne');
let tempOne = document.querySelector('.tempOne');
let humidityOne = document.querySelector('.humidityOne');
let dateTwo = document.querySelector('.dateTwo');
let iconTwo = document.querySelector('.iconTwo');
let tempTwo = document.querySelector('.tempTwo');
let humidityTwo = document.querySelector('.humidityTwo');
let dateThree = document.querySelector('.dateThree');
let iconThree = document.querySelector('.iconThree');
let tempThree = document.querySelector('.tempThree');
let humidityThree = document.querySelector('.humidityThree');
let dateFour = document.querySelector('.dateFour');
let iconFour = document.querySelector('.iconFour');
let tempFour = document.querySelector('.tempFour');
let humidityFour = document.querySelector('.humidityFour');
let dateFive = document.querySelector('.dateFive');
let iconFive = document.querySelector('.iconFive');
let tempFive = document.querySelector('.tempFive');
let humidityFive = document.querySelector('.humidityFive');

button.addEventListener('click',function(event){
event.preventDefault()
fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + userInput.value + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
.then(response => response.json())
.then(data => {
  console.log(data)
  const currentDate = new Date (data.dt * 1000);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formatedDate = (day + '/'+ month + '/' + year);
  //console.log(formatedDate);

  let weatherPic =  data.weather[0].icon;
  let weatherUrl =  "http://openweathermap.org/img/wn/" + weatherPic + "@2x.png"
  let currentPic = $('#current-pic').attr('src', weatherUrl);

  currentCity.innerText = data.name + " " + "("+formatedDate+")";
  currentTemperature.innerText = "Temperature:   " + data.main.temp;
  currentHumidity.innerText = "Humidity:   " + data.main.humidity;
  currentWindSpeed. innerText = "Wind Speed:   " + data.wind.speed;
 
  uvIndex(data.coord.lat, data.coord.lon)
    .then((uvData)=> {
     currentUvIndex.innerText = "UV Index:   " + uvData.value;
    })
  
})
.catch(err => (console.log(err)))

})

//function to get the UV index 
function uvIndex(lat, lon ){
  return fetch("http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon="+ lon + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
  .then(response => response.json())
  
}


button.addEventListener('click',function(event){
  event.preventDefault()
  fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&q=" + userInput.value + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
  .then(response => response.json())
  .then(forecast => {
    console.log(forecast)

    const forecastDateOne = new Date (forecast.list[7].dt*1000);
    const forecastDayOne = forecastDateOne.getDate();
    const forecastMonthOne = forecastDateOne.getMonth();
    const forecastYearOne = forecastDateOne.getFullYear();
    const formatedDateOne = (forecastDayOne + '/'+ forecastMonthOne + '/' + forecastYearOne);
    
    dateOne.innerText = formatedDateOne;
    let iconcodeOne = forecast.list[7].weather[0].icon;
    let iconurlOne = "http://openweathermap.org/img/wn/" + iconcodeOne + "@2x.png";
    $('#wiconOne').attr('src', iconurlOne);
    tempOne.innerText = "Temp:   " + forecast.list[7].main.temp;
    humidityOne.innerText = "Humidity:   " + forecast.list[7].main.humidity;
    
    const forecastDateTwo = new Date (forecast.list[15].dt*1000)
    const forecastDayTwo = forecastDateTwo.getDate();
    const forecastMonthTwo = forecastDateTwo.getMonth();
    const forecastYearTwo = forecastDateTwo.getFullYear();
    const formatedDateTwo = (forecastDayTwo + '/'+ forecastMonthTwo + '/' + forecastYearTwo);
   
    dateTwo.innerText = formatedDateTwo;
    let iconcodeTwo = forecast.list[15].weather[0].icon;
    let iconurlTwo = "http://openweathermap.org/img/wn/" + iconcodeTwo + "@2x.png";
    $('#wiconTwo').attr('src', iconurlTwo);
    tempTwo.innerText = "Temp:   " +  forecast.list[15].main.temp;
    humidityTwo.innerText = "Humidity:   " + forecast.list[15].main.humidity;

    const forecastDateThree = new Date (forecast.list[23].dt*1000)
    const forecastDayThree = forecastDateThree.getDate();
    const forecastMonthThree = forecastDateThree.getMonth();
    const forecastYearThree = forecastDateThree.getFullYear();
    const formatedDateThree = (forecastDayThree + '/'+ forecastMonthThree + '/' + forecastYearThree);

    dateThree.innerText = formatedDateThree;
    let iconcodeThree = forecast.list[23].weather[0].icon;
    let iconurlThree = "http://openweathermap.org/img/wn/" + iconcodeThree + "@2x.png";
    $('#wiconThree').attr('src', iconurlThree);
    tempThree.innerText = "Temp:   " + forecast.list[23].main.temp;
    humidityThree.innerText = "Humidity:   " + forecast.list[23].main.humidity;

    const forecastDateFour = new Date (forecast.list[31].dt*1000)
    const forecastDayFour = forecastDateFour.getDate();
    const forecastMonthFour = forecastDateFour.getMonth();
    const forecastYearFour = forecastDateFour.getFullYear();
    const formatedDateFour = (forecastDayFour + '/'+ forecastMonthFour + '/' + forecastYearFour);
    
    dateFour.innerText = formatedDateFour;
    let iconcodeFour = forecast.list[31].weather[0].icon;
    let iconurlFour = "http://openweathermap.org/img/wn/" + iconcodeFour + "@2x.png";
    $('#wiconFour').attr('src', iconurlFour);
    tempFour.innerText = "Temp:   " + forecast.list[31].main.temp;
    humidityFour.innerText = "Humidity:   " +forecast.list[31].main.humidity;

    const forecastDateFive = new Date (forecast.list[39].dt*1000)
    const forecastDayFive = forecastDateFive.getDate();
    const forecastMonthFive = forecastDateFive.getMonth();
    const forecastYearFive = forecastDateFive.getFullYear();
    const formatedDateFive = (forecastDayFive + '/'+ forecastMonthFive + '/' + forecastYearFive);
  
    dateFive.innerText = formatedDateFive;
    let iconcodeFive = forecast.list[39].weather[0].icon;
    let iconurlFive = "http://openweathermap.org/img/wn/" + iconcodeFive + "@2x.png";
    $('#wiconFive').attr('src', iconurlFive);
    tempFive.innerText = "Temp:   " + forecast.list[39].main.temp;
    humidityFive.innerText = "Humidity:   " + forecast.list[39].main.humidity;

  })

  })

 /////Get search city and load it to Previous seach list

 let searchInput = document.querySelector('#input-text');
 let searchForm = document.querySelector('#search-form');
 let previousList = document.querySelector('#previous-list');
 let cityArray = [];

 init();

 function renderCities(){
   previousList.innerHTML = "";

  for (let i = 0; 0 <cityArray.length; i++){
    let cityA = cityArray[i];

    let li = document.createElement("li");
    li.textContent = cityA;
    li.setAttribute("data-index", i);

    previousList.appendChild(li);
  }
 }

function init (){
  let storedCity = JSON.parse(localStorage.getItem("aside"))

  if (storedCity !== null){
    cityA = storedCity;
  }

  renderCities();
}

 function storeCity(){
  let city = document.getElementById("input-text").value; 
  localStorage.setItem("city", city);
 };

 searchForm.addEventListener("submit", function(event){
   event.preventDefault();

   let searchText = searchInput.value.trim();

   if(searchText === ""){
     return;
   }

   cityA.push(searchText);
   searchInput.value ="";

   storeCity();
   renderCities();
 });

 previousList.addEventListener("click,", function(event){
   let element = event.target;
   
   if (element.matches("button") === true) {
     let index = element.parentElement.getAttribute("data-index");
     cityA.splice(index, 1);

     storeCity();
     renderCities();
   }
 });

 