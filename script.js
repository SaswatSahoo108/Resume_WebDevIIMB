// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // Function to apply theme based on toggle state
    const applyTheme = () => {
        if (themeToggle.checked) {
            body.classList.add('light-mode');
            // Optional: Save preference to localStorage
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            // Optional: Save preference to localStorage
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false; // Default to dark if no preference or 'dark'
    }
    applyTheme(); // Apply the initial theme

    // Add event listener for theme changes
    themeToggle.addEventListener('change', applyTheme);


    // --- Navigation Menu ---
    const menuButton = document.getElementById('menuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a'); // Get all links within the menu

    // Function to open the menu
    const openMenu = () => {
        navMenu.classList.add('active');
        // Optional: Add focus management or trap focus within the menu
    };

    // Function to close the menu
    const closeMenu = () => {
        navMenu.classList.remove('active');
        // Optional: Return focus to the menu button if needed
    };

    // Event listener for the menu button (three dots)
    menuButton.addEventListener('click', openMenu);

    // Event listener for the close button inside the menu
    closeMenuButton.addEventListener('click', closeMenu);

    // Event listeners for each link inside the menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Smooth scroll is handled by CSS (scroll-behavior: smooth)
            // We just need to close the menu after clicking a link
            closeMenu();
        });
    });

    // Optional: Close menu if clicking outside of it
    document.addEventListener('click', (event) => {
        // Check if the menu is active and the click was outside the menu and not on the menu button
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            event.target !== menuButton) {
            closeMenu();
        }
    });

     // Optional: Close menu on 'Escape' key press
     document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

}); // End DOMContentLoaded
