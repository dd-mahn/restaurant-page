export default function header(){
    const headerBar = document.createElement('div')
    headerBar.classList.add('header')

    const headerLogo = document.createElement('div')
    headerLogo.classList.add('header__logo')

    const headerNav = document.createElement('div')
    headerNav.classList.add('header__nav')

    const nav1 = document.createElement('div')
    nav1.classList.add('header__nav-item','nav1')
    const span1 = document.createElement('span')
    span1.innerHTML = 'Home'
    nav1.appendChild(span1)

    const nav2 = document.createElement('div')
    nav2.classList.add('header__nav-item','nav2')
    const span2 = document.createElement('span')
    span2.innerHTML = 'Menu'
    nav2.appendChild(span2)


    const nav3 = document.createElement('div')
    nav3.classList.add('header__nav-item','nav3')
    const span3 = document.createElement('span')
    span3.innerHTML = 'About'
    nav3.appendChild(span3)


    headerNav.appendChild(nav1)
    headerNav.appendChild(nav2)
    headerNav.appendChild(nav3)

    headerBar.appendChild(headerLogo)
    headerBar.appendChild(headerNav)
    return headerBar
}