import React, { useState } from "react";
import AlexaProfile from "./alexaProfile"; // Import Alexa's profile component
import heart from "../assets/icons/heart-svgrepo-com.svg"; // Import heart icon
import plus from "../assets/icons/plus-large-svgrepo-com.svg"; // Import plus icon
import searchIcon from "../assets/icons/search-svgrepo-com.svg"; // Import search icon
import alexa from "../assets/alexa-miller.jpg";
import playlistpic1 from "../assets/playlist1-pic.jpg";
import playlistpic2 from "../assets/playlist2-pic.jpg";
import playlistpic3 from "../assets/playlist3-pic.jpg";
import play from "../assets/icons/play-svgrepo-com.svg";


function SearchPage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [showResults, setShowResults] = useState(false); // State to toggle result display
  const [viewAlexaProfile, setViewAlexaProfile] = useState(false); // State to show Alexa's profile


  const playlists = [
    { name: "Dreamy", pic: playlistpic1 },
    { name: "Sunset Skies", pic: playlistpic2 },
    { name: "Lofi", pic: playlistpic3 },
  ];

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
    { name: 'Pop', color: 'bg-pink-200' },
    { name: 'Rock', color: 'bg-gray-200' },
    { name: 'Hip-Hop', color: 'bg-yellow-200' },
    { name: 'Jazz', color: 'bg-blue-200' },
    { name: 'Classical', color: 'bg-green-200' },
    { name: 'Reggae', color: 'bg-purple-200' },
    { name: 'Electronic', color: 'bg-orange-200' },
    { name: 'Country', color: 'bg-red-200' },
  ];
  
  if (viewAlexaProfile) {
    return <AlexaProfile onBack={() => setViewAlexaProfile(false)} />; // Pass the onBack function
  }


  return (
    <div className="fixed left-[340px] bg-[#2F2C50] rounded-lg overflow-y-auto w-70% h-[80%] p-4">
      {/* Custom Scrollbar Styles */}
      <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-thumb {
              background-color: #6B5DD3;
              border-radius: 10px;
              border: 2px solid #3A3955;
            }
            ::-webkit-scrollbar-thumb:hover {
              background-color: #584CC6;
            }
            ::-webkit-scrollbar-track {
              background-color: #2A2945;
              border-radius: 10px;
            }
          `}
        </style>
      <div className="flex flex-col h-full">
        <main className="flex-1">
          <h1 className="text-white text-2xl font-semibold">Hello, Mira!</h1>

          {/* Styled Search Bar */}
          <div className="relative mt-8 opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110">
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-purple-300 rounded-[80px] p-4 w-[940px] h-[59px]">
              {/* Search Icon */}
              <div className="w-[97px] h-[97px] rounded-full bg-purple-300 border-2 border-[#2F2C50] flex items-center justify-center">
                <img src={searchIcon} alt="Search song" className="w-10 h-10" />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for profile, song, or artist"
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 h-full rounded-[200px] bg-purple-300 text-[#2F2C50] text-[20px] placeholder:text-[#2F2C50] placeholder:text-opacity-55 pl-5 focus:outline-none"
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
                {playlists.map((playlist, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 w-full h-40 rounded-lg relative flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={playlist.pic}
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
                      {playlist.name}
                    </div>
                  </div>
                ))}
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
              <div className="grid grid-cols-2 gap-6 mt-4">
                {/* Profile Box */}
                <div
                  className="bg-[#19182D] rounded-lg p-4 flex items-center cursor-pointer"
                  onClick={() => setViewAlexaProfile(true)} // Set state to view Alexa's profile
                >
                  <img
                    src={alexa}
                    alt="Alexa Miller"
                    className="w-[150px] h-[150px] rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-white text-lg font-bold">Alexa Miller</h3>
                    <p className="text-white text-sm opacity-80">Profile</p>
                  </div>
                </div>

                {/* Song List */}
                <div className="bg-[#19182D] rounded-lg p-4">
                  {['Pink + White', 'White Ferrari', 'Thinking bout you'].map((song, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-purple-300 p-2 rounded-lg mb-2"
                    >
                      <p className="text-black">{song}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-black">{index + 3}:0{index + 4}</p>
                        <img src={play} className="w-6 h-6 cursor-pointer"/>
                        <img src={heart} alt="Heart" className="w-6 h-6 cursor-pointer" />
                        <img src={plus} alt="Add" className="w-6 h-6 cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Playlists Section */}
               <h2 className="text-white mt-8 text-xl">Popular playlists</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {playlists.map((playlist, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 w-full h-40 rounded-lg relative flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={playlist.pic}
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
                      {playlist.name}
                    </div>
                  </div>
                ))}
              </div>

            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default SearchPage;
