// HAMBURGER MENU TASARIMI
let menudiv = document.getElementById("menu-div");
function hamburgerMenu(){
    menudiv.style.right = "0";
    menudiv.style.transition = "1s";
}
function MenuClose(){
    menudiv.style.right = "-250px";
    menudiv.style.transition = "1s";
}

let social_list = document.querySelector(".social_list");
function socialMenu(){
    social_list.style.visibility = "visible";
}
