const shadowHeader = ()=>{
    const header = document.getElementById('navigation')
    this.scrollY >=50 ? header.classList.add('shadow-header')
       :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

// HIDE LOGO TABLET
const logo = ()=>{
    const header = document.getElementById('logo')
    this.scrollY >=1 ? header.classList.add('removelogo')
       :header.classList.remove('removelogo')
}
window.addEventListener('scroll',logo)




// MENU

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



if (navToggle) {
    navToggle.addEventListener("click", () => {
                navMenu.classList.add('show-menu')
            })
}
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))