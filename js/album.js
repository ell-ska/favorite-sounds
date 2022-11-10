const albumPreview = () => {

    const CONTAINER = document.querySelector('.container');
    const ALBUMS = document.querySelectorAll('.album');

    const openPreview = (event) => {

        // get "about the song link"
        const LINK_TO_SONG = event.target.querySelector('.album__meta').getAttribute('href');

        // create full-page see through background
        const UNDERLAY = document.createElement('div');
        UNDERLAY.classList.add('album__underlay');
        document.body.appendChild(UNDERLAY);

        // create extra album to use as overlay
        const OVERLAY_ALBUM = event.target.cloneNode(true);
        OVERLAY_ALBUM.classList.add('album--open');
        UNDERLAY.appendChild(OVERLAY_ALBUM);

        // close preview with button
        const closePreview = (event) => {
        event.target.parentNode.remove();
        CONTAINER.classList.remove('container--locked');
        document.querySelector('.album__underlay').remove();
        window.scrollTo(0, SCROLL_POSITION);
        CONTAINER.style.top = null;
        }

        const CLOSE_BUTTON = document.createElement('button');
        CLOSE_BUTTON.classList.add('album__button');
        OVERLAY_ALBUM.appendChild(CLOSE_BUTTON);
        CLOSE_BUTTON.addEventListener('click', closePreview);

        // close preview by tapping outside album
        const closePreviewWithUnderlay = (event) => {
            event.target.remove();
            CONTAINER.classList.remove('container--locked');
            window.scrollTo(0, SCROLL_POSITION);
            CONTAINER.style.top = null;
        }

        UNDERLAY.addEventListener('click', closePreviewWithUnderlay);

        // create link
        const ALBUM_LINK = document.createElement('a');
        ALBUM_LINK.innerText = 'About the song';

        // assign value to href
        if (LINK_TO_SONG) {
            ALBUM_LINK.setAttribute('href', LINK_TO_SONG);
        } else {
            ALBUM_LINK.setAttribute('href', '404.html');
        }

        ALBUM_LINK.classList.add('album__link');
        OVERLAY_ALBUM.appendChild(ALBUM_LINK);

        // lock container from scrolling
        const SCROLL_POSITION = window.scrollY;
        CONTAINER.classList.add('container--locked');
        CONTAINER.style.top = '-'+SCROLL_POSITION+'px';

    }

    ALBUMS.forEach(album => {
        album.addEventListener('click', openPreview);
    });

}

albumPreview();