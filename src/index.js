import homePage from './home.js';
import aboutPage from './about.js';
import './styles.css';

const divContent = document.querySelector('#content');
const btnHome = document.querySelector('#btn-home');
const btnAbout = document.querySelector('#btn-about');

const navigationEvents = new function() {
    
    const loadHomePage = () => {
        clearPage();
        homePage.create(divContent);
    }

    const loadAboutPage = () => {
        clearPage();
        aboutPage.create(divContent);
    }

    const clearPage = () => {
        while(divContent.lastChild) {
            divContent.removeChild(divContent.lastChild);
        }
    }

    return { loadHomePage, loadAboutPage };
}

btnHome.addEventListener('click', navigationEvents.loadHomePage);
btnAbout.addEventListener('click', navigationEvents.loadAboutPage);

navigationEvents.loadHomePage();