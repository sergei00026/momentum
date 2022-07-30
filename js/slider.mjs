import { timeOfDay } from "./greeting.mjs";

const body = document.body || document.getElementsByTagName('body')[0];

function getRandomNum(min = 1, max = 20) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return String(Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
}
let randomNum = getRandomNum();

const SlideNext = document.querySelector('.slide-next');
SlideNext.addEventListener("click", function getSlideNext(e) {

	if (randomNum >= 1 && randomNum < 20) {
		randomNum = String(Number(randomNum) + 1);
		setBg();
	} else if (randomNum == 20) {
		randomNum = '1';
		setBg();
	}
});

const SlidePrev = document.querySelector('.slide-prev');
SlidePrev.addEventListener("click", function getSlideNext() {

	if (randomNum > 1 && randomNum <= 20) {
		randomNum = String(Number(randomNum) - 1);
		setBg();
	} else if (randomNum == 1) {
		randomNum = '20';
		setBg();
	}
});


// порядковый номер фонового изображения
function setBg() {
	const bgNum = randomNum.padStart(2, '0');

	// создаёт новый экземпляр
	const img = new Image();

	img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

	/*когда фоновое изображение ещё не загрузилось, но уже используется как фоновое, необходимо указывать его фоном страницы только после полной загрузки.Для этого через js создаём изображение, указываем его адрес, дожидаемся загрузки изображения для чего используем событие load и только потом указываем ссылку на изображение в качестве фона страницы.*/
	img.addEventListener('load', function (e) {
		body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;
		e.preventDefault();
	})

}
setBg()


export { setBg, getRandomNum };