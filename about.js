console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const imgMessage = document.querySelector("img").addEventListener('mouseover', () => {
	alert('Good Work!')
})

