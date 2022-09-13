import './styles.css';
import { getuserinput } from './SearchBar';
//import { getCats } from './weatherdatagetter';

//When the button is clicked the function getuserinput is run
const SearchBarElem = document.getElementById("myButton");
SearchBarElem.addEventListener('click',getuserinput);



const img = document.querySelector('img');
export async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=72BuQN10jVSky0fxi7cs2NzpN9zFfkwL&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }

getCats();

// Divide Html based on areas where eveything goes
//search bar, toggle display (same area side by side);
//background for center section

// TO-DO'S:

//section 1
// div 1-Search for specific location. 
// div 2-Toggle display in fahrenheit or Celsius. (two button)
//section 2
// div 1-change the look of the page based on the data->use giphy api to change background.
//section 3
//weather data idk what it gives tbh (chose when you get their)

// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
// Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
// Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
// Display the information on your webpage!
// Add any styling you like!
// Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
// Push that baby to github and share your solution below! 