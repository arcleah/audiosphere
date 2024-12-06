import React, { useState } from "react";
import frank from "../assets/frank.svg";
import jackie from "../assets/jackie.svg";
import kanye from "../assets/kanye.svg";
import mira from "../assets/mira.svg";
import sabrina from "../assets/sabrina.svg";
import SZA from "../assets/sza.svg";
import CommentsPopup from "./commentsPopup";
import MusicPopup from "./musicPopup"; // Import the MusicPopup component

const HomePage = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [playingPostId, setPlayingPostId] = useState(null);
  const [isCommentPopupVisible, setIsCommentPopupVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState(null); // Store the current post data
  const [isMusicPopupVisible, setIsMusicPopupVisible] = useState(false); // State for controlling music popup
  const [showConfirmDeletePopup, setShowConfirmDeletePopup] = useState(false); // Track popup visibility


  const handleLike = (postId) => {
    setLikedPosts((prevLikedPosts) => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId],
    }));
  };

  const handlePlayPause = (postId) => {
    setPlayingPostId((prevPlayingPostId) =>
      prevPlayingPostId === postId ? null : postId
    );
  };

  const handleCommentClick = (post) => {
    setCurrentPost(post); // Set the current post data
    setIsCommentPopupVisible(true); // Show the comment popup
  };

  const handleMusicClick = (post) => {
    setCurrentPost(post); // Set the current post data
    setIsMusicPopupVisible(true); // Show the music popup
  };

  const handleClosePopup = () => {
    setIsCommentPopupVisible(false); // Close the comment popup
    setCurrentPost(null); // Reset the current post data
    setIsMusicPopupVisible(false); // Close the music popup
    setShowConfirmDeletePopup(false);

  };

  const handleDelete = () => {
    setShowConfirmDeletePopup(true);
  };

  const posts = [
    {
      id: 1,
      username: "@thefrankocean",
      date: "Oct 28, 2024",
      content: "Check out my song!",
      song: "Seigfried",
      artist: "Frank Ocean",
    },
    {
      id: 2,
      username: "@itsalexa",
      date: "Oct 29, 2024",
      content: "If you like R&B, you gotta listen to this.",
      song: "Drew Barrymore",
      artist: "SZA",
    },
    {
      id: 3,
      username: "@mira.hart",
      date: "Oct 30, 2024",
      content: "I loveee this song!!!",
      song: "Taste",
      artist: "Sabrina Carpenter",
    },
    {
      id: 4,
      username: "@thompsonjessica",
      date: "Oct 30, 2024",
      content: "One of my favorites!",
      song: "The Glory",
      artist: "Kanye West",
    },
    {
      id: 5,
      username: "@grandpadave",
      date: "Oct 30, 2024",
      content: "My grandkids recommended this to me and I think its groovy!",
      song: "Rainy Tapestry",
      artist: "Lamp",
    },
  ];

  return (
    <div className="ml-[90px] max-w-[1200px] mx-auto py-2 pt-10 flex-1 overflow-y-auto max-h-[650px] posts-container">
      {/* Custom Scrollbar Styles */}
  <style>
    {`
      .posts-container::-webkit-scrollbar {
        width: 8px;
      }
      .posts-container::-webkit-scrollbar-thumb {
        background-color: #6B5DD3;
        border-radius: 10px;
        border: 2px solid #3A3955;
      }
      .posts-container::-webkit-scrollbar-thumb:hover {
        background-color: #584CC6;
      }
      .posts-container::-webkit-scrollbar-track {
        background-color: #2F2C50;
        border-radius: 10px;
      }
    `}
  </style>
      {/* Default Search */}
      {/* Mira's profile image positioned at the top right corner */}
      <div className="absolute top-4 right-4">
        <img
          src={mira}
          alt="Mira's Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="space-y-24">
        {posts.map((post) => (
          <div
            key={post.id}
            className="ml-[25px] group bg-[#7776B3] rounded-full p-4 h-[120px] w-[1000px] flex items-center gap-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#6C7196] relative mb-12"
          >
            <div
              className="absolute bottom-[90px] left-[100px] w-100 h-14 flex-shrink-0 group-hover:scale-105 transition duration-300 overflow-visible"
              style={{ transform: "translateX(-25%)" }}
            >
              <img
                src={
                  post.artist === "Frank Ocean"
                    ? frank
                    : post.artist === "SZA"
                    ? SZA
                    : post.artist === "Sabrina Carpenter"
                    ? sabrina
                    : post.artist === "Kanye West"
                    ? kanye
                    : jackie
                }
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full object-cover transition duration-300 transform group-hover:scale-110 group-hover:shadow-lg z-10 group-hover:z-20"
              />
              <button
                className="w-[200px] h-[200px] absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/40 hover:bg-opacity-40 rounded-full transition duration-300 z-10"
                onClick={() => handlePlayPause(post.id)}
              >
                {playingPostId === post.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-white"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M5 3l15 9-15 9V3z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex-1 min-w-0 ml-2">
              <div className="ml-[250px] flex items-center justify-between mb-3 flex-shrink-0">
                <span className="font-semibold text-white text-sm">
                  {post.username}
                </span>
                <span className="text-xs text-gray-300 mr-[40px]">
                  {post.date}
                </span>
              </div>

              {post.content && (
                <p className="ml-[250px] text-sm text-white mb-4 break-words">
                  {post.content}
                </p>
              )}

              <div className="ml-[250px] flex items-center gap-5 text-sm text-gray-300">
                <button
                  className={`transition duration-300 ${
                    likedPosts[post.id]
                      ? "text-red-500 scale-125"
                      : "text-gray-300"
                  } hover:text-red-500 hover:scale-110`}
                  onClick={() => handleLike(post.id)}
                >
                  <svg
                    className="w-6 h-6"
                    fill={likedPosts[post.id] ? "red" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>

                <button
                  className="hover:text-blue-500 transition duration-300 transform hover:scale-110"
                  onClick={() => handleCommentClick(post)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14l4 4z" />
                  </svg>
                </button>

                <button
                  className="hover:text-green-500 transition duration-300 transform hover:scale-110"
                  onClick={() => handleMusicClick(post)} // Show Music Popup
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </button>

                {post.song && (
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{post.song}</span>
                    {post.artist && (
                      <span className="text-gray-300">• {post.artist}</span>
                    )}
                  </div>
                )}


                {/* Conditional Delete Icon */}
                {post.username === "@mira.hart" && (
                  <button
                    onClick={handleDelete} 
                    className="ml-2 p-1 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="ml-[310px] w-6 h-6 text-grey-300 hover:text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 4h14M6 4v16a2 2 0 002 2h8a2 2 0 002-2V4M9 4V2a1 1 0 011-1h4a1 1 0 011 1v2"
                        />
                      </svg>
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
        {/* Render Comments Popup */}
        {isCommentPopupVisible && (
          <CommentsPopup post={currentPost} onClose={handleClosePopup} />
        )}

        {/* Render Music Popup */}
        {isMusicPopupVisible && (
          <MusicPopup post={currentPost} onClose={handleClosePopup} />
        )}

        {showConfirmDeletePopup && (
        <>
          <div className="ml-[300px] absolute bottom-[200px] fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#19182D] text-white text-lg p-6 rounded-[25px] w-[400px] min-h-[175px] flex flex-col items-center justify-between">
              <h3 className="text-white font-bold text-xl mb-2">Delete post?</h3>
              <p className="text-center mb-4 overflow-y-auto max-h-[100px]">
                Are you sure you want to delete this post?
              </p>
              <div className="flex justify-center space-x-16">
                <button
                  onClick={handleClosePopup}
                  className="border border-white text-white px-4 py-2 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Delete
                </button>
                <button
                  onClick={handleClosePopup}
                  className="border border-white text-white px-4 py-2 rounded-[15px] hover:bg-[#E2BBE9] hover:border-[#E2BBE9] hover:text-[#19182D] transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      </div>
    </div>
  );
};

export default HomePage;