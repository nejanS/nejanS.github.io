// çiçeksepetine geçiş
let firstSection = document.getElementById("cicek");
let ciceklogo = document.querySelector(".ciceklogo");

function cicekClick(){
    cicek.style.display = "block";
    ciceklogo.style.padding = "0 0 10px 0";
}


// hediye extraya geçiş
let secondSection = document.getElementById("extra");
let hediyelogo = document.querySelector(".hediyelogo");

function extraClick(){
    extra.style.display = "block";
    hediyelogo.style.padding = "0 0 10px 0";
}

function Shopping(){
    
}

// owl carosel
var owl = $('.owl-carousel');
owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    autoplay:false,
    autoplayTimeout:1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



// LOGIN PAGE 
// password hide
// let password = document.getElementById("password-btn")
// let show = document.querySelector(".fa-eye-slash")
// show.onclick = function (){
//     if (password.type === "password") {
//         password.setAttribute("type", "text");
//         show.classList.add("hide");
//       } else {
//         password.setAttribute("type", "password");
//         show.classList.remove("hide");
//       }    
// }