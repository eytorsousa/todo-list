const body = document.querySelector("body");
const main = document.querySelector("main");
const mode = document.querySelector("#mode");
const title = document.querySelector("#title");
import {add} from './index.js';

setTimeout(function(){
    mode.addEventListener("click", changeMode);
}, 200);

function changeMode(){
    mode.classList.toggle("dark-mode");
    body.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    add.classList.toggle('dark-mode');
}
