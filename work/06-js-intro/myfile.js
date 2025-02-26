"use strict";

(function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function toggleMenu() {
        dropdownMenu.classList.toggle('open');
        const isExpanded = dropdownMenu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }

    menuToggle.addEventListener('click', toggleMenu);
   
    document.addEventListener('click', function(event) {
        const isClickInside = menuToggle.contains(event.target) || dropdownMenu.contains(event.target);
        if (!isClickInside && dropdownMenu.classList.contains('open')) {
            toggleMenu();
        }
    });

    menuToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
})();