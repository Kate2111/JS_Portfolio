import modalContent from './modalContent';

const portfolio = [
    {project: 'https://kate2111.github.io/React_shop/', github: 'https://github.com/Kate2111/React_shop', stack: 'React, Create React App, React Router, CSS Modules, Firebase (Database, Store,Authentication), React Hooks', descr: 'Многостраничный интернет-магазин мебели. Авторизованный пользователь имеет возможность добавлять товар в избранное и корзину. Реализован 3D эффект на главном экране, автоматическая карусель новой коллекции.', title: 'Магазин дизайнерской мебели', src: '../../img/portfolio/furniture.jpg', alt: 'furniture'},

    {project: 'https://kate2111.github.io/JS_RunSmart/', github: 'https://github.com/Kate2111/JS_RunSmart', stack: 'JavaScript, Firebase Database, Gulp + Webpack, Slick slider, Методология БЭМ', descr: 'Страница сверстана в стили Langing Page. Реализованы модальные окна для заказа консультации, анимация, карусель просмотра фото, настроена форма обратной связи(заявки приходят на почту администратора)', title: 'Магазин спорттоваров', src: '../../img/portfolio/pulse.jpg', alt: 'pulse'},

    {project: 'https://kate2111.github.io/JS_Food/', github: 'https://github.com/Kate2111/JS_Food', stack: 'JavaScript, Firebase Database, Gulp + Webpack, Методология БЭМ', descr: 'Страница сверстана в стили Langing Page. Реализованы модальные окна для связи с магазином, расчет суточной нормы калорий для пользователя, обратный таймер отсчета до завершения акции. Регистрация и авторизация пользователя.', title: 'Магазин продуктов правильного питания', src: '../../img/portfolio/food.jpg', alt: 'food'},

    {project: 'https://kate2111.github.io/React_book/', github: 'https://github.com/Kate2111/React_book', stack: 'React, Google Book APIs, Сборка Vite, Библиотека Axios, React Router, CSS Modules, React Hooks', descr: 'С помощью данного приложения можно ознакомится с книгами из библиотеки, добавить новую или удалить из списка существующую. Реализован фильтр книг по названию/описанию и поиск книг по библиотеке', title: 'Библиотека', src: '../../img/portfolio/book.webp', alt: 'book'},

    {project: 'https://kate2111.github.io/Vue_food/', github: 'https://github.com/Kate2111/Vue_food', stack: 'Vue, API www.themealdb, Библиотеки Axios, Vuex, Сборка Vite, Маршрутизатор Vue-router', descr: 'Сборник рецептов с подробным описанием, ссылкой  на видео рецепт на YouTube. Реализованы три вида поиска: по названию рецепта, по ингридиету и алфавиту', title: 'Книга рецептов', src: '../../img/portfolio/meals.webp', alt: 'meals'},  
    
    {project: 'https://kate2111.github.io/Vue_food/', github: 'https://github.com/Kate2111/Vue_food', stack: 'Vue, API www.themealdb, Библиотеки Axios, Vuex, Сборка Vite, Маршрутизатор Vue-router', descr: 'Сборник рецептов с подробным описанием, ссылкой  на видео рецепт на YouTube. Реализованы три вида поиска: по названию рецепта, по ингридиету и алфавиту', title: 'Книга рецептов', src: '../../img/portfolio/meals.webp', alt: 'meals'}, 
]


function closeModal(modal) {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, project) {
    modalContent(project);

    const modal = document.querySelector(modalSelector); 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modal); 
        }
    });
   
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) { 
            closeModal(modal);
        }
    });
}

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector);

    modalTrigger.forEach((btn, index) => { 
        btn.addEventListener('click', () => {
            const altText = btn.getAttribute('data-nameAlt');
            const elemInfo = portfolio.find(item => item.alt === altText);

            if(altText === elemInfo.alt) {
                openModal(modalSelector, elemInfo);
            }
        });
    });

    
}

export default modal;
export {closeModal};
export {openModal};


