const headerScrollAnimation = () => {

    const header = document.querySelector('.header')
    let previousScroll = 0
    
    const addAnimationClass = () => {
        
        const currentScroll = window.scrollY
        
        if (currentScroll > previousScroll && currentScroll > 50){
            header.classList.add('header--scrolled')
        } else {
            header.classList.remove('header--scrolled')
        }

        previousScroll = currentScroll
    }

    const addSizeClass = () => {

        const currentScroll = window.scrollY

        if (currentScroll > 100){
            header.classList.add('header--small')
        } else {
            header.classList.remove('header--small')
        }
    }

    window.addEventListener('scroll', addAnimationClass)
    window.addEventListener('scroll', addSizeClass)
    
}

headerScrollAnimation()