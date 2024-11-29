import React, { useState } from 'react';

const CreateSelectSong = ({ onSongSelect, onSearchQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'baby') {
      onSongSelect('Baby by Justin Bieber'); // Example of song selection
    }
    onSearchQueryChange(searchQuery); // Update parent with the current search query
  };

  return (
    <div className="relative">
      {/* Main container */}
      <div className="absolute left-[500px] top-[270px] w-[732px] h-[140px] rounded-[25px] bg-[#2F2C50]">
        {/* Header section */}
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          <h2 className="text-[#E2BBE9] text-xl font-bold absolute left-1/2 transform -translate-x-1/2">Select a song</h2>
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearchQueryChange(e.target.value); // Update parent with current input
            }}
            className="w-full h-full rounded-[200px] bg-[#9B86BD] text-[#2F2C50] text-lg pl-11 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateSelectSong;