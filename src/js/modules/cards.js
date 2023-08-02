import {getResource} from './services';


async function cards(elem) {
     class ProjectInfo {
        constructor(src, alt, title, descr, github, project, stack, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.github = github;
            this.project = project;
            this.stack = stack;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('modal');
     
            element.innerHTML = `
                <div class="modal__dialog">
                    <div class="modal__content">
                        <img class="modal__image" src=${this.src} alt=${this.alt}>
                        <div class="modal__wrapper-buttons">
                            <a class="modal__button" target="_blank" href=${this.github}>GitHub</a>
                            <a class="modal__button" target="_blank" href=${this.project}>Проект</a>
                        </div>
                    </div>
                    <div class="modal__content modal__content_descr">
                        <h2 class="modal__title">${this.title}</h2>  
                        <p>${this.descr}</p> 
                        <div><strong>STACK:</strong>${this.stack}</div>         
                    </div>
                    <div data-close class="modal__close">&times;</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    //const items = document.querySelectorAll('.portfolio__items');

    new ProjectInfo(elem.src, elem.alt, elem.title, elem.descr, elem.github, elem.project, elem.stack, '.portfolio .portfolio__items--active').render();

   /*  try {
        //const data = await getResource("portfolio");
        //const data = portfolio;
        
        data.forEach(({ src, alt, title, descr, github, project, stack }, index) => {
            new ProjectInfo(src, alt, title, descr, github, project, stack, '.portfolio .portfolio__items--active').render();
        });

        
        

        
    } catch (error) {
        console.error(error);
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Произошла ошибка при загрузке данных. Пожалуйста, повторите попытку позже.";
        document.querySelector('.menu__field').firstElementChild.appendChild(errorMessage);
    } */
}

export default cards;