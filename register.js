const registerForm = document.querySelector('form');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  
  const name = document.getElementById('fullName').value.trim();
  const rollNumber = document.getElementById('rollNumber').value.trim();
  const password = document.getElementById('password').value.trim();

  
  const users = JSON.parse(localStorage.getItem('portalUsers')) || [];

 
  const alreadyExists = users.some(user => user.rollNumber === rollNumber);
  if (alreadyExists) {
    alert('This Roll Number is already registered! Please Login.');
    return;
  }

  users.push({ name, rollNumber, password });
  localStorage.setItem('portalUsers', JSON.stringify(users));

  
  window.location.href = 'login.html';
});