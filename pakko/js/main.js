function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();;
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


burger.addEventListener("click", moveBurger);
const list = document.querySelectorAll(".footer-list");

list.forEach(item =>{
    item.addEventListener("click",() =>{
        

        if(!item.classList.contains
        ("active")){
            list.forEach(item =>{
                item.classList.remove("active")
            })
            item.classList.add("active")
        }else{
            item.classList.remove("active")
        }
    })
});

