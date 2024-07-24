let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myVideo = document.getElementById('my-video')
let closeButton = document.querySelector('.close-video');

playButton.addEventListener('click', () => {
    video.classList.add('show-video');
    myVideo.play();
});

closeButton.addEventListener('click', () => {
    video.classList.remove('show-video');
    myVideo.pause();
});