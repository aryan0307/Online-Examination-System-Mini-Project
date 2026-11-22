const loginForm = document.querySelector('form');
const rollInput = document.getElementById('rollNumber');
const passwordInput = document.getElementById('password');


window.addEventListener('DOMContentLoaded', () => {
  rollInput.focus();
});


function setError(inputElement, message) {
  const formGroup = inputElement.closest('.form-group');
  let errorEl = formGroup.querySelector('.js-error');

  if (!errorEl) {
    errorEl = document.createElement('small');
    errorEl.className = 'js-error';
    errorEl.style.color = '#e63946';
    errorEl.style.fontSize = '12px';
    errorEl.style.display = 'block';
    errorEl.style.marginTop = '4px';
    formGroup.appendChild(errorEl);
  }

  errorEl.textContent = message;
  inputElement.style.borderColor = message ? '#e63946' : '';
}


loginForm.setAttribute('novalidate', true);
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); 
  let isValid = true;

  const rollVal = rollInput.value.trim();
  const passVal = passwordInput.value.trim();

  if (rollVal === '') {
    setError(rollInput, 'Please enter your Username or Roll Number.');
    isValid = false;
  } else {
    setError(rollInput, '');
  }

  if (passVal === '') {
    setError(passwordInput, 'Please enter your password.');
    isValid = false;
  } else if (passVal.length < 6) {
    setError(passwordInput, 'Password must be at least 6 characters.');
    isValid = false;
  } else {
    setError(passwordInput, '');
  }

  
  if (isValid) {
    const users = JSON.parse(localStorage.getItem('portalUsers')) || [];
    
    
    const foundUser = users.find(user => user.rollNumber === rollVal);

    if (!foundUser) {
      setError(rollInput, 'Account not found. Please Register first.');
    } else if (foundUser.password !== passVal) {
      setError(passwordInput, 'Incorrect password. Please try again.');
    } else {
     
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      window.location.href = 'dashboard.html';
    }
  }
});


rollInput.addEventListener('input', () => setError(rollInput, ''));
passwordInput.addEventListener('input', () => setError(passwordInput, ''));