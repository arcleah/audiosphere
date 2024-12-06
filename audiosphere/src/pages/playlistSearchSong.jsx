import React, { useState } from 'react';

const PlaylistSearchSong = ({ onBack, addedSongs, onSearchQueryChange, onAddSong, setCurrentScreen, currentPlaylistName, setCurrentPlaylistName, onSavePlaylist }) => {
    const [inputValue, setInputValue] = useState(''); // Local state for input
    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
    const [isEditing, setIsEditing] = useState(false); // State for editing mode
    const [playlistName, setPlaylistName] = useState(currentPlaylistName); // Local state for playlist name

    // Function to calculate total duration
    const calculateTotalDuration = () => {
      let totalSeconds = addedSongs.reduce((total, song) => {
          const [minutes, seconds] = song.duration.split(':').map(Number);
          return total + (minutes * 60 + seconds);
      }, 0);

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      return { minutes, seconds };
    };

    const { minutes, seconds } = calculateTotalDuration();


    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update local input value
    };

    const handleSearch = (e) => {
        e.preventDefault();
        
        // Define valid songs in an array
        const validSongs = ['baby', 'taste', 'love']; // Add more valid song titles as needed

        // Check if the input matches any valid song title (case insensitive)
        if (validSongs.includes(inputValue.toLowerCase())) {
            console.log(`Song selected: ${inputValue}`); // Replace with actual song selection logic
            onSearchQueryChange(inputValue); // Update parent with current input
            setCurrentScreen('searchResults'); // Navigate to search results screen
        } else {
            setShowPopup(true); // Show popup if the input does not match any valid songs
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false); // Close the popup
        setInputValue(''); // Optionally clear input when closing the popup
    };
    
    const handleOverlayClick = (e) => {
        // Close the popup if the overlay is clicked
        if (e.target.classList.contains('overlay')) {
            handlePopupClose();
        }
    };

    const handleClose = () => {
        setCurrentScreen('newPlaylist'); // Navigate back to the new playlist screen
    };
      
    const handleEditClick = () => {
        setIsEditing(true); // Enable editing mode
        setPlaylistName(currentPlaylistName); // Set current name in input field
    };

    const handleSaveClick = () => {
        setIsEditing(false); // Disable editing mode
        setCurrentPlaylistName(playlistName); // Save changes to parent state
    };

    return (
<div className="relative">
<div className="absolute left-[85px] top-[10px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
{/* Header section */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-[#19182D] rounded-t-[25px]">
                <button 
                    onClick={onBack} 
                    className="absolute top-4 left-4 w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                >
                    <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
                </button>

                {/* Add Song Button */}
                                <button 
                    onClick={onAddSong} 
                    className="absolute left-[940px] top-[160px] p-2 ml-[28px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                >
                    <img src="/assets/icons/plus-large-svgrepo-com.svg" alt="Add Song" className="w-4 h-4" />
                </button>
                    
                {/* Playlist cover */}
                <div className="absolute top-[25px] left-[110px] w-[150px] h-[150px] rounded-full bg-[#9B86BD] overflow-hidden flex items-center justify-center">
                    {/* Conditionally render the icon based on editing state */}
                    <img 
                        src={isEditing ? "/assets/icons/plus-large-svgrepo-com copy.svg" : "/assets/icons/music-svgrepo-com.svg"} 
                        alt="Add Song" 
                        style={{ width: '90px', height: '90px' }} // Set desired size here
                    />
                </div>

                {/* Playlist Name Section */}
                <div className="absolute left-[280px] top-[45px] text-[40px] font-bold text-white">
                    {isEditing ? (
                        <input 
                            type="text"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                            className="pl-2 bg-transparent border border-[#E2BBE9] text-[40px] rounded-[25px]"
                        />
                    ) : (
                        <h1 className="pl-2 pb-1 text-[40px] font-bold">{playlistName}</h1>
                    )}
                </div>

                {/* Edit button */}
                {isEditing ? (
                    <button onClick={handleSaveClick} className="absolute left-[285px] top-[115px] w-[60px] h-[30px] rounded-full 
                    bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out 
                    hover:filter hover:brightness-125">Save</button>
                ) : (
                    <button onClick={handleEditClick} className="absolute left-[285px] top-[115px] w-[60px] h-[30px] rounded-full 
                    bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out 
                    hover:filter hover:brightness-125">Edit</button>
                )}

                {/*Main save button*/}
                <button 
                    onClick={onSavePlaylist}
                    className="absolute right-4 top-4 w-[60px] h-[30px] rounded-full bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                >Save</button>

                {/* Playlist info in header */}
                {addedSongs.length > 0 && (
                  <div className="absolute left-[285px] top-[165px] text-white">
                      {addedSongs.length} songs • {minutes} min {seconds} sec
                  </div>
                )}

                {addedSongs.length === 0 && (
                    <h1 className="absolute top-[165px] left-[285px] text-[16px] text-white opacity-60">
                        This playlist is currently empty...
                    </h1>
                )}  


            </div>
        </div>

        {/* Search box styled like a button */}
        <div className="absolute top-[242px] absolute left-[105px] left-0 p-4 opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110">
          <div className="relative w-full">
            <form onSubmit={handleSearch}> {/* Use form to handle submit */}
              <div 
                className="flex items-center bg-[#E2BBE9] rounded-[80px] p-4 w-[980px] h-[59px]"
              >
                <div className="w-[120px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] flex items-center justify-center ml-5">
                  <img 
                      src="/assets/icons/search-svgrepo-com copy.svg" 
                      alt="Search song"
                      className="w-10 h-10" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for a song to add..."
                  value={inputValue}
                  onChange={handleInputChange} // Handle input change
                  className="w-full h-full rounded-[200px] bg-[#E2BBE9] text-[#2F2C50] text-[20px] placeholder:text-[20px] pl-5 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
                />
                <button 
                  type="button" // Prevent form submission
                  onClick={handleClose} 
                  className="text-[#2F2C50] w-[90px] h-[30px] rounded-full text-[18px] flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
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
              <div className="absolute top-[300px] absolute left-[600px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-5 pt-2 pb-2 w-[500px] h-auto focus:outline-none flex justify-between items-center z-50">
                <div className="flex flex-col items-start justify-center text-center">
                <p className="text-[#2F2C50] font-bold ml-[160px]">We're sorry!</p>
                <p className="text-[#2F2C50]">Unfortunately, this song is currently not available to add to a playlist.</p>
                </div>
                <button 
                  onClick={handlePopupClose} 
                  className="border border-[#2F2C50] text-[#2F2C50] w-[20px] h-[20px] mr-3 ml-3 mb-14 rounded-full text-[12px] font-bold flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  X
                </button>
              </div>
            </>
          )}
      </div>
    );
};

export default PlaylistSearchSong;