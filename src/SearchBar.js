import { getweatherdata } from './searchweatherap';

export function getuserinput() {
    var location = document.getElementById("myText").value;
    getweatherdata(location);
}

//this function is turned on when the submit button is clicked and it takes the submitted value and uses it.

