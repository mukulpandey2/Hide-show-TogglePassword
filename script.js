function togglePassword() {
    const passwordInput = document.getElementById('password');
    const HideShowBtn = document.querySelector('.HideShowBtn');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        HideShowBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        HideShowBtn.textContent = 'Show';
    }
}
