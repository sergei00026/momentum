import playList from "./playList.js";
const playMusic = document.querySelector('.play');
const audio = new Audio();
let isPlay = false;
let playNum = 0;
const playListContainer = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');

function playAudio() {
	audio.src = playList[playNum].src;
	// audio.currentTime = 0;

	if (!isPlay) {
		audio.play();
		isPlay = true;
		playMusic.classList.add('pause');
		colorLi()

	} else {

		pauseAudio()
	}
}

// pauseAudio
function pauseAudio() {
	audio.pause();
	isPlay = false;
	playMusic.classList.remove('pause');
}

playMusic.addEventListener("click", function (e) {
	playAudio()
});

// nextSong
function nextSong(e) {

	if (playNum + 1 < playList.length) {
		playNum++;
	} else {
		playNum = 0;
	}

	colorLi()
	isPlay = false;
	playAudio()
};

playNext.addEventListener("click", nextSong);

// playPrev
playPrev.addEventListener("click", function playPrev(e) {

	if (playNum === 0) {
		playNum = playList.length - 1;
	}
	else {
		playNum -= 1;
	}

	colorLi()
	console.log(playNum);
	isPlay = false;
	playAudio()
});

// вывести весь список песен
playList.forEach(el => {
	// создать элемент <li> средствами js
	let li = document.createElement('li');
	li.classList.add('play-item');
	li.textContent = el.title;
	playListContainer.append(li);

})

// Изменить цвет песни при воспроизведении
const liList = document.querySelectorAll('.play-item');
function colorLi() {
	liList.forEach(function (element, index) {
		if (playNum == index) {
			element.classList.add('liColor');
		} else {
			element.classList.remove('liColor');

		}
	});
}


// ПрогрессБар
const progressBarIn = document.querySelector('.progress-barIn');

function updateProgress(e) {
	// Через деструктаризацию получиили  длительность и текущую секунду
	const { duration, currentTime } = e.srcElement;
	const progressBarPercent = (currentTime / duration) * 100;
	progressBarIn.style.width = `${progressBarPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress)

// set progress
const progressBarContainer = document.querySelector('.progress-bar');

function setProgress(e) {
	// получил длину контейнера
	const width = this.clientWidth
	// получил текущее место в контейнере
	const clickX = e.offsetX;
	// получил длину тек. песни
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}

progressBarContainer.addEventListener("click", setProgress);

//Autoplay
audio.addEventListener('ended', nextSong)

//
const durationAudio = document.querySelector('.duration');

function setTimeAudio(e) {

	// получил длину тек. песни
	const duration = audio.duration;
	const currentTime = audio.currentTime;

	// Minutes
	let minutes = Math.floor(currentTime / 60);
	if (minutes < 10) {
		minutes = '0' + String(minutes);
	}

	// Seconds
	let seconds = Math.floor(currentTime % 60);

	if (seconds < 10) {
		seconds = '0' + String(seconds);
	}

	durationAudio.innerHTML = `${minutes}:${seconds}`;

}
audio.addEventListener('timeupdate', setTimeAudio)

export { playAudio };