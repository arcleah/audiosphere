import React from 'react';

const PlaylistLibrary = ({ onCreatePlaylist, playlists, onRemovePlaylist, onSelectPlaylist }) => {
    return (
      <div className="relative">
        <div className="absolute left-[350px] top-[40px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
             {/* Header section */}
          <div className="absolute top-0 left-0 w-full h-[100px] bg-[#19182D] rounded-t-[25px]">
            <h1 className="text-[#E2BBE9] text-3xl font-bold mt-8 ml-8">Your Playlists</h1>
            <button 
              onClick={onCreatePlaylist}
              className="absolute top-8 right-10 w-[170px] h-[40px] rounded-full bg-[#E2BBE9] opacity-80 text-[#2F2C50] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
            >
              <img 
                src="/assets/icons/plus-large-svgrepo-com copy.svg" 
                alt="Add Song" 
                className="w-6 h-6 mr-3"
              />
              Create Playlist
            </button>
          </div>

          {/*Content*/}
          <div className="mt-12 ml-4 max-h-[500px] overflow-y-auto pt-[90px] pb-[20px] p-4">
            {playlists.map(playlist => (
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
                <button className="ml-auto cursor-pointer">
                  <img src="/assets/icons/circle-play-svgrepo-com copy.svg" alt="Play" className="w-10 h-10 mr-[12px]" />
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