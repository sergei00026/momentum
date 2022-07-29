const name1 = document.querySelector('.name');

// перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorage() {
	localStorage.setItem('name', name1.value)
}
window.addEventListener('beforeunload', setLocalStorage);

// перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorage() {
	if (localStorage.getItem('name')) {
		name1.value = localStorage.getItem('name');
	}
}
window.addEventListener('load', getLocalStorage);
export { setLocalStorage, getLocalStorage }