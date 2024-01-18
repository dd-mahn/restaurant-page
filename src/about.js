import aboutSvg from './images/about.svg';
import lineSvg from './images/line.svg';

export default function about() {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about');

    const aboutImage = document.createElement('div');
    aboutImage.classList.add('about__img');

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about__content');

    const aboutTitle = document.createElement('span');
    aboutTitle.textContent = 'About us';

    const aboutText = document.createElement('p');
    aboutText.textContent = `Nestled in the heart of vibrant Hanoi, GreenBites is more than just a restaurant; it's a haven for plant-based enthusiasts and culinary explorers alike. Our address, located at [Address], serves as a cozy retreat where sustainability meets exceptional taste. Come join us in embracing the joy of cruelty-free dining and the thriving energy of Hanoi at GreenBites.`;

    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', aboutSvg);
    aboutImg.setAttribute('alt', '');

    const contactList = document.createElement('ul');
    
    const contactItems = [
        'Contact',
        'Phone: +84 123456778',
        'Email: bevegan@gmail.com',
        'github.com/dd-mahn'
    ];

    contactItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        contactList.appendChild(listItem);
    });

    const lineImage = document.createElement('img');
    lineImage.setAttribute('src', lineSvg);
    lineImage.setAttribute('alt', '');

    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(aboutImg);
    aboutContent.appendChild(contactList);

    aboutSection.appendChild(aboutImage);
    aboutSection.appendChild(aboutContent);
    aboutSection.appendChild(lineImage);

    return aboutSection;
}
