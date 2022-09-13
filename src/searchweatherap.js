//this one gets & process weather data onto screen

import { getimage } from "./Searchgiphywithloc";

export async function getweatherdata(location) {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location +'&APPID=5c0c366ede34be4148fecb4872bf684a', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    //getting the stuff to work with:
  const locationcordselem = document.getElementById('locationcords');
  locationcordselem.innerHTML = 'Longitude:'+ weatherData.coord.lon + 'Latitude:' + weatherData.coord.lat;

  const temperatureelem = document.getElementById('temperature');
  temperatureelem.innerHTML = 'Temperature (Far):'+ weatherData.main.temp;


  const humidityelem = document.getElementById('humidity');
  humidityelem.innerHTML = 'Humidity:'+ weatherData.main.humidity;

  const descriptionelem = document.getElementById('description');
  descriptionelem.innerHTML = 'Description:' + weatherData.weather[0].description;
  //get image is activated here
  getimage(weatherData.weather[0].description);
  
  }
  
  
  







