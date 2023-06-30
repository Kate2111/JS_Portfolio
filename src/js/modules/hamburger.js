function hamburger(selectorHamburger, selectorMenu, closeBtn) {
    const hamburger = document.querySelector(selectorHamburger),
    menu = document.querySelector(selectorMenu);
    close = document.querySelector(closeBtn);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

export default hamburger;