require('es6-promise').polyfill();

import hamburger from './modules/hamburger';
import modal from './modules/modal';
import tabs from './modules/tab';
import canvas from './modules/canvas';
import forms from './modules/forms';
import cards from './modules/cards'


window.addEventListener('DOMContentLoaded', function() {

    canvas();
    //cards();
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

})