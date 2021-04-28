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
})