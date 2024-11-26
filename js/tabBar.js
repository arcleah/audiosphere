/**
 * Sets up click event listeners for tab bar navigation buttons to highlight the active tab.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'nav-button'
    const tabButtons = document.querySelectorAll('.nav-button');
    
    // Iterate over each tab button
    tabButtons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons to reset their state
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button to highlight it
            this.classList.add('active');
        });
    });
});