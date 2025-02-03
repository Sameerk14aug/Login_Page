document.getElementById('forgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.querySelector('input[name="email"]');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const errorElement = document.getElementById('email-error');
    
    // Trim email input
    const email = emailInput.value.trim();
    
    // Reset error
    errorElement.style.display = 'none';
    emailInput.classList.remove('error');
    
    // Email validation
    if (!email) {
        showError('Email is required');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Show loading state
    setLoadingState(true);
    
    // Simulate API call
    setTimeout(() => {
        setLoadingState(false);
        showSuccess();
    }, 1500);
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function showError(message) {
    const errorElement = document.getElementById('email-error');
    const emailInput = document.querySelector('input[name="email"]');
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    emailInput.classList.add('error');
}

function setLoadingState(isLoading) {
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    submitBtn.disabled = isLoading;
    btnText.textContent = isLoading ? 'Sending...' : 'Send Reset Link';
    submitBtn.style.opacity = isLoading ? '0.7' : '1';
}

function showSuccess() {
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    btnText.textContent = 'Link Sent!';
    submitBtn.style.background = 'linear-gradient(to right, #28a745, #218838)';
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Password reset link has been sent to your email';
    submitBtn.parentNode.insertBefore(successMessage, submitBtn.nextSibling);
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 3000);
}

// Add input event listener for real-time validation
document.querySelector('input[name="email"]').addEventListener('input', function() {
    document.getElementById('email-error').style.display = 'none';
});
