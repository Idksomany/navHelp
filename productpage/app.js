const menu = document.querySelector("#menu");
const navlk = document.querySelector(".navlinks")

function mobile (){
  menu.classList.toggle("active")
}

menu.addEventListener("click",mobile)