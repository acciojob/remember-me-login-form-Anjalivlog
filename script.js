//your JS code here. If required.
let loginForm = document.getElementById('login-form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let remember = document.getElementById('checkbox');
let existingUserButton = document.getElementById('existing');

// Add an event listener for the form's submit event
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();  // This prevents the form from being submitted normally

    // Check if the remember checkbox is checked
    if (remember.checked) {
        // If it is, store the username and password in local storage
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
    } else {
        // If it's not, remove the username and password from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Display the alert
    alert("Logged in as " + username.value);
});

// Check if there are saved details in local storage
if (localStorage.getItem('username')) {
    // If there are, display the existing user button
    existingUserButton.style.display = 'block';
}

// Add an event listener for the existing user button's click event
existingUserButton.addEventListener('click', function() {
    // Display an alert with the saved username
    alert("Logged in as " + localStorage.getItem('username'));
});
