import React, { useState, useEffect } from "react";

const profilePlaylist = ({ playlist, onBack }) => {
  const [playlistName, setPlaylistName] = useState(playlist.name);
  const [localSongs, setLocalSongs] = useState(playlist.songs);
  const [isEditing, setIsEditing] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [playingSongId, setPlayingSongId] = useState(null);

  useEffect(() => {
    setLocalSongs(playlist.songs);
  }, [playlist]);

  const handleSortChange = (e) => setSortBy(e.target.value);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);

  const togglePlayPause = (songId) => {
    setPlayingSongId((prev) => (prev === songId ? null : songId));
  };

  const filteredSongs = localSongs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedSongs = [...filteredSongs].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "artist":
        return a.artist.localeCompare(b.artist);
      case "duration":
        const aDuration = a.duration.split(":").map(Number);
        const bDuration = b.duration.split(":").map(Number);
        return aDuration[0] * 60 + aDuration[1] - (bDuration[0] * 60 + bDuration[1]);
      default:
        return 0;
    }
  });

  return (
    <div className="relative">
            <div className="absolute left-[85px] top-[10px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
            {/* Header */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-[#19182D] rounded-t-[25px]">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-4 left-4 w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
          >
            <img
              src="/assets/icons/chevron-left-svgrepo-com.svg"
              alt="Back"
              className="w-15 h-10 -ml-[2.5px]"
            />
          </button>

          {/* Playlist Picture */}
          <div className="absolute top-[25px] left-[110px] w-[150px] h-[150px] rounded-full bg-[#9B86BD] overflow-hidden flex items-center justify-center">
            <img src={playlist.pic} alt={`${playlist.name} Cover`} className="w-[150px] h-[150px] object-cover" />
          </div>

          {/* Playlist Name */}
          <div className="absolute left-[280px] top-[45px] text-[40px] font-bold text-white">
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

          <button 
              className="absolute left-[940px] top-[160px] p-2 ml-[28px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
              >
              <img src="/assets/icons/plus-large-svgrepo-com.svg" alt="Add Song" className="w-4 h-4" />
          </button>

          <h1 className="absolute left-[290px] top-[168px] text-[55px] text-sm text-white">1 songs • 2 min 37 sec</h1>
          <h1 className="absolute left-[460px] top-[168px] text-[55px] text-sm text-white">|</h1>


          <select value={sortBy} className="absolute left-[280px] top-[165px] h-[25px] rounded-full bg-[#2F2C50] text-[#E2BBE9] text-[14px] placeholder:text-[#E2BBE9] mb-2 pl-2 opacity-85 absolute ml-[190px]">
                        <option value="">Sort By</option>
                        <option value="title">Title: A-Z</option>
                        <option value="artist">Artist: A-Z</option>
                        <option value="duration">Duration</option>
                        <option value="added">Order Added</option>
                    </select>

          <h1 className="absolute left-[590px] top-[168px] text-[55px] text-sm text-white">|</h1>

            <button 
                className="absolute left-[575px] top-[160px] p-2 ml-[28px] mb-2 mt-1 rounded-full bg-[#2F2C50] opacity-85 flex items-center"
            >
                <img src="/assets/icons/search-svgrepo-com copy 2.svg" alt="Search" className="w-3 h-3" />
            </button>



          {/* Edit Button */}
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="absolute left-[285px] top-[115px] w-[60px] h-[30px] rounded-full bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="absolute left-[285px] top-[115px] w-[60px] h-[30px] rounded-full bg-[#2F2C50] text-[#E2BBE9] font-medium flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
            >
              Edit
            </button>
          )}
          
        </div>

        {/*header with titles*/}
        <div className="absolute top-[210px] left-0 w-full h-[28px] bg-[#2F2C50] z-10 flex items-center px-4">
            <div className="w-[97px]" />
            <div className="ml-20 mt-4 flex-grow flex">
            <span className="text-white  font-medium w-[220px]">Title</span>
            <span className="text-white  font-medium w-[240px]">Artist</span>
            <span className="text-white  font-medium w-1/3">Time</span>
            </div>
                    
                </div>

      <button 
              className="absolute top-[370px] left-[35px] flex items-center bg-[#E2BBE9] rounded-full p-4 w-[980px] mb-2 h-[59px] opacity-80 transition duration-300 ease-in-out hover:filter hover:brightness-110"
              >
              <div className="relative w-[97px] h-[97px] rounded-full bg-[#E2BBE9] border-2 border-[#2F2C50] ml-[20px] flex items-center justify-center" >
                  <img src="/assets/icons/plus-large-svgrepo-com copy.svg" alt="Add Song" className="w-10 h-10" />
              </div>
              <h1 className="ml-5 text-[20px] text-[#2F2C50]" >Add a song</h1>
          </button>


        {/* Playlist Songs */}
        <div className="absolute top-[240px] left-0 right-0 bottom-0 overflow-y-auto max-h-[350px] pb-[20px]">
          <div className="p-4 ml-5">
            {sortedSongs.map((song) => (
              <div
                key={song.id}
                className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[980px] h-[59px] mb-12"
              >
                <img
                  src={song.cover}
                  alt={`${song.title} Cover`}
                  className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px]"
                />
                <div className="ml-4 flex-grow">
                  <span className="text-[#2F2C50] font-medium w-[240px] pl-[10px] pr-[170px]">{song.title}</span>
                  <span className="text-[#2F2C50] w-[280px] mr-4 pr-[100px]">{song.artist}</span>
                  <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
                </div>
                
                <button className="mr-[12px]">
                    <img src="/assets/icons/pen-circle-svgrepo-com.svg" alt="Remove" className="w-10 h-10" />
                </button>

                <button
                  className="ml-auto cursor-pointer"
                  onClick={() => togglePlayPause(song.id)}
                >
                  <img
                    src={
                      playingSongId === song.id
                        ? "/assets/icons/pauseButtonExistingPlaylist.svg"
                        : "/assets/icons/playButtonExistingPlaylist.svg"
                    }
                    alt={playingSongId === song.id ? "Pause" : "Play"}
                    className="w-10 h-10 mr-[10px]"
                  />
                </button>

                <button className="ml-auto">
                    <img src="/assets/icons/circle-minus-svgrepo-com.svg" alt="Remove" className="w-10 h-10" />
                </button>

                
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePlaylist;
