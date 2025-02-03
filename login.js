document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');
    const submitBtn = document.getElementById('submit-btn');
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    let isValid = true;
    
    // Validation with better error messages
    if (username.value.trim() === '') {
        showError('username-error', 'Username is required');
        isValid = false;
    } else if (username.value.length < 3) {
        showError('username-error', 'Username must be at least 3 characters');
        isValid = false;
    }
    
    if (password.value === '') {
        showError('password-error', 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (isValid) {
        submitBtn.classList.add('btn-loading');
        // Simulate API call
        simulateLogin({
            username: username.value,
            password: password.value,
            remember: document.querySelector('input[name="remember"]').checked
        });
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function simulateLogin(data) {
    setTimeout(() => {
        // Simulated API response
        console.log('Login attempt with:', data);
        // Redirect to dashboard or show error
        window.location.href = '/dashboard';
    }, 1500);
}

// Add input event listeners for real-time validation
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = this.parentElement.querySelector('.error-message');
        errorElement.style.display = 'none';
    });
});
