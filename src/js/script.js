require('es6-promise').polyfill();

import modal from './modules/modal';
import tabs from './modules/tab';
import canvas from './modules/canvas';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', function() {
    canvas();
    skillsHandler();
    tabs('.portfolio__tab','.portfolio__items', 'my_button--active', 'portfolio__items--active');
 
    modal('[data-all]', '.modal');
    modal('[data-react]', '.modal');
    modal('[data-js]', '.modal');
    modal('[data-vue]', '.modal');
   
    forms('form');

    

    function skillsHandler() {
        new WOW().init();


        const skills = document.querySelectorAll('.skills__item');

        skills.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.classList.remove('wow',  'fadeIn');
                item.removeAttribute('style');
                item.classList.add('animate__animated', 'animate__heartBeat');
            })
            item.addEventListener('mouseout', () => {
                item.classList.remove('animate__animated', 'animate__heartBeat');
            })
        })
    }

})