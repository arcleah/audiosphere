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
import frankOcean from "../assets/frank.svg"; // Add Frank Ocean's image


function SearchPage() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [showResults, setShowResults] = useState(false); // State to toggle result display
  const [viewAlexaProfile, setViewAlexaProfile] = useState(false); // State to show Alexa's profile
  const [likedSongs, setLikedSongs] = useState([]); // Track liked songs
  const [showAddToPlaylistPopup, setShowAddToPlaylistPopup] = useState(false); // Control popup visibility
  const [selectedSong, setSelectedSong] = useState(null); // Track selected song
  const [newPlaylistName, setNewPlaylistName] = useState(""); // Input for new playlist name

  const handleAddToPlaylist = (song) => {
    setSelectedSong(song); // Set the selected song
    setShowAddToPlaylistPopup(true); // Show the modal
  };
  
  const handleAddSongToPlaylist = (playlistName) => {
    console.log(`Added "${selectedSong}" to "${playlistName}"`);
    setShowAddToPlaylistPopup(false); // Close modal
  };
  
  const handleCreateNewPlaylist = () => {
    if (!newPlaylistName.trim()) {
      alert("Please enter a playlist name");
      return;
    }
  
    console.log(`Created playlist "${newPlaylistName}" and added "${selectedSong}"`);
    setNewPlaylistName(""); // Clear input
    setShowAddToPlaylistPopup(false); // Close modal
  };

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
    if (searchQuery.toLowerCase() === "alexa miller" || searchQuery.toLowerCase() === "frank ocean") {
      setShowResults(true); // Show hardcoded results for "Alexa Miller" or "Frank Ocean"
    } else {
      setShowResults(false); // Hide results for other searches
      alert("No results found for this search."); // Optional: Show feedback
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
    <div className="absolute left-[360px] top-[30px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px] overflow-hidden">
      {/* Header section */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-[#19182D] rounded-t-[25px]">
        {/* Title */}
        <h1 className="ml-8 mt-6 top-[45px] text-[30px] font-bold text-white">Hello Mira!</h1>

        {/* Search bar */}
        <div className="absolute left-[30px] top-[105px] w-[600px]">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-purple-300 rounded-[80px] p-4 w-[1000px] h-[59px]">
            <div className="w-[97px] h-[97px] rounded-full bg-purple-300 border-2 border-[#2F2C50] flex items-center justify-center">
              <img src={searchIcon} alt="Search song" className="w-10 h-10" />
            </div>
            <input
              type="text"
              placeholder="Search for profile, song, or artist"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 h-full rounded-[200px] bg-purple-300 text-[#2F2C50] text-[20px] placeholder:text-[#2F2C50] placeholder:text-opacity-55 pl-5 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleClear}
              className="text-[#2F2C50] w-[75px] h-[30px] rounded-full text-[18px] flex items-center justify-center hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
            >
              Clear
            </button>
          </form>
        </div>
      </div>

      {/*default search*/}
      <div className="main-content" style={{ 
        height: '400px', 
        overflow: 'scroll',
        marginTop: '200px'
      }}>
        {!showResults ? (
          <>
            <h2 className="text-white font-medium mt-4 text-xl ml-[20px]">Popular playlists</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {playlists.map((playlist, index) => (
                <div
                  key={index}
                  className="ml-[20px] rounded-[25px] bg-gray-300 w-[300px] h-40 relative flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={playlist.pic}
                    alt={playlist.name}
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
                    {playlist.name}
                  </div>
                </div>
              ))}
            </div>
            {/* Genres Section */}
            <h2 className="mt-8 ml-[20px] font-medium text-white text-xl">Explore your genres</h2>
            <div className="grid grid-cols-4 gap-4 mt-[20px] ml-[25px]">
              {genres.map((genre, index) => (
                <div
                  key={index}
                  className={`${genre.color} w-[220px] h-[150px] rounded-[25px] mb-4 flex items-center justify-center text-[#19182D] font-bold text-lg`}
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-white mt-8 font-medium text-xl ml-[30px]">Search result</h2>
            <div className="grid grid-cols-2 gap-6 mt-4 ml-[20px]">
              {/* Alexa Miller Profile */}
              {searchQuery.toLowerCase() === "alexa miller" && (
                <div
                  className="bg-[#19182D] rounded-[25px] p-4 flex items-center cursor-pointer"
                  onClick={() => setViewAlexaProfile(true)}
                >
                  <img
                    src={alexa}
                    alt="Alexa Miller"
                    className="ml-4 w-[160px] h-[150px] rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-white text-lg font-bold">Alexa Miller</h3>
                    <p className="text-white text-sm opacity-80">Profile</p>
                  </div>
                </div>
              )}


         {/* Frank Ocean Artist */}
         {searchQuery.toLowerCase() === "frank ocean" && (
                <div className="bg-[#19182D] rounded-[25px] p-4 flex items-center">
                  <img
                    src={frankOcean}
                    alt="Frank Ocean"
                    className="w-[150px] h-[150px] rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-white text-lg font-bold">Frank Ocean</h3>
                    <p className="text-white text-sm opacity-80">Artist</p>
                  </div>
                </div>
              )}

      <div className="bg-[#2F2C50] h-100% rounded-lg p-2">
        {searchQuery.toLowerCase() === "alexa miller" && (
          <div className="ml-[8px] overflow-y-auto max-h-[300px] p-4">
            {["Alexander", "IDK You Yet", "Cozy"].map((song, index) => (
              <div key={index} className="relative mb-12 w-full">
                <div 
                  className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[450px] h-[59px] cursor-pointer"
                >
                  <div className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px] overflow-hidden flex-shrink-0">
                    <img 
                      src="/assets/images/sza.svg" // Replace with actual cover image path
                      alt={`${song} Cover`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg text-[#2F2C50] font-medium">{song}</h3>
                    <p className="text-[#2F2C50] font-light">Alexa Miller | {index + 3}:0{index + 4}</p>
                  </div>
                  <button
                      className={`transition duration-300 ${
                        likedSongs.includes(song) ? "text-red-500 scale-125" : "text-gray-300"
                      } hover:text-red-500 hover:scale-110 ml-2`}
                      onClick={() =>
                        setLikedSongs((prevLikedSongs) =>
                          prevLikedSongs.includes(song)
                            ? prevLikedSongs.filter((s) => s !== song)
                            : [...prevLikedSongs, song]
                        )
                      }
                    >
                      <svg
                        className="w-[30px] h-[30px]"
                        fill={likedSongs.includes(song) ? "red" : "none"}
                        stroke="black"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                    <button 
                      className="ml-2 cursor-pointer"
                    >
                      <img 
                        src={"/assets/icons/circle-play-svgrepo-com copy.svg"}
                        alt="Play" 
                        className="w-8 h-8" 
                      />
                    </button>
                    <img
                      src={"/assets/icons/circle plus icon.svg"}
                      alt="Add"
                      className="w-8 h-8 cursor-pointer ml-2"
                      onClick={() => handleAddToPlaylist(song)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        {searchQuery.toLowerCase() === "frank ocean" && (
          <div className="ml-[8px] overflow-y-auto max-h-[300px] p-4">
            {["Pink + White", "White Ferrari", "Thinkin Bout You"].map((song, index) => (
              <div key={index} className="relative mb-12 w-full">
                <div 
                  className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[450px] h-[59px] cursor-pointer"
                  >
                  <img 
                    src={"/assets/images/frank.svg"} // Assuming you have cover images named like "pink-white-cover.jpg"
                    alt={`${song} Cover`} 
                    className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px]" 
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg text-[#2F2C50] font-medium">{song}</h3>
                    <p className="text-[#2F2C50] font-light">Frank Ocean | {index + 3}:0{index + 4}</p>
                  </div>

                  <button
                    className={`transition duration-300 ${
                      likedSongs.includes(song) ? "text-red-500 scale-125" : "text-gray-300"
                    } hover:text-red-500 hover:scale-110 ml-2`}
                    onClick={() =>
                      setLikedSongs((prevLikedSongs) =>
                        prevLikedSongs.includes(song)
                          ? prevLikedSongs.filter((s) => s !== song)
                          : [...prevLikedSongs, song]
                      )
                    }
                  >
                    <svg
                      className="w-[30px] h-[30px]"
                      fill={likedSongs.includes(song) ? "red" : "none"}
                      stroke="black"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                  <button 
                    className="ml-2 cursor-pointer"
                  >
                    <img 
                      src={"/assets/icons/circle-play-svgrepo-com copy.svg"}
                      alt="Play" 
                      className="w-8 h-8" 
                    />
                  </button>
                  <img
                    src={"/assets/icons/circle plus icon.svg"}
                    alt="Add"
                    className="w-8 h-8 cursor-pointer ml-2"
                    onClick={() => handleAddToPlaylist(song)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        </div>

              </div>

              {/* Playlists Section */}
              <h2 className="text-white font-medium mt-4 text-xl ml-[20px]">Popular playlists</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {playlists.map((playlist, index) => (
                <div
                  key={index}
                  className="ml-[20px] rounded-[25px] bg-gray-300 w-[300px] h-40 relative flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={playlist.pic}
                    alt={playlist.name}
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
                    {playlist.name}
                  </div>
                </div>
              ))}
            </div>

            </>
          )}
        {/* Add to Playlist Modal */}
{showAddToPlaylistPopup && (
  <>
    {/* Backdrop */}
    <div 
      className="fixed inset-0 bg-black opacity-50 z-40" 
      onClick={() => setShowAddToPlaylistPopup(false)}
    ></div>

    {/* Modal */}
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#19182D] p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-white text-xl font-bold mb-4">Add to Playlist</h2>
        
        {/* Existing Playlists */}
<div className="mb-4">
  <h3 className="text-white text-lg mb-2">Select Existing Playlist:</h3>
  <button
    className="w-full bg-purple-300 text-[#19182D] rounded-lg p-2 mb-2 text-left hover:bg-purple-400 transition"
    onClick={() => handleAddSongToPlaylist("its a bop")}
  >
    its a bop
  </button>
  <button
    className="w-full bg-purple-300 text-[#19182D] rounded-lg p-2 mb-2 text-left hover:bg-purple-400 transition"
    onClick={() => handleAddSongToPlaylist("lofi")}
  >
    lofi
  </button>
</div>

        {/* Create New Playlist */}
        <div className="mt-4">
          <h3 className="text-white text-lg mb-2">Create New Playlist:</h3>
          <input
            type="text"
            placeholder="New Playlist Name"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            className="w-full p-2 rounded-lg bg-purple-300 text-[#19182D] placeholder-gray-500 focus:outline-none"
          />
          <button
            className="mt-2 w-full bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 transition"
            onClick={handleCreateNewPlaylist}
          >
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  </>
)}
</div>
</div>

  );
}

export default SearchPage;
