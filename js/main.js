function clickFunction(event) {
	event.preventDefault();
	console.log('hey there', this);
};


$('a').on('click',clickFunction);