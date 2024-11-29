import React from 'react';

const SelectSongScreen = () => {
  return (
    <div className="relative">
      {/* Main container for the song selection screen */}
      <div className="absolute left-[500px] top-[270px] w-[732px] h-[140px] rounded-[25px] bg-[#2F2C50]">
        {/* Header section */}
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#19182D] rounded-t-[25px] flex items-center justify-between px-4">
          {/* Back button */}
          <button className="w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center">
            <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
          </button>
          {/* Screen title */}
          <h2 className="text-[#E2BBE9] text-xl font-bold absolute left-1/2 transform -translate-x-1/2">Select a song</h2>
          {/* Empty div for layout balance */}
          <div className="w-[30px]"></div>
        </div>
        {/* Search bar container */}
        <div className="absolute top-[75px] left-[252px] w-[223px] h-[47px] flex items-center justify-center relative">
          {/* Search icon */}
          <img
            src="/assets/icons/search-svgrepo-com copy.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-7 pointer-events-none"
          />
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search for a song"
            className="w-full h-full rounded-[200px] bg-[#9B86BD] text-[#2F2C50] pl-12 focus:outline-none placeholder:text-[#2F2C50] placeholder:text-opacity-55"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectSongScreen;