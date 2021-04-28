const header = document.querySelector("header");

const headerHeight = header.clientHeight;
const article  = document.querySelector(".article");


(function changeMargin(){
    article.style.margin = `${headerHeight}px 0 0 0 `
})()

