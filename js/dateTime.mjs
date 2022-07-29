import { getTimeOfDay } from "./greeting.mjs";

const time = document.querySelector('.time');
const mounth = document.querySelector('.date');

function showTime() {
	const date = new Date();
	const dateTime = date.toLocaleTimeString();

	time.textContent = dateTime;
	getTimeOfDay();
	showDate()
	setTimeout(showTime, 1000);
}
showTime();

function showDate() {
	const date = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const dateDay = date.toLocaleDateString('en-US', options);

	mounth.textContent = dateDay;
}


export { showTime, showDate };