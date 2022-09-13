
import {searchgiphy } from './searchgiphywithloc';


export function getuserinput() {
    var location = document.getElementById("myText").value;
    console.log("This is the chosen location",location);
    searchgiphy(location);
    //return location;
}

//this function is turned on when the submit button is clicked and it takes the submitted value and uses it.
