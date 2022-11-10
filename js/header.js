const headerScrollAnimation = () => {

    const HEADER = document.querySelector('.header');
    let previousScroll = 0;
    
    const addAnimationClass = () => {
        
        const CURRENT_SCROLL = window.scrollY;
        
        if (CURRENT_SCROLL > previousScroll && CURRENT_SCROLL > 50){
            HEADER.classList.add('header--scrolled');
        } else {
            HEADER.classList.remove('header--scrolled');
        }

        previousScroll = CURRENT_SCROLL;
    }

    const addSizeClass = () => {

        const CURRENT_SCROLL = window.scrollY;

        if (CURRENT_SCROLL > 100){
            HEADER.classList.add('header--small');
        } else {
            HEADER.classList.remove('header--small');
        }
    }

    window.addEventListener('scroll', addAnimationClass);
    window.addEventListener('scroll', addSizeClass);
    
}

headerScrollAnimation();