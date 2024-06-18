const homepage = new function() {

    const create = (parentContainer) => {
        parentContainer.appendChild(createHomeContainer());
    }

    const createHomeContainer = () => {
        const divHomeContainer = document.createElement('div');
        divHomeContainer.classList.add('home-container');
        divHomeContainer.appendChild(createTextContent());

        return divHomeContainer;
    }

    const createTextContent = () => {
        const divTextContent = document.createElement('div');
        divTextContent.classList.add('text-content');
        divTextContent.appendChild(createName());
        divTextContent.appendChild(createDescription());

        return divTextContent;
    }

    const createName = () => {
        const divName = document.createElement('div');
        divName.classList.add('name');
        divName.textContent = 'Family Restaurant';

        return divName;
    }

    const createDescription = () => {
        const divDescription = document.createElement('div');
        divDescription.classList.add('description');
        divDescription.textContent = 'A totally real, not made up restaurant that serves home-cooked meals made with only the finest ingredients.';

        return divDescription;
    }

    return { create };
}

export default homepage;