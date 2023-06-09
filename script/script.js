document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.querySelector('.form__button');
    const emailInput = document.querySelector('.email');
    const errorMessage = document.querySelector('.error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    formButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      if (emailInput.value === '' || !emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        errorMessage.style.display = 'flex';
      } else {
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
        document.forms[0].reset();
      }
    });
});