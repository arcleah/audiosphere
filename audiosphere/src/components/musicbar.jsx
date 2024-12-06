// MusicBar.js
import React, { useEffect, useState } from 'react';
import '../styles/musicbar.css'; // Import the CSS file for custom styles

const MusicBar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Default volume level
  const [previousVolume, setPreviousVolume] = useState(50); // Store previous volume level
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

    // Hardcoded song information
    const currentSong = {
        title: "Taste",
        artist: "Sabrina Carpenter",
        albumCover: "/assets/images/taste sabrina.jpeg" // Replace with actual path to album cover
      };
  

  useEffect(() => {
    const volumeSlider = document.getElementById('volumeSlider');
    updateVolumeSliderBackground(volumeSlider);

    // Event listener for volume slider input
    const handleVolumeInput = () => {
      const newVolume = volumeSlider.value;
      setVolume(newVolume);
      if (newVolume == 0) {
        mute(); // Mute if slider is moved to 0
      } else {
        if (isMuted) {
          unmute(); // Unmute if previously muted
        }
        updateVolumeSliderBackground(volumeSlider);
      }
    };

    volumeSlider.addEventListener('input', handleVolumeInput);

    return () => {
      // Cleanup event listeners on component unmount
      volumeSlider.removeEventListener('input', handleVolumeInput);
    };
  }, [isMuted]);

  const mute = () => {
    if (!isMuted) {
      setPreviousVolume(volume); // Save current volume before muting
      setVolume(0); // Mute: Set volume to 0
    }
    setIsMuted(true); // Set muted state to true
    // Update audio element's volume if you have one
    // audioRef.current.volume = 0;
  };

  const unmute = () => {
    setIsMuted(false); // Set muted state to false
    setVolume(previousVolume); // Restore previous volume level
    // Update audio element's volume if you have one
    // audioRef.current.volume = previousVolume / 100;
    updateVolumeSliderBackground(document.getElementById('volumeSlider'));
  };

  const updateVolumeSliderBackground = (slider) => {
    const percentage = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #f7f7f7 ${percentage}%, #9B86BD ${percentage}%)`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    
    // Set isMuted based on new volume
    if (newVolume > 0) {
      setIsMuted(false); // Unmute if volume is greater than 0
    } else {
      setIsMuted(true); // Mute if volume is 0
    }
    
    // Update audio element's volume here as well
    // audioRef.current.volume = newVolume / 100;
    
    updateVolumeSliderBackground(e.target); // Update background on change
  };

  return (
    <div className="music-bar bg-[#2F2C50] h-[120px] fixed bottom-0 left-0 right-0 flex items-center justify-between p-2 z-20">

      {/* Currently Playing Song Display */}
      <div className="w-[500px] flex items-center space-x-2">
        <img src={currentSong.albumCover} alt="Album Cover" className="w-[90px] h-[90px] rounded-full ml-6" />
        <div className="flex flex-col">
          <span className="text-white  font-bold ml-2">{currentSong.title}</span>
          <span className="text-sm ml-2 mt-2 text-[#E2BBE9]">{currentSong.artist}</span>
        </div>
      </div>
      
      <div className="absolute left-[50px] flex flex-col items-center music-controls-container space-y-1">
        <div className="flex space-x-2">
          <button id="shuffleBtn" className={`music-control ${isShuffled ? 'active' : ''}`}>
            <img src="/assets/icons/shuffle-svgrepo-com.svg" alt="Shuffle" className="w-[20px]" />
          </button>
          <button id="previousBtn" className="music-control">
            <img src="/assets/icons/backward-step-svgrepo-com.svg" alt="Previous" className="w-6" />
          </button>
          <button id="playPauseBtn" className="music-control" onClick={() => setIsPlaying(!isPlaying)}>
            <img id="playIcon" src="/assets/icons/circle-play-svgrepo-com.svg" alt="Play" className={`w-10 ${isPlaying ? 'hidden' : 'block'}`} />
            <img id="pauseIcon" src="/assets/icons/circle-pause-svgrepo-com.svg" alt="Pause" className={`w-10 ${isPlaying ? 'block' : 'hidden'}`} />
          </button>
          <button id="nextBtn" className="music-control">
            <img src="/assets/icons/forward-step-svgrepo-com.svg" alt="Forward" className="w-6" />
          </button>
          
          <button id="repeatBtn" className={`music-control ${isRepeating ? 'active' : ''}`}>
            <img src="/assets/icons/repeat-svgrepo-com.svg" alt="Repeat" className="w-[20px]" />
          </button>
        </div>

        {/* Time Slider Container */}
        <div className="time-slider-container flex items-center justify-center pt-2">
          <span id="currentTime">0:00</span>
          <input type="range"
                 id="timeSlider"
                 min="0"
                 max="100"
                 className="mx-2 w-[450px] h-1 rounded-lg bg-gray-300 appearance-none cursor-pointer"/>
          <span id="totalTime">3:00</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="volume-control flex items-center justify-start">
        <button id="volumeBtn" onClick={mute}>
          <img 
            id="volumeIcon" 
            src="/assets/icons/volume-max-svgrepo-com.svg" 
            alt="Volume" 
            className="absolute right-[160px] bottom-[47px]" 
            style={{ display: isMuted ? 'none' : 'block' }} />
          <img 
            id="muteIcon" 
            src="/assets/icons/volume-xmark-svgrepo-com.svg" 
            alt="Mute" 
            className="absolute right-[160px] bottom-[47px]" 
            style={{ display: isMuted ? 'block' : 'none' }} />
        </button>
        <input type="range"
               id="volumeSlider"
               min="0"
               max="100"
               value={volume} // Use value instead of defaultValue
               onChange={handleVolumeChange}
               className={`absolute bottom-[55px] right-[50px] w-[100px] h-[4px] rounded-lg appearance-none cursor-pointer ${isMuted ? 'bg-red-500' : 'bg-gray-300'}`} />
      </div>
    </div>
  );
};

export default MusicBar;