// JavaScript for handling login and signup functionalities

// Store credentials (for demonstration purposes only; not secure)
const credentials = {
    username: "admin",
    password: "admin"
};

// Function to show the modal
function showModal() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('username').value = 'admin'; // Pre-fill username
    document.getElementById('password').value = 'admin'; // Clear password field for security
}

// Function to hide the modal
function hideModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Function to handle login
function handleLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === credentials.username && passwordInput === credentials.password) {
        alert('Login successful!');
        // Show the profile link and hide the login button
        document.getElementById('user-post-section').style.display = 'inline-block';
        document.getElementById('user-post-section').style.display = 'inline-block'; 
        document.getElementById('messages-link').style.display = 'flex'; 
        document.getElementById('profile-link').style.display = 'inline-block'; 
        document.querySelector('.login-trigger').style.display = 'none'; // Hide login button
        hideModal(); // Hide the modal after successful login
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle signup
function handleSignup() {
    const signupUsernameInput = document.getElementById('signup-username').value;
    const signupPasswordInput = document.getElementById('signup-password').value;

    // Here you can add functionality to save the new user credentials
    alert(`Signup successful for username: ${signupUsernameInput}`);
    hideModal(); // Hide the modal after signup
}

// Event listeners for the modal and buttons
document.addEventListener('DOMContentLoaded', () => {
    // Login button trigger
    const loginTrigger = document.querySelector('.login-trigger');
    loginTrigger.addEventListener('click', showModal);

    // Close button for modal
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', hideModal);

    // Handle login button
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', handleLogin);

    // Handle signup button
    const signupButton = document.querySelector('.signup-button');
    signupButton.addEventListener('click', handleSignup);

    // Switch to signup form
    const signupLink = document.querySelector('.signup-link');
    signupLink.addEventListener('click', () => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    });

    // Switch to login form
    const loginLink = document.querySelector('.login-link');
    loginLink.addEventListener('click', () => {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });
});
