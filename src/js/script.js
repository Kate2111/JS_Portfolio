require('es6-promise').polyfill();

import canvas from './modules/canvas';
import tabs from './modules/tab';
import modal from './modules/modal';
import skillsHandler from './modules/skills';
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
})

