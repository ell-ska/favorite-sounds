const albumPreview = () => {

    const container = document.querySelector('.container')
    const albums = document.querySelectorAll('.album')

    const closePreview = (event) => {
        event.target.parentNode.remove()
        container.classList.remove('container--locked')
        document.querySelector('.album__underlay').remove()
    }

    const openPreview = (event) => {

        // get "about the song link"
        const linkToSong = event.target.querySelector('.album__meta').getAttribute('href')

        // create extra album to use as overlay
        const overlayAlbum = event.target.cloneNode(true)
        overlayAlbum.classList.add('album--open')
        document.body.appendChild(overlayAlbum)

        // create close button
        const closeButton = document.createElement('button')
        closeButton.classList.add('album__button')
        overlayAlbum.appendChild(closeButton)
        closeButton.addEventListener('click', closePreview)

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

        // create full-page background
        const underlay = document.createElement('div')
        underlay.classList.add('album__underlay')
        document.body.appendChild(underlay)

        // lock container from scrolling
        container.classList.add('container--locked')

    }

    albums.forEach(album => {
        album.addEventListener('click', openPreview)
    });

}

albumPreview()