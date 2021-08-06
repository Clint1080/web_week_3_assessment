console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert(`Form submission successful!`)
}


let form = document.querySelector('form#contact');

const goodUser = (e) => {
	e.preventDefault()

	window.alert(`Wow you look hot today ;)`)
}
let img = document.querySelector(`img`)

img.addEventListener(`mouseover`, goodUser);
form.addEventListener('submit', handleSubmit);