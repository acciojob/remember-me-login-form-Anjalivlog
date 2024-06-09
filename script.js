//your JS code here. If required.
let loginForm = document.getElementById('login-form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let remember = document.getElementById('checkbox');
let existingUserButton = document.getElementById('existing');

loginForm.addEventListener('click', function(e) {
	e.preventDefault();
	if(remember.checked) {
		localStorage.setItem('username', username.value);
		localStorage.setItem('password', password.value);
	} else {
		localStorage.removeItem('username');
		lo
	}
})