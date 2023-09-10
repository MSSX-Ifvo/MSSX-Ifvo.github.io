$(function () {
    var audio = new Audio();
        audio3 = audio;
        audio.src = '/images/fs.mp3';
        audio.loop = true;
        audio.id = 'myAudio3';
        audio.autoplay = true;
        //audio.addEventListener('canplay', canPlay, false);
        audio.play();
});