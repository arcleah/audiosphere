import React, { useState } from 'react';

const CreateSelectSong = ({ onSongSelect, onSearchQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'baby') {
      onSongSelect('Baby by Justin Bieber'); // Example of song selection
      setShowPopup(false); // Hide popup if the correct song is selected
    } else {
      setShowPopup(true); // Show popup if the input is not "Baby"
    }
    onSearchQueryChange(searchQuery); // Update parent with the current search query
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchQueryChange(e.target.value); // Update parent with current input
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup
  };

  const handleOverlayClick = (e) => {
    // Close the popup if the overlay is clicked
    if (e.target.classList.contains('overlay')) {
      handlePopupClose();
    }
  };

  return (
    <div className="relative">
      {/* Main container */}
      <div className="absolute left-[500px] top-[270px] w-[732px] h-[140px] rounded-[25px] bg-[#2F2C50]">
        {/* Header section */}
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          <h2 className="text-[#E2BBE9] text-xl font-bold absolute left-1/2 transform -translate-x-1/2">Create a post</h2>
          <div className="w-[30px]"></div>
        </div>
        
        {/* Search bar container */}
        <form onSubmit={handleSearch} className="absolute top-[75px] left-[252px] w-[223px] h-[47px] flex items-center justify-center relative">
          <img
            src="/assets/icons/search-svgrepo-com copy.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for a song"
            value={searchQuery}
            onChange={handleInputChange} // Handle input change
            className="w-full h-full rounded-[200px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-11 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
          />
        </form>

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
              <button 
                  onClick={handlePopupClose} 
                  className="border border-[#2F2C50] text-[#2F2C50] w-[20px] h-[20px] mr-3 mb-14 rounded-[25px] text-[7px] font-bold flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  X
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateSelectSong;