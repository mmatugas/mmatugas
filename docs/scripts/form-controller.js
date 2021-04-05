//Initialize all controllers
const initControllers = function(){
	/*const contactForm = document.getElementById('contact-form');
	contactForm.addEventListener('submit', submitEvent);*/
	const submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
	const formData = new Object();
	formData[entry1] = document.getElementById('name').value;
	formData[entry2] = document.getElementById('email').value;
	formData[entry3] = document.getElementById('subject').value;
	formData[entry4] = document.getElementById('message').value;

	/*const contactForm = document.getElementById('contact-form');
	contactForm.action = getPath(formId);
	contactForm.method = "POST"; */

	postToGoogleDB(formData);


}

initControllers(); //Must be last line of code