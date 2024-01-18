import './style.css'
import header from './header.js'
import hero from './hero.js'
import menu from './menu.js'
import about from './about.js'

const content = document.getElementById('content')
const headerBar = header()
const heroSection = hero()
const menuSection = menu()
const aboutSection = about()

content.appendChild(headerBar)
content.appendChild(heroSection)
content.appendChild(menuSection)
content.appendChild(aboutSection)

const menuBtn = heroSection.querySelector('.menu__btn')
const aboutBtn = heroSection.querySelector('.about__btn')
const homeNav = headerBar.querySelector('.nav1')
const menuNav = headerBar.querySelector('.nav2')
const aboutNav = headerBar.querySelector('.nav3')


function heroOn(){
    heroSection.classList.remove('d-off')
    menuSection.classList.add('d-off')
    aboutSection.classList.add('d-off')
}

function menuOn(){
    heroSection.classList.add('d-off')
    aboutSection.classList.add('d-off')
    menuSection.classList.remove('d-off')
}

function aboutOn(){
    heroSection.classList.add('d-off')
    aboutSection.classList.remove('d-off')
    menuSection.classList.add('d-off')
}

heroOn()

menuBtn.addEventListener('click', menuOn)
aboutBtn.addEventListener('click', aboutOn)
homeNav.addEventListener('click', heroOn)
menuNav.addEventListener('click', menuOn)
aboutNav.addEventListener('click', aboutOn)

