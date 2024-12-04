import React, { useState } from "react";
import sabrina from "../assets/sabrina.svg";
import frank from "../assets/frank.svg";
import kanye from "../assets/kanye.svg";
import SZA from "../assets/sza.svg";
import jackie from "../assets/jackie.svg";
import CommentsPopup from "./commentsPopup";
import MusicPopup from "./musicPopup"; // Import the MusicPopup component
import mira from "../assets/mira.svg";

const HomePage = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [playingPostId, setPlayingPostId] = useState(null);
  const [isCommentPopupVisible, setIsCommentPopupVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState(null); // Store the current post data
  const [isMusicPopupVisible, setIsMusicPopupVisible] = useState(false); // State for controlling music popup

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
    <div className="max-w-6xl mx-auto py-2">
      {/* Mira's profile image positioned at the top right corner */}
      <div className="absolute top-4 right-4">
        <img
          src={mira}
          alt="Mira's Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-[#7776B3] rounded-full p-4 flex items-center gap-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#6C7196]"
          >
            <div className="relative w-24 h-24 flex-shrink-0 group-hover:scale-105 transition duration-300">
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
                className="w-full h-full rounded-full object-cover transition duration-300 transform group-hover:scale-110 group-hover:shadow-lg"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/40 hover:bg-opacity-40 rounded-full transition duration-300 z-10"
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
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-white text-sm">
                  {post.username}
                </span>
                <span className="text-xs text-gray-300">{post.date}</span>
              </div>

              {post.content && (
                <p className="text-sm text-white mb-4 break-words">
                  {post.content}
                </p>
              )}

              <div className="flex items-center gap-5 text-sm text-gray-300">
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
      </div>
    </div>
  );
};

export default HomePage;
