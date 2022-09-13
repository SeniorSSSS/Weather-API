const img = document.querySelector('img');



export async function getimage(description) {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=72BuQN10jVSky0fxi7cs2NzpN9zFfkwL&s='+description, {mode: 'cors'});
    const locationData = await response.json();
    img.src = locationData.data.images.original.url;
  }

