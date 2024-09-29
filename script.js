document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventdefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Display the values for demonstration purposes (replace with actual form submission logic)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, clear the form
    document.getElementById('registrationForm').reset();
});
