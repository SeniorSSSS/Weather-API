import './styles.css';
import { getuserinput } from './SearchBar';


//When the button is clicked the function getuserinput is run
const SearchBarElem = document.getElementById("myButton");
SearchBarElem.addEventListener('click',getuserinput);


