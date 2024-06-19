const aboutPage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createAboutContainer());
    }

    const createAboutContainer = () => {
        const divAboutContainer = document.createElement('div');
        divAboutContainer.id = 'about-container';
        divAboutContainer.appendChild(createPageHeader());
        divAboutContainer.appendChild(createHours());
        divAboutContainer.appendChild(createContactUs());

        return divAboutContainer
    }

    const createPageHeader = () => {
        const divHeader = document.createElement('div');
        divHeader.classList.add('page-header');
        divHeader.textContent = 'About';

        return divHeader;
    }

    const createHours = () => {
        const divHours = document.createElement('div');
        divHours.id = 'hours';
        divHours.classList.add('page-section');
        divHours.appendChild(createSectionHeader('Hours'));
        divHours.appendChild(createSectionContent('Monday - Sunday: 10:00 am - 10:00 pm'));
        
        return divHours;
    }

    const createContactUs = () => {
        const divContactUs = document.createElement('div');
        divContactUs.id = 'contact-us';
        divContactUs.classList.add('page-section');
        divContactUs.appendChild(createSectionHeader('Contact Us'));
        divContactUs.appendChild(createSectionContent('123 Restaurant Way'));
        divContactUs.appendChild(createSectionContent('Restaurant Village, WI 12345'));
        divContactUs.appendChild(createSectionContent('555.555.5555'))
        divContactUs.appendChild(createSectionContent('definitely.a.real.email.address@notfake.com'))

        return divContactUs;
    }
    
    const createSectionHeader = (sectionTitle) => {
        const divSectionHeader = document.createElement('div');
        divSectionHeader.classList.add('section-header');
        divSectionHeader.textContent = sectionTitle;

        return divSectionHeader;
    }

    const createSectionContent = (sectionText) => {
        const divSectionContent = document.createElement('div');
        divSectionContent.classList.add('section-content');
        divSectionContent.textContent = sectionText;

        return divSectionContent;
    }

    return { create };
}

export default aboutPage;