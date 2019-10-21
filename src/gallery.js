const thumbs = document.querySelector('.thumbs');
const largeImg = document.querySelector('.largeImg');

thumbs.onclick = (event) => {
    const thumbnail = event.target;

    if (!thumbnail) {
        return;
    }
    event.preventDefault();
    showThumbnail(thumbnail.href, thumbnail.title);
};

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}
