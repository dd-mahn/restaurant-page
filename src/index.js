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

heroSection.classList.add('d-off')