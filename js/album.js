const albumPreview = () => {

    const container = document.querySelector('.container')
    const albums = document.querySelectorAll('.album')

    const openPreview = (event) => {

        // get "about the song link"
        const linkToSong = event.target.querySelector('.album__meta').getAttribute('href')

        // create full-page background
        const underlay = document.createElement('div')
        underlay.classList.add('album__underlay')
        document.body.appendChild(underlay)

        // create extra album to use as overlay
        const overlayAlbum = event.target.cloneNode(true)
        overlayAlbum.classList.add('album--open')
        underlay.appendChild(overlayAlbum)

        // close button
        const closePreview = (event) => {
        event.target.parentNode.remove()
        container.classList.remove('container--locked')
        document.querySelector('.album__underlay').remove()
        window.scrollTo(0, scrollPosition)
        }

        const closeButton = document.createElement('button')
        closeButton.classList.add('album__button')
        overlayAlbum.appendChild(closeButton)
        closeButton.addEventListener('click', closePreview)

        // close by tapping outside album
        const closePreviewWithUnderlay = (event) => {
            event.target.remove()
            container.classList.remove('container--locked')
            window.scrollTo(0, scrollPosition)
        }

        underlay.addEventListener('click', closePreviewWithUnderlay)

        // create link
        const albumLink = document.createElement('a')
        albumLink.innerText = 'About the song'

        // assign value to href
        if (linkToSong){
            albumLink.setAttribute('href', linkToSong)
        } else {
            albumLink.setAttribute('href', '404.html')
        }

        albumLink.classList.add('album__link')
        overlayAlbum.appendChild(albumLink)

        // lock container from scrolling
        const scrollPosition = window.scrollY
        container.classList.add('container--locked')
        container.style.top = '-'+scrollPosition+'px'

    }

    albums.forEach(album => {
        album.addEventListener('click', openPreview)
    });

}

albumPreview()