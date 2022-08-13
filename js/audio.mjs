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

function pauseAudio() {
	audio.pause();
	isPlay = false;
	playMusic.classList.remove('pause');

}

playMusic.addEventListener("click", function (e) {
	playAudio()
});



playNext.addEventListener("click", function playNext(e) {

	if (playNum + 1 < playList.length) {
		playNum++;
	} else {
		playNum = 0;
	}

	colorLi()
	isPlay = false;
	playAudio()
});

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

console.log(liList);
export { playAudio };