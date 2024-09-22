const btopen = document.querySelector (".header-mobile > button");
const btoff = document.querySelector(".header-mobile nav .button2");
const btclick = document.querySelector (".primeira-secao > button1");

const body = document.querySelector("body");

const nav = document.querySelector(".header-mobile nav");

btopen.addEventListener('click',abrirmenu);
btoff.addEventListener('click', fecharmenu);


function abrirmenu(){
    if (!nav.classList.contains("abrir")) {
        
        body.classList.add("escurecer");
        nav.style.right = "0"; 
        nav.classList.add("abrir"); 
    } else {
      
        body.classList.remove("escurecer");
        nav.style.right = "-16rem"; 
        nav.classList.remove("abrir"); 
    }
}
function fecharmenu() {
    if (nav.classList.contains("abrir")) {
        body.classList.remove("escurecer");
        nav.style.right = "-16rem"; 
        nav.classList.remove("abrir"); 
    }
}
function clickar() {
window.location.href = "contato.html"
}