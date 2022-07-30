const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');

let city = document.querySelector('.city');
if (city.value == undefined || city.value == '') {
	city.value = 'Sterlitamak'
} else {
	city.value = city.value;
};

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=b2a7f7d23cbe090d90a3b6a407ade3eb&units=metric`;


// мы получили объект с погодой data
async function getWeather() {

	const res = await fetch(url);
	const data = await res.json();

	// мы удаляем все лишние классы перед добавлением нового, чтобы иконка погоды обновлялась корректно.
	weatherIcon.className = 'weather-icon owf';

	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	temperature.textContent = `${Math.round(data.main.temp)}°C`;
	weatherDescription.textContent = data.weather[0].description;
	// windSpeed.textContent = data.wind.speed;

}
getWeather()

city.addEventListener('change', function () {

	url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=b2a7f7d23cbe090d90a3b6a407ade3eb&units=metric`;
	console.log('dfgdgdgdfg');
	getWeather();

})

export { getWeather };