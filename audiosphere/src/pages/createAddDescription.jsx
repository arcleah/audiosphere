import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component for adding a description to a selected song
const CreateAddDescription = ({ selectedSong, onBack, origin }) => {
  const [description, setDescription] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false); // State for confirmation popup
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      // Add event listener to reset play status when audio ends
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    // Cleanup function
    return () => {
      if (audioRef.current) {
        // Remove event listener and pause audio on component unmount
        audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
        audioRef.current.pause();
      }
    };
  }, []);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Description for ${selectedSong.title}: ${description}`);
  };

  // Handler for sharing the post
  const handleShare = () => {
    console.log(`Sharing description for ${selectedSong.title}: ${description}`);
  };

  // Handler for play/pause button click
  const handlePlayClick = (e) => {
    e.stopPropagation();
    
    if (isPlaying) {
      // Pause the audio if it's playing
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Create and play the audio if it doesn't exist
      if (!audioRef.current) {
        audioRef.current = new Audio(selectedSong.audioSrc);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Handler for back button click
  const handleBack = () => {
    if (description.trim()) { // Check if description is not empty
      setShowConfirmPopup(true); // Show confirmation popup instead of navigating back immediately
    } else {
      navigateBack(); // Navigate back immediately if description is empty
    }
  };

  const navigateBack = () => {
    if (origin === 'existingPlaylist') {
      // Navigate back to the existing playlist page
      navigate(-1); // This will go back to the previous page in the history
    } else if (origin === 'createSearchResults') {
      // Go back to search results within the Create flow
      onBack();
    } else {
      // Default case: just use onBack
      onBack();
    }
  };

  // Confirm leaving without saving changes
  const confirmLeave = (confirm) => {
    if (confirm) {
      if (audioRef.current) {
        audioRef.current.pause(); // Stop audio playback
      }
      setIsPlaying(false); // Reset play status
      navigateBack(); // Use the navigateBack function
    }
    setShowConfirmPopup(false); // Close the confirmation popup
  };

  const handleOverlayClick = (e) => {
    // Close the popup if the overlay is clicked
    if (e.target.classList.contains('overlay')) {
      confirmLeave(false); // Close without confirming leave
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-[500px] top-[100px] w-[732px] h-[474px] rounded-[25px] bg-[#2F2C50]">
        {/* Header section */}
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          {/* Back button */}
          <button 
            onClick={handleBack} 
            className="w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
          >
            <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
          </button>
          <h2 className="text-[#E2BBE9] text-xl font-bold ml-[50px]">Add a description</h2>
          {/* Share button */}
          <button 
            onClick={handleShare} 
            className="w-[60px] h-[30px] rounded-full bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
          >
            Post
          </button>
        </div>

        <div className="mt-28"></div>

        {/* Song display section */}
        <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[678px] h-[59px] mx-auto mt-32 mr-6">
          <img 
            src={selectedSong.cover} 
            alt={`${selectedSong.title} Cover`} 
            className="w-[150px] h-[150px] rounded-full border-2 border-[#2F2C50] ml-4" 
          />
          <div className="ml-4">
            <h3 className="text-lg text-[#2F2C50] font-medium">{selectedSong.title}</h3>
            <p className="text-[#2F2C50] font-light">{selectedSong.artist} | {selectedSong.duration}</p>
          </div>
          {/* Play/Pause button */}
          <button 
            onClick={handlePlayClick}
            className="ml-auto cursor-pointer"
          >
            <img 
              src={isPlaying ? "/assets/icons/circle-stop-svgrepo-com.svg" : "/assets/icons/circle-play-svgrepo-com copy.svg"} 
              alt={isPlaying ? "Stop" : "Play"} 
              className="w-10 h-10" 
            />
          </button>
        </div>  

        {/* Description input form */}
        <form onSubmit={handleSubmit} className="p-4">
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your thoughts..."
            className="w-[678px] h-[190px] p-4 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] mt-12 ml-4 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55 resize-none"
          />
        </form>

        {/* Confirmation Popup */}
        {showConfirmPopup && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="fixed inset-0 bg-black opacity-50 backdrop-blur-md z-40 overlay" 
              onClick={handleOverlayClick} 
            ></div>
            {/* Popup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-4 w-[350px] h-[150px] focus:outline-none flex flex-col items-center z-50">
              <h3 className="text-[#2F2C50] font-bold">Discard post?</h3>
              <p>If you leave, your edits won't be saved.</p>
              <div className="flex justify-center mt-4 space-x-16">
                <button 
                  onClick={() => confirmLeave(true)} 
                  className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Discard
                </button>
                <button 
                  onClick={() => confirmLeave(false)} 
                  className="border border-[#2F2C50] text-[#2F2C50] px-3 py-1 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAddDescription;