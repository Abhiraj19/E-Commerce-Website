// auth.js

// Check if user is already logged in
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    window.location.href = 'index.html'; // Redirect to home if already logged in
}

// Handle Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication check (for demo purposes)
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('user', JSON.stringify({ username }));
            alert('Login Successful!');
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password');
        }
    });
}
