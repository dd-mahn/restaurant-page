import lineSvg from './images/line.svg';

export default function hero() {
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero__content');

    const heroTextBlock = document.createElement('div');
    heroTextBlock.classList.add('hero__content-block');
    heroTextBlock.innerHTML = `
        <span>We do vegan</span>
        <p>Welcome to GreenBites, Hanoi's plant-based paradise since 2020. Discover a culinary haven in the heart of the city, where vibrant salads and hearty mains celebrate the artistry of plant-based cuisine. Join us for a taste of cruelty-free dining at GreenBites.</p>
        <div>
            <button class="primary__btn menu__btn">Our Menu</button>
            <button class="secondary__btn about__btn">About us</button>
        </div>
    `;

    const ptn1 = document.createElement('div');
    ptn1.classList.add('ptn1');
    ptn1.innerHTML = `<img src="${lineSvg}" alt="Pattern 1">`;

    const ptn2 = document.createElement('div');
    ptn2.classList.add('ptn2');
    ptn2.innerHTML = `<img src="${lineSvg}" alt="Pattern 2">`;

    const ptn3 = document.createElement('div');
    ptn3.classList.add('ptn3');
    ptn3.innerHTML = `<img src="${lineSvg}" alt="Pattern 3">`;

    heroContent.appendChild(heroTextBlock);
    heroContent.appendChild(ptn1);
    heroContent.appendChild(ptn2);
    heroContent.appendChild(ptn3);

    const heroImage = document.createElement('div');
    heroImage.classList.add('hero__img');

    heroSection.appendChild(heroContent);
    heroSection.appendChild(heroImage);

    return heroSection;
}
