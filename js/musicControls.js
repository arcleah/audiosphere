/**
 * Sets up click event listeners for the play/pause, shuffle, repeat, forward, and rewind buttons.
 * Toggles between play and pause states for the play/pause button, and updates tooltips accordingly.
 * For shuffle, repeat, forward, and rewind buttons, toggles their active state and updates tooltips.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get the play/pause button and its associated icons
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    
    // Initialize a variable to track the playing state
    let isPlaying = false;

    // Add a click event listener to the play/pause button
    playPauseBtn.addEventListener('click', function() {
        // Toggle the playing state
        isPlaying = !isPlaying;
        if (isPlaying) {
            // If playing, hide the play icon and show the pause icon
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            // Update tooltip to indicate that clicking will pause the music
            playPauseBtn.setAttribute('data-tooltip', 'Pause'); 
        } else {
            // If paused, show the play icon and hide the pause icon
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            // Update tooltip to indicate that clicking will play the music
            playPauseBtn.setAttribute('data-tooltip', 'Play'); 
        }
        // Hide tooltip immediately on click
        playPauseBtn.removeAttribute('data-visible');
    });

    // Get references to shuffle, repeat, rewind, and forward buttons
    const shuffleBtn = document.getElementById('shuffleBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const rewindBtn = document.getElementById('previousBtn');
    const forwardBtn = document.getElementById('nextBtn');

    // Function to handle tooltip visibility with a delay
    function handleTooltip(button) {
        let tooltipTimeout;

        // Show tooltip after a delay when mouse enters the button
        button.addEventListener('mouseenter', function() {
            tooltipTimeout = setTimeout(() => {
                button.setAttribute('data-visible', 'true'); // Show tooltip after 500 milliseconds
            }, 500); // 500 milliseconds (0.5 seconds)
        });

        // Hide tooltip when mouse leaves the button
        button.addEventListener('mouseleave', function() {
            clearTimeout(tooltipTimeout); // Clear timeout if mouse leaves before 0.5 seconds
            button.removeAttribute('data-visible'); // Hide tooltip immediately
        });
        
        // Hide tooltip immediately when clicked
        button.addEventListener('click', function() {
            clearTimeout(tooltipTimeout); // Clear any existing timeout
            button.removeAttribute('data-visible'); // Hide tooltip immediately
        });
    }

    // Apply tooltip handling for all relevant buttons
    handleTooltip(playPauseBtn);
    handleTooltip(shuffleBtn);
    handleTooltip(repeatBtn);
    handleTooltip(previousBtn); 
    handleTooltip(nextBtn);

    // Add a click event listener to the shuffle button
    shuffleBtn.addEventListener('click', function() {
        const isShuffled = shuffleBtn.classList.toggle('active'); // Toggle active state of shuffle button
        shuffleBtn.setAttribute('data-tooltip', isShuffled ? 'Disable shuffle' : 'Shuffle'); // Update tooltip text based on state
        shuffleBtn.removeAttribute('data-visible'); // Hide tooltip immediately on click
    });

    // Add a click event listener to the repeat button
    repeatBtn.addEventListener('click', function() {
        const isRepeating = repeatBtn.classList.toggle('active'); // Toggle active state of repeat button
        repeatBtn.setAttribute('data-tooltip', isRepeating ? 'Disable repeat' : 'Repeat'); // Update tooltip text based on state
        repeatBtn.removeAttribute('data-visible'); // Hide tooltip immediately on click
    });

    // Add a click event listener to the rewind button
    rewindBtn.addEventListener('click', function() {
        // Your logic for rewinding goes here (if any)
        rewindBtn.removeAttribute('data-visible'); // Hide tooltip immediately on click
    });

    // Add a click event listener to the forward button
    forwardBtn.addEventListener('click', function() {
        // Your logic for forwarding goes here (if any)
        forwardBtn.removeAttribute('data-visible'); // Hide tooltip immediately on click
    });
});