(() => {
    const setDropdownClasses = (className) => {
        const dropdowns = document.getElementsByClassName(className);
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('block')) {
                openDropdown.classList.add('hidden');
                openDropdown.classList.remove('block');
                openDropdown.parentNode.querySelector('.split-button').setAttribute('aria-expanded', 'false');
            }
        }
    }

    document.activeElement.addEventListener('keyup', (e) => {
        if (e.keyCode == 27) {
            setDropdownClasses("split-button-menu");
        }
    });
    
    window.splitButton = (element) => {
        const thisDropdown = element.parentNode.nextElementSibling;
    
        if (!thisDropdown.classList.contains('hidden')) {
            thisDropdown.classList.add('hidden');
            thisDropdown.classList.remove('block');
            element.setAttribute('aria-expanded', 'false');
        }
        else {
            thisDropdown.classList.remove('hidden');
            thisDropdown.classList.add('block');
            element.setAttribute('aria-expanded', 'true');
        }
    }
    
    window.onclick = function (event) {
        if (!event.target.matches('.split-button')) {
            setDropdownClasses("split-button-menu");
        }
    }
    
    window.onload = () => {
        const splitButtonMenu = document.getElementsByClassName("split-button-menu");
        for (let i = 0; i < splitButtonMenu.length; i++) {
            splitButtonMenu[i].lastElementChild.addEventListener("focusout", function () {
                setDropdownClasses("split-button-menu");
            });
        }
    }
})()
