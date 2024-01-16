import './style.css'
import header from './header.js'
import hero from './hero.js'

const content = document.getElementById('content')
const headerBar = header()
const heroSection = hero()
content.appendChild(headerBar)
content.appendChild(heroSection)