import React from 'react';

const CreateSearchResults = ({ selectedSong, searchQuery, onBack, onSearchQueryChange }) => {
  // Hardcoded song options
  const songOptions = [
    { title: 'Baby', artist: 'Justin Bieber', cover: '/assets/images/baby bieber.jpeg', duration: '3:34' },
    { title: 'Baby', artist: 'Summer Walker', cover: '/assets/images/summer baby.jpeg', duration: '1:28' },
    { title: 'Baby', artist: 'Madison Beer', cover: '/assets/images/madison beer baby.png', duration: '3:27' },
    { title: 'Baby', artist: 'Brandy', cover: '/assets/images/brandy baby.jpeg', duration: '5:13' },
  ];

  const handleSelectSong = (song) => {
    console.log(`Selected song: ${song.title} by ${song.artist}`);
    // Logic for selecting the song can go here
  };

  return (
    <div className="relative">
      <div className="absolute left-[500px] top-[100px] w-[732px] h-[474px] rounded-[25px] bg-[#2F2C50]">
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          {/* Back button */}
          <button 
            onClick={onBack} 
            className="w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125">
            <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
          </button>
          <h2 className="text-[#E2BBE9] text-xl font-bold absolute left-1/2 transform -translate-x-1/2">Select a song</h2>
          <div className="w-[30px]"></div>
        </div>

        {/* Search bar container */}
        <form className="absolute top-[75px] left-[252px] w-[223px] h-[47px] flex items-center justify-center relative">
          <img
            src="/assets/icons/search-svgrepo-com copy.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for a song"
            value={searchQuery} // Use the passed down search query
            onChange={(e) => onSearchQueryChange(e.target.value)} // Handle input change
            className="w-full h-full rounded-[200px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-11 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
          />
        </form>

        {/* Scrollable song options */}
        <div className="mt-[90px] ml-[8px] overflow-y-auto max-h-[300px] p-4">
          {songOptions.map((song, index) => (
            <div key={index} className="relative mb-12 w-full">
              {/* Song container */}
              <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[678px] h-[59px]">
                <img 
                  src={song.cover} 
                  alt={`${song.title} Cover`} 
                  className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] -mr-[90px] absolute left-[30px]" 
                />
                <div className="ml-[130px]"> {/* Adjust margin to keep text aligned */}
                  <h3 className="text-lg text-[#2F2C50] font-medium">{song.title}</h3>
                  <p className="text-[#2F2C50] font-light">{song.artist} | {song.duration}</p>
                </div>
                <img 
                  src="/assets/icons/circle-play-svgrepo-com copy.svg" 
                  alt="Play" 
                  className="w-10 h-10 ml-auto cursor-pointer" // Adjust size and add margin to the right
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateSearchResults;