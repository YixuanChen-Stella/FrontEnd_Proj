(function() {
    'use strict';

    const form = document.querySelector('#registration-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const confirmEmailInput = document.querySelector('#confirm-email');

    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const confirmEmailError = document.querySelector('#confirm-email-error');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.innerText = 'Name is required';
            return false;
        } else {
            nameError.innerText = '';
            return true;
        }
    }

    function validateEmail() {
        if (emailInput.value.trim() === '') {
            emailError.innerText = 'Email is required';
            return false;
        } else {
            emailError.innerText = '';
            return true;
        }
    }

    function validateConfirmEmail() {
        if (confirmEmailInput.value !== emailInput.value) {
            confirmEmailError.innerText = 'Emails do not match';
            return false;
        } else {
            confirmEmailError.innerText = '';
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);

    form.addEventListener('submit', function(e) {
        let isValid = true;

        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateConfirmEmail()) isValid = false;

        if (!isValid) {
            e.preventDefault();
        }
    });
})();
