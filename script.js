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
  currentCity.innerText = data.name;
  currentTemperature.innerText = data.main.temp;
  currentHumidity.innerText = data.main.humidity;
  currentWindSpeed. innerText = data.wind.speed;
 
  uvIndex(data.coord.lat, data.coord.lon)
    .then((uvData)=> {
     currentUvIndex.innerText = uvData.value;
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
    dateOne.innerText = forecast.list[0].dt_text;
    //iconOne.innerHTML =;
    tempOne.innerText = forecast.list[0].main.temp;
    humidityOne.innerText = forecast.list[0].main.humidity;
    
    dateTwo.innerText = forecast.list[8].dt_text;
    //iconOTwo.innerHTML =;
    tempTwo.innerText = forecast.list[8].main.temp;
    humidityTwo.innerText = forecast.list[8].main.humidity;

    dateThree.innerText = forecast.list[16].dt_text;
    //iconThree.innerHTML =;
    tempThree.innerText = forecast.list[16].main.temp;
    humidityThree.innerText = forecast.list[16].main.humidity;

    dateFour.innerText = forecast.list[24].dt_text;
    //iconFour.innerHTML =;
    tempFour.innerText = forecast.list[24].main.temp;
    humidityFour.innerText = forecast.list[24].main.humidity;

    dateFive.innerText = forecast.list[32].dt_text;
    //iconFive.innerHTML =;
    tempFive.innerText = forecast.list[32].main.temp;
    humidityFive.innerText = forecast.list[32].main.humidity;

  })

  })

  button.addEventListener('click', function(event){
    

  })
  
  
  
  //////////////////////////////////////////////////////////////////////////////////
  // Pervious Search city list.

  // let cityList = document.querySelector('.currentCity');

  // get input from local storage
//   let storedCity = JSON.parse(localStorage.getItem("storedCity"));

//   if (storedCity != cityList){
//       cityArray = storedCity;
//   }else{
//       cityArray = new Array();
//       cityArray[0]= "sydney";
//   }

//   renderCities();
  
// function renderCities(){
//   cityList.innerHTML = "";
//   for (i = 0; i <cityArray.length; i++){
//     let cityList = document.createElement("li");
//     cityList.innerHTML = cityArray[1];
//     cityList.appendChild(cityList)
//   }
// }

//  $(".fa-search").on('click', function(event){

//   event.preventDefault();
//   let cityEntered = $("input.input-text").val();

//   if(cityEntered === ""){
//     return;
//   }

//   for (i = 0; i < cityArray.length; i++){
//     if(cityEntered === cityArray[i]){
//       return;
//     }
//   }

//   cityArray.push(cityEntered);
//   localStorage.setItem("storedCity", JSON.stringify(cityArray))

//   renderCities();
// })