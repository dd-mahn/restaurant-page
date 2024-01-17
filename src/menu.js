import lineSvg from './images/line.svg';
import leafSvg from './images/leaf.svg';
import starSvg from './images/star.svg';
import tofuImg from './images/tofu.png';
import cauliImg from './images/cauli.png';
import biryaniImg from './images/biryani.png';
import frankiesImg from './images/frankies.png';

export default function menu() {
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu');

    const lineImageTop = document.createElement('img');
    lineImageTop.setAttribute('src', lineSvg);
    lineImageTop.setAttribute('alt', '');

    const textBlock = document.createElement('div');
    textBlock.classList.add('menu__text-block');
    textBlock.innerHTML = `
        <span>Our Menu</span>
        <p>Embark on a flavorful journey at GreenBites! Our plant-based menu weaves tales of diverse, innovative delights.</p>
    `;

    const bestBlock = document.createElement('div');
    bestBlock.classList.add('menu__best-block');

    const bestSellerSpan = document.createElement('span');
    bestSellerSpan.textContent = 'Best Seller';

    const gridBlock = document.createElement('div');
    gridBlock.classList.add('grid__block');

    const bestCards = [
        { imgStar: starSvg, imgDish: tofuImg, dishName: 'Crispy BBQ Tofu Sandwich' },
        { imgStar: starSvg, imgDish: cauliImg, dishName: 'Whole Roasted Cauliflower' },
        { imgStar: starSvg, imgDish: biryaniImg, dishName: 'Vegetable Biryani' },
        { imgStar: starSvg, imgDish: frankiesImg, dishName: 'Frankies!(Bombay Burritos)' }
    ];

    bestCards.forEach(card => {
        const bestCard = document.createElement('div');
        bestCard.classList.add('best__card');

        const imgStar = document.createElement('img');
        imgStar.setAttribute('src', card.imgStar);
        imgStar.classList.add('star');
        
        const imgDish = document.createElement('img');
        imgDish.setAttribute('src', card.imgDish);
        imgDish.classList.add('dish__img');
        
        const spanDishName = document.createElement('span');
        spanDishName.textContent = card.dishName;

        bestCard.appendChild(imgStar);
        bestCard.appendChild(imgDish);
        bestCard.appendChild(spanDishName);

        gridBlock.appendChild(bestCard);
    });

    bestBlock.appendChild(bestSellerSpan);
    bestBlock.appendChild(gridBlock);

    const listBlock = document.createElement('div');
    listBlock.classList.add('menu__list-block');

    const listHeadFood = document.createElement('span');
    listHeadFood.classList.add('list__head');
    listHeadFood.innerHTML = `Food <img src="${leafSvg}" alt="">`;

    const listItemsFood = document.createElement('ul');
    listItemsFood.classList.add('list__items');

    const foodItems = [
        'Quinoa-Stuffed Bell Peppers',
        'Lentil and Vegetable Curry',
        'Zucchini Noodle Primavera',
        'Chickpea and Spinach Wrap',
        'Coconut Lime Tofu Skewers'
    ];

    foodItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItemsFood.appendChild(listItem);
    });

    const listHeadDrinks = document.createElement('span');
    listHeadDrinks.classList.add('list__head');
    listHeadDrinks.innerHTML = `Drinks <img src="${leafSvg}" alt="">`;

    const listItemsDrinks = document.createElement('ul');
    listItemsDrinks.classList.add('list__items');

    const drinkItems = [
        'Berry Bliss Smoothie',
        'Cucumber Mint Refresher',
        'Golden Turmeric Latte'
    ];

    drinkItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItemsDrinks.appendChild(listItem);
    });

    const lineImageBottom = document.createElement('img');
    lineImageBottom.setAttribute('src', lineSvg);
    lineImageBottom.setAttribute('alt', '');

    listBlock.appendChild(listHeadFood);
    listBlock.appendChild(listItemsFood);
    listBlock.appendChild(listHeadDrinks);
    listBlock.appendChild(listItemsDrinks);
    listBlock.appendChild(lineImageBottom);

    const backBlock = document.createElement('div');
    backBlock.classList.add('menu__back-block');

    menuSection.appendChild(lineImageTop);
    menuSection.appendChild(textBlock);
    menuSection.appendChild(bestBlock);
    menuSection.appendChild(listBlock);
    menuSection.appendChild(backBlock);

    return menuSection;
}
