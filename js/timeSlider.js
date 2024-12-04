
document.addEventListener('DOMContentLoaded', function() {
    const timeSlider = document.getElementById('timeSlider');
    const currentTimeDisplay = document.getElementById('currentTime');
    const totalTimeDisplay = document.getElementById('totalTime');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

    const totalDuration = 210; // Simulated duration in seconds (3:30)
    totalTimeDisplay.textContent = formatTime(totalDuration);
    timeSlider.max = totalDuration;

    let currentTime = 0;
    let playbackInterval;
    let isPlaying = false;

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            clearInterval(playbackInterval);
            isPlaying = false;
        } else {
            playbackInterval = setInterval(updateSlider, 1000);
            isPlaying = true;
        }
        togglePlayPauseIcon();
    });

    // Rewind functionality
    previousBtn.addEventListener('click', function() {
        resetSlider(); // Reset to 0 when rewind is pressed
    });

    // Forward functionality
    nextBtn.addEventListener('click', function() {
        currentTime = totalDuration; // Set to max duration when forward is pressed
        updateDisplayAndSlider();
        if (isPlaying) {
            clearInterval(playbackInterval); // Stop playback before restarting
            playbackInterval = setInterval(updateSlider, 1000); // Restart playback
        }
    });

    // Update slider when thumb is moved
    timeSlider.addEventListener('input', function() {
        currentTime = parseInt(timeSlider.value, 10);
        updateDisplayAndSlider();
        if (isPlaying) {
            clearInterval(playbackInterval); // Stop playback while adjusting
            playbackInterval = setInterval(updateSlider, 1000); // Restart playback
        }
    });

    function updateSlider() {
        if (currentTime < totalDuration) {
            currentTime++;
            updateDisplayAndSlider();
        } else {
            resetSlider(); // Reset when reaching max duration
        }
    }

    function resetSlider() {
        currentTime = 0;
        updateDisplayAndSlider();
        if (isPlaying) {
            clearInterval(playbackInterval); // Stop playback before restarting
            playbackInterval = setInterval(updateSlider, 1000); // Restart playback
        }
    }

    function updateDisplayAndSlider() {
        timeSlider.value = currentTime;
        currentTimeDisplay.textContent = formatTime(currentTime);
        updateSliderBackground(timeSlider);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function updateSliderBackground(slider) {
        const percentage = (slider.value / slider.max) * 100;
        slider.style.background = `linear-gradient(to right, #f7f7f7 ${percentage}%, #9B86BD ${percentage}%)`;
    }

    function togglePlayPauseIcon() {
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }
});
