const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const lineOne = document.getElementById('line-1');
const lineTwo = document.getElementById('line-2');
const lineThree = document.getElementById('line-3');


hamburger.addEventListener('click', () => {
	ul.classList.toggle('nav-links');
	lineOne.classList.toggle('rotate-45');
	lineTwo.classList.toggle('display-none');
	lineThree.classList.toggle('rotate-minus-45');
});