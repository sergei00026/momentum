import { getRandomNum } from "./slider.mjs";

const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let n = 0;

let randomNum = getRandomNum(0, 5);

async function getQuotes() {
	const quotes = './json/data.json';
	const res = await fetch(quotes);
	const data = await res.json();

	if (!quote.textContent) {
		quote.textContent = data[randomNum].text;
		author.textContent = data[randomNum].author;
	} else {
		quote.textContent = data[n].text;
		author.textContent = data[n].author;
	}

	n++;
	if (n + 1 > data.length) n = 0;
}
getQuotes();

// quote.textContent = data[randomNum].text;
// author.textContent = data[randomNum].author;


changeQuote.addEventListener("click", function (e) {
	e.preventDefault();
	getQuotes();
});