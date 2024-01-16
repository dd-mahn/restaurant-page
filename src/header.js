import logo from './images/logo.svg';

export default function header() {
    const headerBar = document.createElement('div');
    headerBar.classList.add('header');

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header__logo');
    headerLogo.innerHTML = `<img src="${logo}" alt="Logo">`;

    const headerNav = document.createElement('div');
    headerNav.classList.add('header__nav');

    const navItems = [
        { class: 'nav1', text: 'Home' },
        { class: 'nav2', text: 'Menu' },
        { class: 'nav3', text: 'About' }
    ];

    navItems.forEach(item => {
        const navItem = document.createElement('div');
        navItem.classList.add('header__nav-item', item.class);
        navItem.innerHTML = `<span>${item.text}</span>`;
        headerNav.appendChild(navItem);
    });

    headerBar.appendChild(headerLogo);
    headerBar.appendChild(headerNav);

    return headerBar;
}
