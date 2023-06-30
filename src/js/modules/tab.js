
function tabs(arrTabs, arrItem, tabActive, itemActive) {
    const tabs = document.querySelectorAll(arrTabs);
    const items = document.querySelectorAll(arrItem);

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            for(let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove(tabActive);
                items[i].classList.remove(itemActive);
            };
            this.classList.add(tabActive);
            items[i].classList.add(itemActive);
        })
    }
}

export default tabs;