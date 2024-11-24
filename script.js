document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    
    const timeSlider = document.getElementById('timeSlider');
    const currentTimeDisplay = document.getElementById('currentTime');
    const totalTimeDisplay = document.getElementById('totalTime');

    let isPlaying = false;
    
    // Example total duration (in seconds)
    const totalDuration = 210; // Replace with actual duration in seconds
    totalTimeDisplay.textContent = formatTime(totalDuration);

    // Update slider max value
    timeSlider.max = totalDuration;

    playPauseBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            // Code to play music goes here
            startTimer(); // Start updating the timer
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            // Code to pause music goes here
            clearInterval(timerInterval); // Stop updating timer
        }
    });

   let timerInterval;

   function startTimer() {
       let currentTime = 0;
       timerInterval = setInterval(() => {
           if (currentTime < totalDuration) {
               currentTime++;
               currentTimeDisplay.textContent = formatTime(currentTime);
               timeSlider.value = currentTime;
           } else {
               clearInterval(timerInterval);
               isPlaying = false;
               playIcon.style.display = 'block';
               pauseIcon.style.display = 'none';
           }
       }, 1000); // Update every second
   }

   function formatTime(seconds) {
       const minutes = Math.floor(seconds / 60);
       const secs = seconds % 60;
       return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
   }

   // Optional: Add event listener to update playback position when slider is changed
   timeSlider.addEventListener('input', function() {
       // Code to seek to this time in your audio player goes here
   });
});
