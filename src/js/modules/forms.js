import {closeModal, openModal} from './modal';
import {postData} from '../modules/services';


function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        success: 'Спасибо! Я обязательно с Вами свяжусь:)',
        failure: 'Что-то пошло не так...',
    };

    forms.forEach(item => {
        bindPostData(item);
    });


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const formData = new FormData(form);
            const formDataForAuth = Object.fromEntries(formData.entries());
            const json = JSON.stringify(formDataForAuth);

            postData(json)
            .then(() => {
                showThanksModal(message.success);
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
            
        });
    }
    
    
    function showThanksModal(message) {
        const parent = document.querySelector('.contacts');
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal');
        thanksModal.innerHTML = `
            <div class="modal__dialog">
                <div class="modal__content">                  
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>
            </div>  
        `;

        thanksModal.classList.add('show');

        parent.insertAdjacentElement('afterbegin', thanksModal)

        thanksModal.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') == '') {
                thanksModal.classList.add('hide');
                thanksModal.remove();
            }
        });

        setTimeout(() => {
            thanksModal.classList.add('hide');
            thanksModal.remove();
        }, 1500);
    }
}

export default forms;