import React, { useState } from 'react';

const ExistingPlaylistPage = ({ playlist, onBack, onRemoveSong, setCurrentPlaylistName, onAddSong }) => {
    const [playlistName, setPlaylistName] = useState(playlist.name); // Set initial name from the playlist prop
    const [isEditing, setIsEditing] = useState(false); // State for editing mode
    const [sortBy, setSortBy] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [isSearching, setIsSearching] = useState(false); // State for searching mode
    const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
    const [showConfirmRemovePopup, setShowConfirmRemovePopup] = useState(false); // For remove confirmation
    const [songToRemove, setSongToRemove] = useState(null); // Store song to remove

    // Handle edit button click
    const handleEditClick = () => {
        setIsEditing(true); // Enable editing mode
        setPlaylistName(playlist.name); // Set current name in input field
    };
    
    // Handle save button click
    const handleSaveClick = () => {
        setIsEditing(false); // Disable editing mode
        setCurrentPlaylistName(playlistName); // Save changes to parent state
    };

    // Handle sort change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Function to handle Add Song button click
    const handleAddSongClick = () => {
        setShowPopup(true); // Show the popup when the button is clicked
    };

    // Function to close the popup
    const closePopup = () => {
        setShowPopup(false); // Hide the popup
    };

    // Filter songs based on search query
    const filteredSongs = playlist.songs.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort songs based on selected criteria
    const sortedSongs = [...filteredSongs].sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'artist':
                return a.artist.localeCompare(b.artist);
            case 'duration':
                const aDuration = a.duration.split(':').map(Number);
                const bDuration = b.duration.split(':').map(Number);
                return (aDuration[0] * 60 + aDuration[1]) - (bDuration[0] * 60 + bDuration[1]);
            case 'added':
                return a.instanceId - b.instanceId; // Assuming instanceId is used for order of addition
            default:
                return 0; // No sorting
        }
    });

    // Function to calculate total duration of songs in the playlist
    const calculateTotalDuration = () => {
        let totalSeconds = playlist.songs.reduce((total, song) => {
            const [minutes, seconds] = song.duration.split(':').map(Number);
            return total + (minutes * 60 + seconds);
        }, 0);

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return { minutes, seconds };
    };

    const { minutes, seconds } = calculateTotalDuration();

    // Function to open confirmation popup for removing a song
    const openConfirmRemovePopup = (song) => {
        setSongToRemove(song); // Set the song to be removed
        setShowConfirmRemovePopup(true); // Show confirmation popup
    };

    // Function to confirm removal of a song
    const confirmRemoveSong = () => {
        if (songToRemove) {
            onRemoveSong(songToRemove); // Call the remove function with the selected song
            setShowConfirmRemovePopup(false); // Close confirmation popup
        }
    };

    // Function to close confirmation popup
    const closeConfirmRemovePopup = () => {
        setShowConfirmRemovePopup(false); // Hide confirmation popup
        setSongToRemove(null); // Clear selected song
    };

    return (
        <div className="relative">
            <div className="absolute left-[350px] top-[40px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[200px] bg-[#19182D] rounded-t-[25px]">
                    <button 
                        onClick={onBack} 
                        className="absolute top-4 left-4 w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                    >
                        <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
                    </button>

                    {/* Playlist Cover */}
                    <div className="absolute top-[25px] left-[110px] w-[150px] h-[150px] rounded-full bg-[#9B86BD] overflow-hidden flex items-center justify-center">
                        <img src="/assets/icons/music-svgrepo-com.svg" alt="Playlist Cover" className="w-20 h-20" />
                    </div>

                    {/* Playlist Name Section */}
                    <div className="absolute left-[280px] top-[45px] text-[40px] font-bold text-[#E2BBE9]">
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
                </div>

                {/* Playlist Info in Header */}
                <div className="absolute left-[285px] top-[165px] text-[#E2BBE9]">
                    {playlist.songs.length} songs | {minutes} min {seconds} sec 
                </div>

                {/* Sorting Dropdown */}
                <div className="flex items-center ml-4 mt-4">
                    <select value={sortBy} onChange={handleSortChange} className="absolute left-[280px] top-[165px] h-[25px] rounded-full bg-[#2F2C50] text-[#E2BBE9] text-[14px] placeholder:text-[#E2BBE9] mb-2 pl-2 opacity-85 absolute ml-[190px]">
                        <option value="">Sort By</option>
                        <option value="title">Title: A-Z</option>
                        <option value="artist">Artist: A-Z</option>
                        <option value="duration">Duration</option>
                        <option value="added">Order Added</option>
                    </select>

                    <h1 className="absolute left-[590px] top-[165px] text-[55px] text-[16px] text-[#E2BBE9]">|</h1>

                    {/* Searching Functionality */}
                    <div className="absolute top-[143px] left-[560px] flex items-center justify-center relative">
                        {!isSearching ? (
                            <button 
                                onClick={() => setIsSearching(true)} 
                                className="p-2 ml-[28px] mb-2 mt-1 rounded-full bg-[#2F2C50] opacity-85 flex items-center"
                            >
                                <img src="/assets/icons/search-svgrepo-com copy 2.svg" alt="Search" className="w-3 h-3" />
                            </button>
                        ) : (
                            <>
                                <input 
                                    type="text" 
                                    placeholder="Search for a song..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-[180px] h-[25px] rounded-full bg-[#2F2C50] text-[#E2BBE9] text-[14px]
                               placeholder:text-[#E2BBE9]
                               pl-8 mb-6  opacity-85 absolute ml-[190px]"
                                    style={{ outline: 'none' }} // Inline style to remove outline
                                />
                                <button 
                                    onClick={() => {
                                        setIsSearching(false);
                                        setSearchQuery('');
                                    }}
                                    className="ml-10 mb-4 p-3 bg-transparent text-[#9B86BD] text-[12px]
                                            flex items-center justify-center rounded-full opacity-85 transition duration-300 ease-in-out hover:filter hover:brightness-300"
                                >
                                    <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-5 h-5 -ml-[2.5px]" />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/*header with titles*/}
                <div className="absolute top-[200px] left-0 w-full h-[28px] bg-[#2F2C50] z-10 flex items-center px-4">
                    <div className="w-[97px]" />
                    <div className="ml-20 mt-4 flex-grow flex">
                    <span className="text-[#E2BBE9]  font-medium w-[245px]">Title</span>
                    <span className="text-[#E2BBE9]  font-medium w-[270px]">Artist</span>
                    <span className="text-[#E2BBE9]  font-medium w-1/3">Time</span>
                    </div>
                    
                </div>

                
                {/* Songs List */}
                <div className="absolute top-[240px] left-0 right-0 bottom-0 overflow-y-auto max-h-[350px] pb-[20px]">
                <div className="p-4 ml-5">
                    {sortedSongs.map((song) => (
                        <div key={song.instanceId} className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[980px] h-[59px] mb-12">
                            <img src={song.cover} alt={`${song.title} Cover`} className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px]" />
                            <div className="ml-4 flex-grow flex">
                                <span className="text-[#2F2C50] font-medium  ml-[10px] w-[240px]">{song.title}</span>
                                <span className="text-[#2F2C50] w-[280px]">{song.artist}</span>
                                <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
                                
                        </div>
                        <button className="ml-auto cursor-pointer">
                            <img src="/assets/icons/circle-play-svgrepo-com copy.svg" alt="Play" className="w-10 h-10 mr-[12px]" />
                        </button>
                        <button onClick={() => openConfirmRemovePopup(song)} className="ml-auto">
                                <img src="/assets/icons/circle-minus-svgrepo-com.svg" alt="Remove" className="w-10 h-10" />
                            </button>
                        </div>
                    ))}
                </div>   
                {/* Add a song button */}
                    <button 
                        className="ml-9 mr-8 flex items-center bg-[#E2BBE9] rounded-full p-4 w-[980px] mb-2 h-[59px] opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110"
                        onClick={handleAddSongClick} // Call this function when clicked
                        >
                        <div className="relative w-[97px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] ml-[20px] flex items-center justify-center" >
                            <img src="/assets/icons/plus-large-svgrepo-com copy.svg" alt="Add Song" className="w-10 h-10" />
                        </div>
                        <h1 className="ml-5 text-[20px] text-[#2F2C50]" >Add a song</h1>
                    </button>

            </div>

            {/* Popup for unavailable functionality */}
            {showPopup && (
            <>
                {/* Backdrop Overlay */}
                <div 
                    className="fixed inset-0 bg-black opacity-60 backdrop-blur-md z-40 overlay" 
                    onClick={closePopup} 
                ></div>
                {/* Popup */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-5 pt-2 pb-2 w-[500px] h-[120px] focus:outline-none flex justify-between items-center z-50">
                    <div className="flex flex-col items-start justify-center text-center">
                    <p className="text-[#2F2C50] font-bold ml-[160px]">We're sorry!</p>
                    <p className="text-[#2F2C50]">Unfortunately, this function is not yet available for existing playlists.</p>
                    </div>
                    <button 
                    onClick={closePopup} 
                    className="border border-[#2F2C50] text-[#2F2C50] w-[20px] h-[20px] mr-3 mb-20 rounded-[25px] text-[7px] font-bold flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                    >
                    X
                    </button>
                </div>

            </>
              )}

            {/* Confirmation Popup for Removing Song */}
            {showConfirmRemovePopup && (
                <>
                    {/* Backdrop Overlay */}
                    <div 
                        className="fixed inset-0 bg-black opacity-60 backdrop-blur-md z-40 overlay" 
                        onClick={closeConfirmRemovePopup} 
                    ></div>
                    
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="absolute left-[875px] top-[355px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg p-6 w-[400px] min-h-[175px] max-h-[250px] focus:outline-none flex flex-col items-center justify-between">

                        <h3 className="text-[#2F2C50] font-bold text-xl mb-2">Remove song?</h3>
                        <p className="text-center mb-4 overflow-y-auto max-h-[100px]">
                            Are you sure you want to remove "{songToRemove?.title}" from this playlist?</p>
                            <div className="flex justify-center space-x-16">
                            <button 
                                onClick={confirmRemoveSong}
                                className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                            >
                                Remove
                            </button>
                            <button 
                                onClick={closeConfirmRemovePopup}
                                className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                        </div>
                    </div>
                </>
            )}
        </div>

    </div>
    );
};

export default ExistingPlaylistPage;