import React, { useState } from 'react';

const PlaylistNewPlaylist = ({ onBack, addedSongs, onAddSong, onRemoveSong, currentPlaylistName, setCurrentPlaylistName, onSavePlaylist }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [sortBy, setSortBy] = useState('');
    const [playlistName, setPlaylistName] = useState(currentPlaylistName); // Editable playlist name
    const [isEditing, setIsEditing] = useState(false); // State for editing mode
    const [playingSongId, setPlayingSongId] = useState(null); // State to track currently playing song

    const togglePlayPause = (songId) => {
        if (playingSongId === songId) {
            // If the same song is clicked, pause it
            setPlayingSongId(null);
        } else {
            // Play the new song
            setPlayingSongId(songId);
        }
    };
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

    // Filter songs based on search query
    const filteredSongs = addedSongs.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filtered songs based on selected criteria
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

    // Handle sort change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log('Sort By:', e.target.value); // Debugging log
    };

    // Handle edit button click
    const handleEditClick = () => {
        setIsEditing(true); // Enable editing mode
        setPlaylistName(currentPlaylistName); // Set current name in input field
    };

    // Handle save button click
    const handleSaveClick = () => {
        setIsEditing(false); // Disable editing mode
        setCurrentPlaylistName(playlistName); // Save changes to parent state
    };

    return (
        <div className="relative">
            <div className="absolute left-[85px] top-[30px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
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

                    
                {/* Playlist info in header */}
                {addedSongs.length > 0 && (
                    <div className="absolute left-[285px] top-[165px] text-[#E2BBE9]">
                        {addedSongs.length} songs | {minutes} min {seconds} sec 
                    </div>
                )}

                {addedSongs.length === 0 && (
                    <h1 className="absolute top-[165px] left-[285px] text-[16px] text-[#E2BBE9] opacity-80">
                        This playlist is currently empty...
                    </h1>
                )}  
            



        {/*searching through playlist stuff*/}
        <div className="flex items-center ml-4">

            {addedSongs.length > 0 && (
                <h1 className="absolute left-[460px] top-[168px] text-[55px] text-sm text-[#E2BBE9]">|</h1>
            )}

            {/* Dropdown menu for sorting */}
            {addedSongs.length > 0 && (
            <select value={sortBy} onChange={handleSortChange} className="absolute left-[280px] top-[165px] h-[25px] rounded-full bg-[#2F2C50] text-[#E2BBE9] text-[14px] placeholder:text-[#E2BBE9] mb-2 pl-2 opacity-85 absolute ml-[190px]">
                <option value="">Sort By</option>
                <option value="title">Title: A-Z</option>
                <option value="artist">Artist: A-Z</option>
                <option value="duration">Duration</option>
                <option value="added">Order Added</option>
            </select>
            )}

            {addedSongs.length > 0 && (
                <h1 className="absolute left-[590px] top-[168px] text-[55px] text-sm text-[#E2BBE9]">|</h1>
            )}

            {/* Search functionality */}
            {addedSongs.length > 0 && (
                <div className="absolute top-[157px] left-[560px] flex items-center justify-center relative">
                {!isSearching ? (
                    <button 
                    onClick={() => setIsSearching(true)} 
                    className="p-2 ml-[28px] mb-2 mt-1 rounded-full bg-[#2F2C50] opacity-85 flex items-center"
                    >
                    <img src="/assets/icons/search-svgrepo-com copy 2.svg" alt="Search" className="w-4 h-4" />
                    </button>
                ) : (
                    <>
                    <input 
                        type="text" 
                        placeholder="Search your playlist..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-[180px] h-[25px] rounded-full bg-[#2F2C50] text-[#E2BBE9] text-[14px]
                                placeholder:text-[#E2BBE9]
                                pl-8 mb-8  opacity-85 absolute ml-[190px]"
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
                    <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-5 h-5 -ml-[2.5px] mb-2" />
                    </button>
                </>
              )}
            </div>
            )}
          </div>
          </div>

          {/* Fixed bar with labels */}
          {addedSongs.length > 0 && (
          <div className="absolute top-[200px] left-0 w-full h-[28px] bg-[#2F2C50] z-10 flex items-center px-4">
            <div className="w-[97px]" />
            <div className="ml-16 mt-6 flex-grow flex">
              <span className="text-[#E2BBE9]  font-medium ml-[10px] w-[220px]">Title</span>
              <span className="text-[#E2BBE9]  font-medium w-[290px]">Artist</span>
              <span className="text-[#E2BBE9]  font-medium w-1/3">Time</span>
            </div>
            
          </div>
          )}

          {/* Content area */}
          <div className="absolute top-[240px] left-0 right-0 bottom-0 overflow-y-auto max-h-[350px] pb-[20px]">
             <div className="p-4 ml-5">
              {sortedSongs.map((song) => (
                <div key={song.instanceId} className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[980px] h-[59px] mb-12">
                  <img src={song.cover} alt={`${song.title} Cover`} className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px]" />
                  <div className="ml-4 flex-grow flex">
                    <span className="text-[#2F2C50] font-medium  ml-[10px] w-[240px]">{song.title}</span>
                    <span className="text-[#2F2C50] w-[360px]" title={song.artist}>
                      {song.artist.length > 20 ? `${song.artist.substring(0, 20)}...` : song.artist}
                    </span>
                    <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
                  </div>
                  {/* Circle Play Button */}
                  <button 
                    className="ml-auto cursor-pointer" 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering playlist selection
                        togglePlayPause(song.instanceId); // Use playlist.id or a unique identifier for the song
                    }}
                >
                    <img 
                        src={playingSongId === song.instanceId ? "/assets/icons/pauseButtonExistingPlaylist.svg" : "/assets/icons/playButtonExistingPlaylist.svg"} 
                        alt={playingSongId === song.instanceId ? "Pause" : "Play"} 
                        className="w-10 h-10 mr-[12px]" 
                    />
                </button>
                  {/* Circle Minus Button */}
                  <button 
                    className="ml-auto cursor-pointer" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSong(song);
                    }}
                  >
                    <img src="/assets/icons/circle-minus-svgrepo-com.svg" alt="Remove" className="w-10 h-10" />
                  </button>
                </div>
              ))}

              {/* Add a song button */}
              <button 
                {...addedSongs.length == 0 && (
                    <h1 className="absolute top-[280px] left-[166px] w-full h-[38px] text-[#E2BBE9] text-[20px] font-medium bg-[#2F2C50] z-10 flex items-center px-4 opacity-90">This playlist is currently empty...</h1>
                )}
                className="mt-[2px] flex items-center bg-[#E2BBE9] rounded-full p-4 w-[980px] mb-2 h-[59px] opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110"
                onClick={onAddSong}
              >
                <div className="relative w-[97px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] ml-[20px] flex items-center justify-center" >
                  <img src="/assets/icons/plus-large-svgrepo-com copy.svg" alt="Add Song" className="w-10 h-10" />
                </div>
                <h1 className="ml-5 text-[20px] text-[#2F2C50]" >Add a song</h1>
              </button>

            </div>
          </div>
        </div>
      </div>
    );
};

export default PlaylistNewPlaylist;