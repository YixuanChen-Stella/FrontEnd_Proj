"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    hamburgerIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navMenu.classList.toggle('active');
        }
    });
});