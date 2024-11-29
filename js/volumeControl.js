
document.addEventListener('DOMContentLoaded', function() {
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    const muteIcon = document.getElementById('muteIcon');
    const volumeSlider = document.getElementById('volumeSlider');

    let isMuted = false;
    let previousVolume = 50; // Default volume level

    // Set initial background for the volume slider
    updateVolumeSliderBackground(volumeSlider);

    // Event listener for volume slider input
    volumeSlider.addEventListener('input', function() {
        if (volumeSlider.value == 0) {
            mute(); // Mute if slider is moved to 0
        } else {
            if (isMuted) {
                unmute(); // Unmute if previously muted
            }
            previousVolume = volumeSlider.value; // Update previous volume
            updateVolumeSliderBackground(volumeSlider);
        }
    });

    // Mute/Unmute functionality
    volumeBtn.addEventListener('click', function() {
        if (isMuted) {
            unmute(); // Restore previous volume level
        } else {
            mute(); // Set slider to 0 when muted
        }
    });

    function mute() {
        isMuted = true;
        previousVolume = volumeSlider.value; // Store current volume before muting
        volumeSlider.value = 0; // Set slider to 0 when muted
        updateVolumeSliderBackground(volumeSlider); // Update color for muted state
        volumeIcon.style.display = 'none'; // Hide volume icon
        muteIcon.style.display = 'block'; // Show mute icon
        volumeBtn.setAttribute('data-tooltip', 'Unmute'); // Update tooltip
    }

    function unmute() {
        isMuted = false;
        if (previousVolume == 0) {
            previousVolume = 100; // Set to full volume if it was muted at 0
        }
        volumeSlider.value = previousVolume; // Restore previous volume level
        updateVolumeSliderBackground(volumeSlider); // Update color for unmuted state
        volumeIcon.style.display = 'block'; // Show volume icon
        muteIcon.style.display = 'none'; // Hide mute icon
        volumeBtn.setAttribute('data-tooltip', 'Mute'); // Update tooltip
    }

    function updateVolumeSliderBackground(slider) {
        const percentage = (slider.value / slider.max) * 100;
        slider.style.background = `linear-gradient(to right, #f7f7f7 ${percentage}%, #9B86BD ${percentage}%)`;
    }

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
        handleTooltip(volumeBtn);
});
