const pageDoesNotExist = () => {
    
    let links = document.getElementsByTagName('a');
    links = [...links];

    const redirect = (event) => {

        event.preventDefault();
        const HREF = event.target.getAttribute('href');
        const TARGET = event.target.getAttribute('target');

        if (HREF && TARGET) {
            window.open(HREF, TARGET);
        } else if (HREF) {
            location.href = HREF;
        } else {
            location.href = '404.html';
        }

    }

    links.forEach(link => {
        link.addEventListener('click', redirect);
    });
}

pageDoesNotExist();