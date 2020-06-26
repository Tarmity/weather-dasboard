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

button.addEventListener('click',function(event){
event.preventDefault()
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + userInput.value + "&appid=c7d07d3b9c3e936369948ee0a3d8c67b")
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
