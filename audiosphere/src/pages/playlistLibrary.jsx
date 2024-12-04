import React, { useState } from 'react';

const PlaylistLibrary = ({ onCreatePlaylist, playlists, onRemovePlaylist, onSelectPlaylist }) => {
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
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

    // Filter playlists based on search query
    const filteredPlaylists = playlists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative">
            <div className="absolute left-[85px] top-[30px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
                {/* Header section */}
                <div className="absolute top-0 left-0 w-full h-[100px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-8">
                    <h1 className="text-[#E2BBE9] text-3xl font-bold">Your Playlists</h1>
                    
                    {/* Search Bar with Icon */}
                    <div className="relative ml-auto mr-4">
                        <input 
                            type="text" 
                            placeholder="Search playlists..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="rounded-full bg-[#2F2C50] text-[#E2BBE9] placeholder:text-[#E2BBE9] pl-10 pr-4 h-[40px]"
                        />
                        <img 
                            src="/assets/icons/search-svgrepo-com.svg" // Replace with your search icon path
                            alt="Search"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E2BBE9]"
                        />
                    </div>

                    <button 
                        onClick={onCreatePlaylist}
                        className="w-[170px] h-[40px] rounded-full bg-[#E2BBE9] opacity-80 text-[#2F2C50] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
                    >
                        <img 
                            src="/assets/icons/plus-large-svgrepo-com copy.svg" 
                            alt="Add Playlist" 
                            className="w-6 h-6 mr-3"
                        />
                        Create Playlist
                    </button>
                </div>

                {/* Content */}
                <div className="mt-12 ml-4 max-h-[550px] overflow-y-auto pt-[90px] pb-[20px] p-4">

                    {filteredPlaylists.length === 0 && (
                        <h1 className="absolute top-[130px] text-[18px] text-[#E2BBE9] opacity-80">
                            Currently no playlists...
                        </h1>
                    )}

                    {filteredPlaylists.map(playlist => (
                        <div 
                            key={playlist.id} 
                            className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[980px] h-[59px] mb-12 mr-8 cursor-pointer"
                            onClick={() => onSelectPlaylist(playlist)} // Call onSelectPlaylist when clicked
                        >
                            <div className="w-[97px] h-[97px] rounded-full bg-[#9B86BD] border-2 border-[#2F2C50] ml-[20px] overflow-hidden flex items-center justify-center">
                                <img 
                                    src="/assets/icons/music-svgrepo-com.svg"
                                    alt="Playlist Cover"
                                    className="w-[60px] h-[60px]"
                                />
                            </div>
                            <div className="ml-4 flex-grow flex">
                                <span className="text-[#2F2C50] font-medium ml-[10px] w-[240px]">{playlist.name}</span>
                                <span className="text-[#2F2C50] w-[360px]">
                                    {playlist.songs.length} {playlist.songs.length === 1 ? 'song' : 'songs'}
                                </span>
                                <span className="text-[#2F2C50] w-1/3">
                                    {calculateTotalDuration(playlist.songs)}
                                </span>
                            </div>
                            {/* Circle Play Button */}
                            <button 
                                className="ml-auto cursor-pointer" 
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering playlist selection
                                    togglePlayPause(playlist.id); // Use playlist.id or a unique song identifier
                                }}
                            >
                                <img 
                                    src={playingSongId === playlist.id ? "/assets/icons/pauseButtonExistingPlaylist.svg" : "/assets/icons/playButtonExistingPlaylist.svg"} 
                                    alt={playingSongId === playlist.id ? "Pause" : "Play"} 
                                    className="w-10 h-10 mr-[12px]" 
                                />
                            </button>
                            {/* Circle Minus Button */}
                            <button 
                                className="cursor-pointer" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemovePlaylist(playlist);
                                }}
                            >
                                <img src="/assets/icons/circle-minus-svgrepo-com.svg" alt="Remove" className="w-10 h-10 mr-[12px]" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper function to calculate total duration of songs in a playlist
const calculateTotalDuration = (songs) => {
    const totalSeconds = songs.reduce((total, song) => {
        const [minutes, seconds] = song.duration.split(':').map(Number);
        return total + (minutes * 60 + seconds);
    }, 0);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default PlaylistLibrary;