const burger = document.querySelector(".burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-bars")){
        links.style.left ="0px"
        e.target.parentNode.innerHTML = "<i class='fa-solid fa-xmark'></i>"
    }
    if(e.target.classList.contains("fa-xmark")){
        links.style.left="-100%";
        e.target.parentNode.innerHTML="<i class='fa-solid fa-bars'></i>"
    }
})

