//import { getData, saveData} from "./modules/save.js";

const linkNav = document.querySelectorAll("a");
let title = document.getElementById("nav_page");

for (const element of linkNav) {
    element.addEventListener("click", function() {
    localStorage.setItem("title", element.textContent); 
    });
}
title.textContent = localStorage.getItem("title");
 console.log(title);




