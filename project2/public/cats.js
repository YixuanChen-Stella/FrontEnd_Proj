"use strict";
document.addEventListener('DOMContentLoaded', () => {

    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.nav-menu');
    const modal = document.querySelector('#subscribeModal');
    const subscribeLinks = document.querySelectorAll('.subscribe-link');
    const cancelButton = document.querySelector('#cancelModal');
    const form = document.querySelector('#subscribeForm');
    const emailInput = document.querySelector('#email');
    const confirmEmailInput = document.querySelector('#confirmEmail');
    const emailError = document.querySelector('#emailError');
    const confirmEmailError = document.querySelector('#confirmEmailError');

    hamburgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    hamburgerIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navMenu.classList.toggle('active');
        }
    });

    subscribeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'flex';
        });
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });

    const validateEmail = () => {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
        } else if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Email must contain "@" symbol.';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
    };

    const validateConfirmEmail = () => {
        if (confirmEmailInput.value.trim() === '') {
            confirmEmailError.textContent = 'Please confirm your email.';
            confirmEmailError.style.display = 'block';
        } else if (emailInput.value !== confirmEmailInput.value) {
            confirmEmailError.textContent = 'Emails do not match.';
            confirmEmailError.style.display = 'block';
        } else {
            confirmEmailError.textContent = '';
            confirmEmailError.style.display = 'none';
        }
    };

    emailInput.addEventListener('blur', validateEmail);
    confirmEmailInput.addEventListener('blur', validateConfirmEmail);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        validateEmail();
        validateConfirmEmail();

        const isValid = emailError.style.display === 'none' && confirmEmailError.style.display === 'none';

        if (isValid) {
            alert('Subscribed successfully!');
            modal.style.display = 'none';
        } else {
            alert('Please ensure the email fields are filled correctly.');
        }
    });
});
