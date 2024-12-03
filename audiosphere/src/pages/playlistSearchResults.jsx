import React, { useState } from 'react';

const PlaylistSearchResults = ({ onBack, searchQuery, setSearchQuery, onAddSong, setCurrentScreen, addSongToPlaylist, currentPlaylistName, setCurrentPlaylistName, onSavePlaylist }) => {
    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
    const [isEditing, setIsEditing] = useState(false); // State for editing mode
    const [playlistName, setPlaylistName] = useState(currentPlaylistName); // Local state for playlist name

// Dummy data for demonstration purposes
const songs = [
    { id: 1, title: 'Baby', artist: 'Justin Bieber', cover: '/assets/images/baby bieber.jpeg', duration: '3:34' },
    { id: 2, title: 'Baby', artist: 'Summer Walker', cover: '/assets/images/summer baby.jpeg', duration: '1:28'},
    { id: 3, title: 'Baby', artist: 'Madison Beer', cover: '/assets/images/madison beer baby.png', duration: '3:27' },
    { id: 4, title: 'Baby', artist: 'Brandy', cover: '/assets/images/brandy baby.jpeg', duration: '5:13'},
    { id: 5, title: 'Taste', artist: 'Sabrina Carpenter', cover:'/assets/images/taste sabrina.jpeg', duration:'2:37'},
    { id: 6, title: 'Taste', artist: 'Snoh Aalegra', cover:'/assets/images/taste snoh.jpeg', duration:'2:17'},
    { id: 7, title: 'Taste (feat. Offset)', artist: 'Tyga, Offset', cover:'/assets/images/Taste tyga.png', duration:'3:52'},
    { id: 8, title: 'LOVE', artist: 'Jhene Aiko', cover:'/assets/images/love jhene.png', duration:'2:36'},
    { id: 9, title: 'love.', artist: 'wave to earth', cover:'/assets/images/love wte.jpeg', duration:'5:07'},
    { id: 10, title: 'Love', artist: 'Keyshia Cole', cover:'/assets/images/love keyshia.jpeg', duration:'4:15'},
];

// Filter songs based on search query
const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update local state with new input value
};

const handleClear = () => {
    setSearchQuery(''); // Clear search input
    setCurrentScreen('searchSong'); // Navigate back to search song screen
};

const handleAddClick = (song) => {
    // Directly add the selected song to the playlist
    addSongToPlaylist(song); // Add the selected song to the playlist
};

const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
    setPlaylistName(currentPlaylistName); // Set current name in input field
};

const handleSaveClick = () => {
    setIsEditing(false); // Disable editing mode
    setCurrentPlaylistName(playlistName); // Save changes to parent state
};

return(
<div className="relative">
            <div className="absolute left-[350px] top-[40px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px] overflow-hidden">
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
                    className="absolute left-[330px] top-[114px] p-2 ml-[28px] rounded-full bg-[#2F2C50] flex items-center justify-center"
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

                {/*Main save button*/}
                <button 
                    onClick={onSavePlaylist}
                    className="absolute right-4 top-4 w-[60px] h-[30px] rounded-full bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                >Save</button>
            </div>
        </div>

      {/* Search box styled like a button */}
      <div className="absolute top-[282px] absolute left-[370px] left-0 p-4 opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110">
      <div className="relative w-full">
              <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
                  <div className="flex items-center bg-[#E2BBE9] rounded-[80px] p-4 w-[980px] h-[59px]">
                      <div className="w-[119px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] flex items-center justify-center ml-5">
                          <img src="/assets/icons/search-svgrepo-com copy.svg" alt="Search song" className="w-10 h-10" />
                      </div>
                      <input 
                          type="text" 
                          placeholder="Search for a song to add..."
                          value={searchQuery}
                          onChange={handleInputChange} // Handle input change
                          className="w-full h-full rounded-[200px] bg-[#E2BBE9] text-[#2F2C50] text-[20px] placeholder:text-[20px] pl-5 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
                      />
                      <button 
                          type="button"
                          onClick={handleClear} 
                          className="text-[#2F2C50] w-[75px] h-[30px] rounded-full text-[18px] flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                      >
                          Clear
                      </button>
                  </div>
              </form>
          </div>
      </div>

{/* Displaying filtered songs */}
<div className="absolute top-[390px] left-[370px] overflow-y-auto max-h-[260px] p-4">
                  {filteredSongs.length > 0 ? (
                      filteredSongs.map((song) => (
                          <div key={song.id} className="relative mb-12 w-full">
                              <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[980px] h-[59px] mb-12 cusor-pointer">
                                  <img src={song.cover} alt={`${song.title} Cover`} className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-5" />
                                  <div className="ml-4 flex-grow flex">
                                      <span className="text-[#2F2C50] font-medium w-1/3">{song.title}</span>
                                      <span className="text-[#2F2C50] w-1/3" title={song.artist}>
                                          {song.artist.length > 20 ? `${song.artist.substring(0, 20)}...` : song.artist}
                                      </span>
                                      <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
                                  </div>
                                  {/* Circle Play Button */}
                                  <button className="ml-auto cursor-pointer" onClick={() => console.log(`Playing ${song.title}`)}>
                                      <img src="/assets/icons/circle-play-svgrepo-com copy.svg" alt="Play" className="w-10 h-10 mr-[12px]" />
                                  </button>
                                  {/* Circle Plus Button */}
                                  <button 
                                      className="ml-auto cursor-pointer" 
                                      onClick={(e) => {
                                          e.stopPropagation(); // Prevent triggering other click handlers
                                          addSongToPlaylist(song); // Call function to add song
                                      }}
                                  >
                                      <img 
                                          src="/assets/icons/circle plus icon.svg" 
                                          alt="Add" 
                                          className="w-10 h-10" 
                                      />
                                  </button>
                              </div>
                          </div>
                      ))
                  ) : (
                      <p className="text-[#2F2C50]" >Please enter a song title to see results.</p> // Message when no results found
                  )}
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
              <div className="absolute top-[383px] absolute left-[900px] transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-5 pt-2 pb-2 w-[500px] h-auto focus:outline-none flex justify-between items-center z-50">
                <div className="flex flex-col items-start justify-center text-center">
                <p className="text-[#2F2C50] font-bold ml-[160px]">Great choice!</p>
                <p className="text-[#2F2C50]">Unfortunately, this song is currently not available to add to a playlist.</p>
                </div>
                <button 
                  onClick={handlePopupClose} 
                  className="border border-[#2F2C50] text-[#2F2C50] w-[20px] h-[20px] mr-3 ml- 3 mb-14 rounded-full text-[12px] font-bold flex items-center justify-center relative hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  X
                </button>
              </div>
            </>
          )}
      </div>
    );
};

export default PlaylistSearchResults;