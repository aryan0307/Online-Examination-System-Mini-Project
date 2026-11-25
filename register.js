
const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const department = document.getElementById('department').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('portalUsers')) || [];

    // Prevent duplicate registration
    const alreadyExists = users.some(user => user.rollNumber === rollNumber);

    if (alreadyExists) {
        alert('This Roll Number is already registered! Please Login.');
        return;
    }

    // Save new user
    users.push({
        name,
        rollNumber,
        email,
        department,
        password
    });

    localStorage.setItem('portalUsers', JSON.stringify(users));

    alert('Registration successful!');
    window.location.href = 'login.html';
});
