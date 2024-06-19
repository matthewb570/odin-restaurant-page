import onionRings from './images/onion_rings.jpg';
import cheeseburger from './images/cheeseburger.jpg';
import pizza from './images/pizza.jpg';
import cookies from './images/cookies.jpg';
import iceCream from './images/ice_cream.jpg';
import water from './images/water.jpg';
import lemonade from './images/lemonade.jpg';

const menuPage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createMenuContainer());
    }

    const createMenuContainer = () => {
        const divMenuContainer = document.createElement('div');
        divMenuContainer.id = 'menu-container';
        divMenuContainer.appendChild(createPageHeader());
        divMenuContainer.appendChild(createAppetizerSection());
        divMenuContainer.appendChild(createEntreeSection());
        divMenuContainer.appendChild(createDessertSection());
        divMenuContainer.appendChild(createBeverageSection());

        return divMenuContainer;
    }

    const createPageHeader = () => {
        const divHeader = document.createElement('div');
        divHeader.classList.add('page-header');
        divHeader.textContent = 'Menu';

        return divHeader;
    }
    
    const createAppetizerSection = () => {
        const divAppetizerSection = document.createElement('div');
        divAppetizerSection.classList.add('page-section');
        divAppetizerSection.appendChild(createSectionHeader('Appetizers'));
        divAppetizerSection.appendChild(createAppetizerCardList());
        
        return divAppetizerSection;
    }

    const createEntreeSection = () => {
        const divEntreeSection = document.createElement('div');
        divEntreeSection.classList.add('page-section');
        divEntreeSection.appendChild(createSectionHeader('Entrees'));
        divEntreeSection.appendChild(createEntreeCardList());

        return divEntreeSection;
    }

    const createDessertSection = () => {
        const divDessertSection = document.createElement('div');
        divDessertSection.classList.add('page-section');
        divDessertSection.appendChild(createSectionHeader('Desserts'));
        divDessertSection.appendChild(createDessertCardList());
        
        return divDessertSection;
    }

    const createBeverageSection = () => {
        const divBeverageSection = document.createElement('div');
        divBeverageSection.classList.add('page-section');
        divBeverageSection.appendChild(createSectionHeader('Beverages'));
        divBeverageSection.appendChild(createBeverageCardList());

        return divBeverageSection;
    }

    const createAppetizerCardList = () => {
        const divAppetizerCardList = document.createElement('div');
        divAppetizerCardList.classList.add('card-list');
        divAppetizerCardList.appendChild(createCard('Onion Rings', 'The classic, deep-fried favorite.', onionRings, '$5.99'));

        return divAppetizerCardList;
    }

    const createSectionHeader = (sectionTitle) => {
        const divSectionHeader = document.createElement('div');
        divSectionHeader.classList.add('section-header');
        divSectionHeader.textContent = sectionTitle;

        return divSectionHeader;
    }

    const createEntreeCardList = () => {
        const divEntreeCardList = document.createElement('div');
        divEntreeCardList.classList.add('card-list');
        divEntreeCardList.appendChild(createCard('Cheeseburger', 'A classic burger with all the fixings.', cheeseburger, '$9.99'));
        divEntreeCardList.appendChild(createCard('Pizza', 'A cheese pizza baked in a wood fired oven.', pizza, '$11.99'))
        
        return divEntreeCardList;
    }

    const createDessertCardList = () => {
        const divDessertCardList = document.createElement('div');
        divDessertCardList.classList.add('card-list');
        divDessertCardList.appendChild(createCard('Cookies', 'A stack of six delicious double chocolate chip cookies.', cookies, '$7.99'));
        divDessertCardList.appendChild(createCard('Ice Cream Sundae', 'An ice cream sundae that\'ll be sure to cater to any sweet tooth. Features ice cream, cookies, chocolate sauce, and whipped cream.', iceCream, '$9.99'));

        return divDessertCardList;
    }

    const createBeverageCardList = () => {
        const divBeverageCardList = document.createElement('div');
        divBeverageCardList.classList.add('card-list');
        divBeverageCardList.appendChild(createCard('Water', 'It\'s wet.', water, 'Free'));
        divBeverageCardList.appendChild(createCard('Lemonade', 'The classic summer drink.', lemonade, '$1.99'));

        return divBeverageCardList;
    }

    const createCard = (title, description, image, price) => {
        const divTitle = document.createElement('div');
        divTitle.classList.add('card-title');
        divTitle.textContent = title;
        
        const divDescription = document.createElement('div');
        divDescription.classList.add('card-description');
        divDescription.textContent = description;

        const divImage = document.createElement('img');
        divImage.classList.add('card-image');
        divImage.src = image;

        const divPrice = document.createElement('div');
        divPrice.classList.add('card-price');
        divPrice.textContent = price;
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(divImage);
        card.appendChild(divTitle);
        card.appendChild(divDescription);
        card.appendChild(divPrice);

        return card;
    }

    return { create }
}

export default menuPage;