import React, { useState, useRef, useEffect } from 'react';

// Component for searching and selecting songs
const CreateSearchResults = ({ selectedSong, searchQuery, onBack, onSearchQueryChange, onSelectSong }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup
  const [playingStatus, setPlayingStatus] = useState({}); // State to track which song is currently playing
  const audioRef = useRef(null); // Ref to hold the audio element

  // List of song options
  const songOptions = [
    { id: 1, title: 'Baby', artist: 'Summer Walker', cover: '/assets/images/summer baby.jpeg', duration: '1:28', audioSrc: '/assets/audio/baby summer walker.m4a' },
    { id: 2, title: 'Baby', artist: 'Justin Bieber', cover: '/assets/images/baby bieber.jpeg', duration: '3:34', audioSrc: '/assets/audio/baby justin bieber.m4a' },
    { id: 3, title: 'Baby', artist: 'Madison Beer', cover: '/assets/images/madison beer baby.png', duration: '3:27', audioSrc: '/assets/audio/baby madison beer.m4a' },
    { id: 4, title: 'Baby', artist: 'Brandy', cover: '/assets/images/brandy baby.jpeg', duration: '5:13', audioSrc: '/assets/audio/baby brandy.m4a' },
  ];

  // Function to stop and reset the audio playback
  const stopAndResetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio if it's playing
      audioRef.current.currentTime = 0; // Reset the playback time to the start
    }
    setPlayingStatus({}); // Clear the playing status
  };

  // Effect to handle clicks outside of the search results container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-results-container')) {
        stopAndResetAudio(); // Stop audio if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside); // Add event listener for clicks

    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup event listener on unmount
    };
  }, []);

  // Function to handle when a song is clicked
  const handleSongClick = (song) => {
    if (song.artist.toLowerCase() === 'justin bieber') {
      stopAndResetAudio(); // Stop audio before navigating
      onSelectSong(song); // Trigger song selection callback
      setShowPopup(false); // Hide popup if Justin Bieber is selected
    } else {
      setShowPopup(true); // Show popup for other artists
    }
  };

  // Function to handle play button click for a song
  const handlePlayClick = (song, e) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    
    if (playingStatus[song.id]) {
      audioRef.current.pause(); // Pause if currently playing this song
      audioRef.current.currentTime = 0; // Reset playback time
      setPlayingStatus(prevStatus => ({ ...prevStatus, [song.id]: false })); // Update playing status
    } else {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause any currently playing audio
        audioRef.current.currentTime = 0; // Reset time for currently playing audio
      }
      audioRef.current = new Audio(song.audioSrc); // Create a new Audio object for the selected song
      audioRef.current.play(); // Play the selected song
      
      audioRef.current.onended = () => {
        setPlayingStatus(prevStatus => ({ ...prevStatus, [song.id]: false })); // Reset status when playback ends
      };
      
      setPlayingStatus(prevStatus => {
        const newStatus = { ...prevStatus };
        Object.keys(newStatus).forEach(key => newStatus[key] = false); // Reset all statuses to false
        newStatus[song.id] = true; // Set the current song's status to true (playing)
        return newStatus;
      });
    }
  };

  // Function to handle search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (searchQuery.toLowerCase() === 'baby') {
      onSelectSong('Baby by Justin Bieber'); // Select Justin Bieber's song if query matches
      setShowPopup(false); // Hide popup on successful selection
    } else {
      setShowPopup(true); // Show popup for invalid search queries
    }
    onSearchQueryChange(searchQuery); // Update search query in parent component
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup when called
  };

  const handleOverlayClick = (e) => {
    // Close the popup if the overlay is clicked
    if (e.target.classList.contains('overlay')) {
      handlePopupClose();
    }
  };

  return (
    <div className="search-results-container relative">
      <div className="absolute left-[500px] top-[100px] w-[732px] h-[474px] rounded-[25px] bg-[#2F2C50]">
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          <button 
            onClick={() => {
              stopAndResetAudio(); // Stop and reset audio when going back
              onBack(); // Trigger back navigation callback
            }} 
            className="w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125">
            <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
          </button>
          <h2 className="text-[#E2BBE9] text-xl font-bold absolute left-1/2 transform -translate-x-1/2 ml-[2px]">Select a song</h2>
          <div className="w-[30px]"></div>
        </div>

        <form onSubmit={handleSearch} className="absolute top-[80px] left-[252px] w-[223px] h-[47px] flex items-center justify-center relative">
          <img src="/assets/icons/search-svgrepo-com copy.svg" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
          <input type="text" placeholder="Search for a song" value={searchQuery} onChange={(e) => onSearchQueryChange(e.target.value)} className="w-full h-full rounded-[200px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-11 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55" />
        </form>

        <div className="mt-[100px] ml-[8px] overflow-y-auto max-h-[300px] p-4">
          {songOptions.map((song) => (
            <div key={song.id} className="relative mb-12 w-full">
              <div 
                className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[678px] h-[59px] cursor-pointer" 
                onClick={() => handleSongClick(song)}
              >
                <img 
                  src={song.cover} 
                  alt={`${song.title} Cover`} 
                  className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px]" 
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg text-[#2F2C50] font-medium">{song.title}</h3>
                  <p className="text-[#2F2C50] font-light">{song.artist} | {song.duration}</p>
                </div>
                <button 
                  onClick={(e) => handlePlayClick(song, e)}
                  className="ml-auto cursor-pointer"
                >
                  <img 
                    src={playingStatus[song.id] ? "/assets/icons/circle-stop-svgrepo-com.svg" : "/assets/icons/circle-play-svgrepo-com copy.svg"} 
                    alt={playingStatus[song.id] ? "Stop" : "Play"} 
                    className="w-10 h-10" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup for invalid input */}
        {showPopup && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-black opacity-60 backdrop-blur-md z-40 overlay" 
              onClick={handleOverlayClick} 
            ></div>
            {/* Popup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-5 pt-2 pb-2 w-[500px] h-[100px] focus:outline-none flex justify-between items-center z-50">
              <div className="flex flex-col items-start justify-center text-center">
                <p className="text-[#2F2C50] font-bold ml-[160px]">Great choice!</p>
                <p className="text-[#2F2C50]">Unfortunately, this song is currently not available to create a post.</p>
              </div>
              <button onClick={handlePopupClose}>
                <img src="/assets/icons/x icon.svg" alt="Close" className="w-10 h-5 mr-[30px]" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateSearchResults;