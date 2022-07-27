const time = document.querySelector('.time');
const mounth = document.querySelector('.date');




function showTime() {
	const date = new Date();
	const dateTime = date.toLocaleTimeString();

	time.textContent = dateTime;
	setTimeout(showTime, 1000);

}
function showDate() {
	const date = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const dateDay = date.toLocaleDateString('en-US', options);

	mounth.textContent = dateDay;
	setTimeout(showDate, 1000 * 60 * 60);


}


export { time, showTime, showDate };