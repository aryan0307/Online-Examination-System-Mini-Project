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