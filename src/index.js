import './style.css'
import header from './header.js'

const content = document.getElementById('content')
const headerBar = header()
content.appendChild(headerBar)
