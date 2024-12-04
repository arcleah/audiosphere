import React from 'react';

const profilePlaylist = ({ playlist, onBack }) => {
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

          {/* Playlist Name */}
          <div className="absolute left-[280px] top-[45px] text-[40px] font-bold text-[#E2BBE9]">
            <h1 className="pl-2 pb-1 text-[40px] font-bold">{playlist.name}</h1>
          </div>
        </div>

        {/* Playlist Songs */}
        <div className="absolute top-[240px] left-0 right-0 bottom-0 overflow-y-auto max-h-[350px] pb-[20px]">
          {playlist.songs.map((song) => (
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
                <span className="text-[#2F2C50] font-medium ml-[10px] w-[240px]">
                  {song.title}
                </span>
                <span className="text-[#2F2C50] w-[280px]">{song.artist}</span>
                <span className="text-[#2F2C50] w-1/3">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profilePlaylist;
