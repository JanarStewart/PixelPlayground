const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginInfo = {
    username: usernameInput.value,
    password: passwordInput.value
    };
console.log(loginInfo);
});