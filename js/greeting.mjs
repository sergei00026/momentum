import { showTime, showDate } from "./dateTime.mjs";
const greetingText = document.querySelector('.greeting');

//  возвращающую время суток (morning, day, evening, night) в зависимости от текущего времени
function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	const timeOfDay = ['morning', 'afternoon', 'evening', 'night'];
	if (hours >= 6 && hours <= 11) return timeOfDay[0];
	else if (hours >= 12 && hours <= 17) return timeOfDay[1];
	else if (hours >= 18 && hours <= 23) return timeOfDay[2];
	else if (hours >= 0 && hours <= 5) return timeOfDay[3];

}
const timeOfDay = getTimeOfDay();
greetingText.textContent = `Good ${timeOfDay}`;

export { getTimeOfDay, timeOfDay };
