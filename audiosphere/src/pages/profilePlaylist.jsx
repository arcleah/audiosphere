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
      <div className="absolute left-[85px] top-[30px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
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
                  <span className="text-[#2F2C50] font-medium ml-[10px] w-[240px] p-2">{song.title}</span>
                  <span className="text-[#2F2C50] w-[280px] p-8">{song.artist}</span>
                  <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profilePlaylist;
