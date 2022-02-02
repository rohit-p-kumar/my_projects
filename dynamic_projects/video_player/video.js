const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//  To play and pause the video
function toggleVideoStatus(){
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
 // To update play and pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML= '<i class="fa-solid fa-play fa-2x"></i>';
    } else {
        play.innerHTML= '<i class="fa-solid fa-pause fa-2x"></i>';
    }
}

// To update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) *100;


// To get minutes
let mins = Math.floor(video.currentTime / 60);
if(mins < video.duration) {
    mins = '0' + String(mins);
}

// To get seconds
let secs = Math.floor(video.currentTime % 60);
if(secs < video.duration) {
    secs = '0' + String(secs);
}
  timestamp.innerHTML = `${mins}:${secs}`;
  
}

// To set the video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// To stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// Event Listeners (Actions)
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);