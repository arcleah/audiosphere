import React from "react";
import sabrina from "../assets/sabrina.svg";
import frank from "../assets/frank.svg";
import kanye from "../assets/kanye.svg";
import SZA from "../assets/sza.svg";
import alexa from "../assets/alexa-miller.jpg";
import jackie from "../assets/jackie.svg";
import playlistpic1 from "../assets/playlist4-pic.jpg";
import playlistpic2 from "../assets/playlist5-pic.jpg";
import playlistpic3 from "../assets/playlist3-pic.jpg";

const ProfilePopup = ({ user, onClose }) => {
  const getArtistImage = (artist) => {
    switch (artist) {
      case "Frank Ocean": return frank;
      case "SZA": return SZA;
      case "Sabrina Carpenter": return sabrina;
      case "Kanye West": return kanye;
      default: return sabrina;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
      <div className="fixed top-[10%] left-[370px] w-[70%] h-[70%] max-h-[70%] bg-[#2F2C50] rounded-xl p-5 shadow-lg overflow-hidden flex flex-col">
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

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-10 hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Section */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-[#19182D] p-2 rounded-t-xl">
          <div className="mt-[0px] flex items-center gap-5">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-[200px] h-[200px] rounded-full border-4 border-[#19182D] ml-[80px] mr-[20px] object-cover"
            />
            <div>
              <h3 className="text-white text-4xl font-bold">{user.fullName}</h3>
              <p className="text-[#E2BBE9]">@{user.username}</p>
              <p className="text-gray-300">{user.bio}</p>
              <div className="mt-3 flex gap-12">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#E2BBE9]">{user.posts?.length || 0}</p>
                  <p className="text-[#E2BBE9]">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#E2BBE9]">{user.followers}</p>
                  <p className="text-[#E2BBE9]">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#E2BBE9]">{user.following}</p>
                  <p className="text-[#E2BBE9]">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#2F2C50] p-6 rounded-b-xl">
          <h2 className="text-white text-2xl font-bold mb-4">Posts & Playlists</h2>
          <div className="flex space-x-4 h-[calc(100%-40px)]">
            {/* Posts Section */}
            <div className="w-1/2 bg-[#19182D] p-4 rounded-xl overflow-y-auto">
              <h3 className="text-[#E2BBE9] text-xl font-semibold">
                Posts ({user.posts?.length || 0})
              </h3>
              <div className="mt-[20px] ml-[8px] p-2 space-y-4">
                {user.posts?.map((post) => (
                  <div key={post.id} className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
                    <img
                      src={getArtistImage(post.artist)}
                      alt={post.artist}
                      className="w-[45px] h-[45px] rounded-full"
                    />
                    <div className="ml-4 flex-grow">
                      <p className="text-sm text-[#2F2C50] font-medium">{post.content}</p>
                      <p className="text-xs text-[#2F2C50]">
                        {post.song} • {post.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Playlists Section */}
            <div className="w-1/2 bg-[#2F2C50] p-4 rounded-lg overflow-y-auto">
              <h3 className="text-[#E2BBE9] text-xl font-semibold">Playlists</h3>
              <div className="flex flex-col gap-4 mt-3">
                {user.playlists?.map((playlist, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-[#19182D] p-3 rounded-lg text-white"
                  >
                    <img
                      src={playlist.pic}
                      className="w-[70px] h-[70px] rounded-full ml-[20px]"
                      alt={playlist.name}
                    />
                    <p className="text-l text-[#E2BBE9] font-semibold p-5">
                      {playlist.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;