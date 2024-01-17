import './style.css'
import header from './header.js'
import hero from './hero.js'
import menu from './menu.js'

const content = document.getElementById('content')
const headerBar = header()
const heroSection = hero()
const menuSection = menu()

content.appendChild(headerBar)
content.appendChild(heroSection)
content.appendChild(menuSection)

menuSection.classList.add('d-off')

const menuBtn = heroSection.querySelector('.menu__btn')
const aboutBtn = heroSection.querySelector('.about__btn')

menuBtn.addEventListener('click', () => {
    heroSection.classList.add('d-off')
    menuSection.classList.remove('d-off')
})

