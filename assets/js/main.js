const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
//mostrar MENU
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
//ocultar MENU
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}
//remover MENU de links
const navLink = document.querySelectorAll(".nav__link")
function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(item => item.addEventListener("click",linkAction))

const sr = ScrollReveal({
    distance:"90px",
    duration:3000
})
sr.reveal(`.home__data`,{origin:"top",delay:400})
sr.reveal(`.home__img`,{origin:"bottom",delay:600})
sr.reveal(`.home__footer`,{origin:"bottom",delay:800})

function toggleMode() {
    let body = document.querySelector('body');
    if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    } else if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('third-mode');
    } else {
    body.classList.remove('third-mode');
    body.classList.add('dark-mode');
    }
}
