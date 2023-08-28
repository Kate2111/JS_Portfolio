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

export default skillsHandler;