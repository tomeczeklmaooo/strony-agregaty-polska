//
// EMAIL
//
document.querySelector('.contact-form').addEventListener('submit', function(event) {
	event.preventDefault();

	const notification = document.querySelector('message-sent-modal');

	let phone_number = document.getElementById('telefon').value.trim() || 'Nie podano numeru telefonu';

	let full_name = document.getElementById('imie-nazwisko').value.trim();
	let [name, ...last_name] = full_name.split(' ');
	last_name = last_name.join(' ');

	let params = {
		name: name,
		secondName: last_name,
		email: document.getElementById('email').value,
		phoneNumber: phone_number,
		message: document.getElementById('message').value
	};

	emailjs.send('service_52vfxjn', 'template_egdx15c', params).then(function(response) {
		console.log('success');
		notification.classList.toggle('hidden');
		console.log(response);

		document.querySelector('.contact-form').reset();
	}, function(error) {
		alert(`Failed to send email. Error: ${JSON.stringify(error)}`);
	});
});

document.querySelector('.cross-icon').addEventListener('click', () => {
	document.querySelector('.message-sent-modal').classList.toggle('hidden');
});