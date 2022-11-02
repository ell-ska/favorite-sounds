const menu = () => {

    const menuButton = document.querySelector('.menu__button')
    const container = document.querySelector('.container')
    const header = document.querySelector('.header')

    const openMenu = () => {

        header.classList.toggle('header--menu-open')

        container.classList.toggle('container--locked')

    }

    menuButton.addEventListener('click', openMenu)

}

menu()