const menu = () => {

    const MENU_BUTTON = document.querySelector('.menu__button');
    const CONTAINER = document.querySelector('.container');
    const HEADER = document.querySelector('.header');

    const openMenu = () => {

        HEADER.classList.toggle('header--menu-open');
        CONTAINER.classList.toggle('container--locked');

    }

    MENU_BUTTON.addEventListener('click', openMenu);

}

menu();