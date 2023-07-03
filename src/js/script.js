require('es6-promise').polyfill();

import hamburger from './modules/hamburger';
import modal from './modules/modal';
import tabs from './modules/tab';
import canvas from './modules/canvas';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', function() {

    canvas();
    hamburger('.hamburger', '.menu', '.menu__close');
    tabs('.portfolio__tab','.portfolio__items', 'my_button--active', 'portfolio__items--active');
    modal('[data-modal]', '.modal');
    fillSkils();
    forms('form');




    function fillSkils() {
        const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

        counters.forEach((item, i) => {
            lines[i].style.width = item.innerHTML;
        });
    }

    const portfolio = [
        {project: 'https://kate2111.github.io/JS_Food/', github: 'https://github.com/Kate2111/JS_Food', stack: '', descr: '', title: 'Магазин правильного питания'},
        {project: 'https://kate2111.github.io/React_shop/', github: 'https://github.com/Kate2111/React_shop', stack: '', descr: '', title: 'Магазин дизайнерской мебели'},
        {project: 'https://kate2111.github.io/Vue_food/', github: 'https://github.com/Kate2111/Vue_food', stack: 'Vue, API www.themealdb, Библиотеки Axios, Vuex, Сборка Vite, Маршрутизатор Vue-router', descr: '', title: 'Книга рецептов'},
        {project: 'https://kate2111.github.io/React_book/', github: 'https://github.com/Kate2111/Vue_food', stack: 'React, Google Book APIs, Сборка Vite, Библиотека Axios', descr: '', title: 'Библиотека'},
        {project: '', github: '', stack: '', descr: '', title: 'Лендинг. Магазин мебели'},
        {project: '', github: '', stack: '', descr: '', title: 'Лендинг. Магазин спорттоваров'},
    ]
    
})