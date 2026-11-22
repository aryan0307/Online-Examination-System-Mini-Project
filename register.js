const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  
  const name = document.getElementById('fullName').value.trim();
  const rollNumber = document.getElementById('rollNumber').value.trim();
  const password = document.getElementById('password').value.trim();
});