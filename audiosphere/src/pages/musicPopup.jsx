import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import sabrina from "../assets/sabrina.svg";
import frank from "../assets/frank.svg";
import kanye from "../assets/kanye.svg";
import SZA from "../assets/sza.svg";
import lamp from "../assets/jackie.svg";

const MusicPopup = ({ post, onClose }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setIsLiked(false);
  }, [post]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToPlaylist = () => {
    console.log(`Added ${post.song} to playlist!`);
    navigate("/playlist"); // Navigate to the Playlist page
  };

  const handleCreateClick = () => {
    navigate("/create"); // Navigate to the Create page
  };

  const artistImages = {
    "Frank Ocean": frank,
    SZA: SZA,
    "Sabrina Carpenter": sabrina,
    "Kanye West": kanye,
    Lamp: lamp,
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-[#1D1B31] rounded-3xl w-[450px] p-8 shadow-2xl text-white">
        <div className="relative mb-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 left-0 text-gray-300 hover:text-white transition p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6B5DD3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.25 19.25L8.75 12l6.5-7.25"
              />
            </svg>
          </button>

          {/* Artist Cover Image */}
          <div className="flex justify-center mb-6">
            <img
              src={artistImages[post.artist] || sabrina}
              alt={post.artist}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Song Title and Artist in Purple Enclosure */}
          <div className="bg-[#7776B3] rounded-full px-6 py-3 mb-6 flex flex-col items-center">
            <h2 className="text-xl font-bold">{post.song}</h2>
            <p className="text-gray-200">{post.artist}</p>
          </div>

          {/* Like Button and Add to Playlist Button */}
          <div className="flex justify-evenly items-center">
            {/* Like Button */}
            <button
              onClick={toggleLike}
              className={`p-3 rounded-full transition duration-300 ${
                isLiked ? "text-red-500 scale-110" : "text-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isLiked ? "red" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>

            {/* Add to Playlist Button */}
            <button
              onClick={handleAddToPlaylist}
              className="p-3 rounded-full text-gray-300 hover:text-purple-500 transition duration-300 border-2 border-transparent hover:border-purple-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 6v12M6 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Create Button */}
            <button
              onClick={handleCreateClick}
              className={`p-3 rounded-full text-gray-300 hover:text-purple-500 transition duration-300 border-2 border-transparent hover:border-blue-500`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPopup;
