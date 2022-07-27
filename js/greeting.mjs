import { showTime, showDate } from "./dateTime.mjs";
const greetingText = document.querySelector('.greeting');

//  возвращающую время суток (morning, day, evening, night) в зависимости от текущего времени
function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	const timeOfDay = ['morning', 'day', 'evening', 'night'];
	if (hours >= 4 && hours <= 11) {
		greetingText.textContent = `Good ${timeOfDay[0]}`;
	} else if (hours >= 12 && hours <= 16) {
		greetingText.textContent = `Good ${timeOfDay[1]}`;
	} else if (hours >= 17 && hours <= 23) {
		greetingText.textContent = `Good ${timeOfDay[2]}`;
	} else if (hours >= 0 && hours <= 3) {
		greetingText.textContent = `Good ${timeOfDay[3]}`;
	}
}


export { getTimeOfDay };
