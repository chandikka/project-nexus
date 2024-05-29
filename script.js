document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Signup successful!');
        // You can add further form submission logic here
    }
});
