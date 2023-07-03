import {getResource} from './services';

async function cards() {
     class MenuCard {
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
                        <img class="modal__image" src=${src} alt=${alt}>
                        <div class="modal__wrapper-buttons">
                            <a class="modal__button" target="_blank" href=${github}>GitHub</a>
                            <a class="modal__button" target="_blank" href=${project}>Проект</a>
                        </div>
                    </div>
                    <div class="modal__content modal__content_descr">
                        <h2 class="modal__title">${title}</h2>  
                        <p>${descr}</p> 
                        <div><strong>STACK:</strong>${stack}</div>         
                    </div>
                    <div data-close class="modal__close">&times;</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    
    try {
        const data = await getResource("portfolio");
        if (data && Array.isArray(data)) {
          data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          });
        } else {
          throw new Error("Ошибка при получении данных из базы данных");
        }
    } catch (error) {
        console.error(error);
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Произошла ошибка при загрузке данных. Пожалуйста, повторите попытку позже.";
        document.querySelector('.menu__field').firstElementChild.appendChild(errorMessage);
    }
}

export default cards;