import React, { useState } from 'react';
import heart from "../assets/icons/heart-svgrepo-com.svg"; // Import heart icon
import plus from "../assets/icons/plus-large-svgrepo-com.svg"; // Import plus icon
import searchIcon from "../assets/icons/search-svgrepo-com.svg"; // Import search icon
import alexa from "../assets/alexa-miller.jpg";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [showResults, setShowResults] = useState(false); // State to toggle result display

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'alexa miller') {
      setShowResults(true); // Show hardcoded results for "Alexa Miller"
    } else {
      setShowResults(false); // Hide results for other searches
      alert('No results found for this search.'); // Optional: Show feedback
    }
  };

  const handleClear = () => {
    setSearchQuery(''); // Clear the search input
    setShowResults(false); // Reset to the initial layout
  };
  const genres = [
    { name: 'Pop', color: 'bg-pink-200'},
    { name: 'Rock', color: 'bg-gray-200' },
    { name: 'Hip-Hop', color: 'bg-yellow-200' },
    { name: 'Jazz', color: 'bg-blue-200' },
    { name: 'Classical', color: 'bg-green-200' },
    { name: 'Reggae', color: 'bg-purple-200' },
    { name: 'Electronic', color: 'bg-orange-200' },
    { name: 'Country', color: 'bg-red-200' },
  ];


  return (
    <div className="fixed right-[20px] bg-[#2F2C50] rounded-lg overflow-y-auto w-[1000px] h-[750px] p-4">
      <div className="flex flex-col h-full">
        <main className="flex-1">
          <h1 className="text-white text-3xl">Hello, Mira!</h1>

          {/* Styled Search Bar */}
          <div className="relative mt-8 opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110">
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-[#E2BBE9] rounded-[80px] p-4 w-[940px] h-[59px]">
              {/* Search Icon */}
              <div className="w-[97px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] flex items-center justify-center">
                <img src={searchIcon} alt="Search song" className="w-10 h-10" />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for profile, song, or artist"
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 h-full rounded-[200px] bg-[#E2BBE9] text-[#2F2C50] text-[20px] placeholder:text-[#2F2C50] placeholder:text-opacity-55 pl-5 focus:outline-none"
              />

              {/* Clear Button */}
              <button
                type="button"
                onClick={handleClear}
                className="text-[#2F2C50] w-[75px] h-[30px] rounded-full text-[18px] flex items-center justify-center hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
              >
                Clear
              </button>
            </form>
          </div>

            {/* Default Layout Before Search */}
            {!showResults && (
            <>
              <h2 className="text-white mt-8 text-xl">Popular playlists</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-300 w-full h-40 rounded-lg"></div>
                <div className="bg-gray-300 w-full h-40 rounded-lg"></div>
                <div className="bg-gray-300 w-full h-40 rounded-lg"></div>
              </div>

              <h2 className="text-white mt-8 text-xl">Explore your genres</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {genres.map((genre, index) => (
                  <div
                    key={index}
                    className={`${genre.color} w-full h-40 rounded-lg flex items-center justify-center text-[#19182D] font-bold text-lg`}
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Hardcoded Results for "Alexa Miller" */}
          {showResults && (
            <>
              <h2 className="text-white mt-8 text-xl">Search result</h2>
              <div className="bg-[#19182D] rounded-lg p-4 flex items-center mt-4">
                <img
                  src= {alexa}
                  alt="Alexa Miller"
                  className="w-30 h-30 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-white text-lg font-bold">Alexa Miller</h3>
                  <p className="text-white text-sm opacity-80">Profile</p>
                </div>
              </div>

              {/* Songs */}
              <div className="mt-4">
                <div className="flex items-center justify-between bg-purple-300 p-2 rounded-lg mb-2">
                  <p className="text-black">Pink + White</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-black">3:04</p>
                    <img src={heart} alt="Heart" className="w-6 h-6 cursor-pointer" />
                    <img src={plus} alt="Add" className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-purple-300 p-2 rounded-lg mb-2">
                  <p className="text-black">White Ferrari</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-black">4:08</p>
                    <img src={heart} alt="Heart" className="w-6 h-6 cursor-pointer" />
                    <img src={plus} alt="Add" className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-purple-300 p-2 rounded-lg mb-2">
                  <p className="text-black">Thinking bout you</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-black">5:07</p>
                    <img src={heart} alt="Heart" className="w-6 h-6 cursor-pointer" />
                    <img src={plus} alt="Add" className="w-6 h-6 cursor-pointer" />
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default SearchPage;
