require('es6-promise').polyfill();

import modal from './modules/modal';
import tabs from './modules/tab';
import canvas from './modules/canvas';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', function() {

    canvas();
    tabs('.portfolio__tab','.portfolio__items', 'my_button--active', 'portfolio__items--active');
    modal('[data-all]', '.modal');
    modal('[data-react]', '.modal');
    modal('[data-js]', '.modal');
    modal('[data-vue]', '.modal');
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