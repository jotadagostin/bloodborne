const buttonTrailer = document.querySelector('.button_trailer');
const buttonCloseModal = document.querySelector('.close_modal');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkOftheVideo = video.src;

buttonTrailer.addEventListener('click', () => {
    modal.classList.add('open');
    video.setAttribute('src', linkOftheVideo);
});

buttonCloseModal.addEventListener('click', () => {
    modal.classList.remove('open');
    video.setAttribute('src', '');
});