
function addModalContent(elem) {
    const parent = document.querySelector('.portfolio');
    const element = document.createElement('div');
    element.classList.add('modal');

    element.innerHTML = `
        <div class="modal__dialog">
            <div class="modal__content">
                <img class="modal__image" src=${elem.src} alt=${elem.alt}>
                <div class="modal__wrapper-buttons">
                    <a class="modal__button" target="_blank" href=${elem.github}>GitHub</a>
                    <a class="modal__button" target="_blank" href=${elem.project}>Проект</a>
                </div>
            </div>
            <div class="modal__content modal__content_descr">
                <h2 class="modal__title">${elem.title}</h2>  
                <p>${elem.descr}</p> 
                <div><strong>STACK:</strong>${elem.stack}</div>         
            </div>
            <div data-close class="modal__close">&times;</div>
        </div>
    `;

    parent.insertAdjacentElement('afterbegin', element);
}

export default addModalContent;