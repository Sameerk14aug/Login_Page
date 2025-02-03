document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fields = {
        fullname: document.querySelector('input[name="fullname"]'),
        email: document.querySelector('input[name="email"]'),
        username: document.querySelector('input[name="username"]'),
        password: document.querySelector('input[name="password"]'),
        confirm_password: document.querySelector('input[name="confirm_password"]'),
        terms: document.querySelector('input[name="terms"]')
    };
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    let isValid = true;
    
    // Validation rules
    if (fields.fullname.value.trim().length < 3) {
        showError('fullname-error', 'Full name must be at least 3 characters');
        isValid = false;
    }
    
    if (!isValidEmail(fields.email.value)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (fields.username.value.length < 3) {
        showError('username-error', 'Username must be at least 3 characters');
        isValid = false;
    }
    
    if (fields.password.value.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (fields.password.value !== fields.confirm_password.value) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }
    
    if (!fields.terms.checked) {
        showError('terms-error', 'You must accept the Terms & Conditions');
        isValid = false;
    }
    
    if (isValid) {
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.textContent = 'Creating Account...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Real-time validation
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = this.parentElement.querySelector('.error-message');
        errorElement.style.display = 'none';
    });
});
