const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body")
const logo = document.querySelector(".header__img").querySelector("img");

console.log(logo)
const moveBurger = () =>{
    if(!burger.classList.contains("active")){
        burger.classList.add("active");
        nav.classList.add("active");
        body.classList.add("lock");
        logo.setAttribute("src","./img/light-logo.png")
    }else{
        burger.classList.remove("active");
        nav.classList.remove("active");
        body.classList.remove("lock");
        logo.classList.remove("active")
        logo.setAttribute("src","./img/logo.svg")
    }
}


burger.addEventListener("click", moveBurger)