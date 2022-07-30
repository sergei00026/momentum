const audio = new Audio();
const isPlay = false;

function playAudio() {
	audio.src = url('/assets/sounds/Aqua Caelestis.mp3');
	audio.currentTime = 0;
	audio.play();
}
function pauseAudio() {
	audio.pause();
}