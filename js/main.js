const search = document.querySelector('.search');
const coffe = document.querySelectorAll('li');

const coffeSearch = e => {
	const text = e.target.value.toLowerCase();

	coffe.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'flex';
		} else {
			el.style.display = 'none';
		}
	});
};

search.addEventListener('keyup', coffeSearch);

//---------------------------------------

// // The same code, using RegExp:

// const search = document.querySelector('.search');
// const coffe = document.querySelectorAll('li');

// const coffeSearch = () => {
// 	coffe.forEach(el => {
// 		const match = new RegExp(search.value, 'i').test(el.textContent);
// 		if (!match) {
// 			el.style.display = 'none';
// 		} else {
// 			el.style.display = 'flex';
// 		}
// 	});
// };

// search.addEventListener('keyup', coffeSearch);
