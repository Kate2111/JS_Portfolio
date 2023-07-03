import {closeModal, openModal} from './modal';
import {postData} from '../modules/services';


function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        success: 'Спасибо! Ваше сообщение получено',
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

            
            console.log('postData')
            postData(json)
            .then(() => {
                showThanksModal(message.success, '.modal__dialog', '.modal', 'modal__dialog');
            }).catch(() => {
                showThanksModal(message.failure, '.modal__dialog', '.modal', 'modal__dialog');
            }).finally(() => {
                form.reset();
            });
            
        });
    }
    
    
    function showThanksModal(message, dialogFormSelector, formMainClass, dialogForm) {
        const prevModalDialog = document.querySelector(dialogFormSelector);

        prevModalDialog.classList.add('hide');
        openModal(formMainClass);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add(dialogForm);
        thanksModal.innerHTML = `
            <div class="modal__content">                  
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(formMainClass).append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal(formMainClass);
        }, 4000);
    }
}

export default forms;