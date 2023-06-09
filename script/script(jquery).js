$(document).ready(function() {
    const formButton = $('.form__button');
    const emailInput = $('.email');
    const errorMessage = $('.error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    formButton.on('click', function(e) {
      e.preventDefault();
  
    if (emailInput == '' || !emailPattern.test(emailInput.val())) {
        emailInput.addClass('error');
        errorMessage.css('display', 'flex');
    } else {
        emailInput.removeClass('error');
        errorMessage.css('display', 'none');
        form.reset();
    }
    });
});  