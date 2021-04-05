const formId = "1FAIpQLSeqQTUEuU_fEJss14aewiN_6LtndQrh-LXX-uk9yR88nom01w"
const entry1 = "entry.427337559";
const entry2 = "entry.1012071889";
const entry3 = "entry.1369634039";
const entry4 = "entry.233298297";

const getPath = formId => `https://docs.google.com/forms/d/e/${ formId }/formResponse`;

const postToGoogleDB = function(data){
	const path = getPath(formId);
	const url = getURL( path, data);
	/*initRequest('POST', url);*/
	sendRequest('POST', url)
		.then(responseEvent);
}

const getURL = function(path, params){
	const url = new URL(path);
	for(let key in params){
		url.searchParams.set( key, params[key] );
	}
	return url;
}

const initRequest = function(verb, url){
	/*const contactForm = document.getElementById('contact-form');
	contactForm.action = url.toString();
	contactForm.method = verb;*/
	const init = new Object();
	init.method = verb;
	init.mode = 'no-cors';
	return new Request(url, init);
}

const sendRequest = async function(verb, url){
	const request = initRequest(verb, url);
	const response = await fetch(request);
	return response;
}

const responseEvent = response => alert('Success!');