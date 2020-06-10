const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const lineOne = document.getElementById('line-1');
const lineTwo = document.getElementById('line-2');
const lineThree = document.getElementById('line-3');
let open = false;

hamburger.addEventListener('click', () => {
	if (!open) {
		ul.classList.add('open-hamburger');
		open = true;
	} else {
		ul.classList.remove('open-hamburger');
		open = false;
	}
	lineOne.classList.toggle('rotate-45');
	lineTwo.classList.toggle('display-none');
	lineThree.classList.toggle('rotate-minus-45');
});
