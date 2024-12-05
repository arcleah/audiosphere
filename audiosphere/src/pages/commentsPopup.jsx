import React, { useState } from "react";
import sabrina from "../assets/sabrina.svg";
import frank from "../assets/frank.svg";
import kanye from "../assets/kanye.svg";
import SZA from "../assets/sza.svg";
import jackie from "../assets/jackie.svg";

const CommentsPopup = ({ post, onClose }) => {
  const [comments, setComments] = useState([
    { user: "Alexa", text: "2 mins ago", content: "Mid" },
    { user: "Jessica", text: "1 min ago", content: "Great post!" },
  ]);
  const [newComment, setNewComment] = useState("");

  // Function to get the correct artist image based on the artist name
  const getArtistImage = (artist) => {
    switch (artist) {
      case "Frank Ocean":
        return frank;
      case "SZA":
        return SZA;
      case "Sabrina Carpenter":
        return sabrina;
      case "Kanye West":
        return kanye;
      default:
        return jackie; // Default image if the artist is not listed
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { user: "Mira", text: "Just now", content: newComment },
      ]);
      setNewComment("");
    }
  };

  const handleRemoveComment = (index) => {
    const commentToRemove = comments[index];
    // Ensure Mira can only remove her own comments
    if (commentToRemove.user === "Mira") {
      const updatedComments = comments.filter((_, idx) => idx !== index);
      setComments(updatedComments);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-[#1D1B31] rounded-3xl w-[500px] p-6 shadow-2xl text-white">
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

        {/* Header Section */}
        <div className="relative flex items-center mb-4">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="absolute left-0 text-gray-300 hover:text-white transition p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6B5DD3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.25 19.25L8.75 12l6.5-7.25"
              />
            </svg>
          </button>

          {/* Username */}
          <span className="mx-auto font-semibold text-lg">{post.username}</span>

          {/* Timestamp */}
          <span className="absolute right-0 text-sm text-gray-400">
            {post.date}
          </span>
        </div>

        {/* Original Post Content */}
        <div className="bg-[#2A2945] p-4 rounded-xl mb-4">
          <h5 className="font-semibold mb-2">Original Post</h5>
          <div className="bg-[#3A3955] text-sm rounded-lg p-3">
            <p className="font-medium text-white">{post.username}:</p>
            <p className="text-gray-300">{post.content}</p>
          </div>
        </div>

        {/* Profile and Song Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
            <img
              src={getArtistImage(post.artist)} // Dynamically choose artist image
              alt={post.artist}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">{post.song}</h4>
            <p className="text-sm text-gray-400">{post.artist} | 2:37</p>
          </div>
          <button className="mt-2 bg-[#6B5DD3] hover:bg-[#584CC6] text-white rounded-full px-4 py-2 flex items-center gap-2">
            <span>Play</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path d="M5 3l15 9-15 9V3z" />
            </svg>
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6 space-y-4 bg-[#2A2945] rounded-xl p-4 max-h-[300px] overflow-y-auto">
          <h5 className="font-semibold mb-2">Comments</h5>
          {comments.map((comment, index) => (
            <div key={index} className="space-y-2">
              {/* Timestamp above the comment */}
              <div className="text-xs text-gray-400 text-right">
                {comment.text}
              </div>

              {/* Comment content */}
              <div className="bg-[#3A3955] text-sm rounded-lg p-3 flex justify-between items-center">
                <div>
                  <span className="font-medium text-white">
                    {comment.user}:
                  </span>
                  <p className="text-gray-300">{comment.content}</p>
                </div>
                {/* Trashcan Icon for Removing Comment */}
                {comment.user === "Mira" && (
                  <button
                    onClick={() => handleRemoveComment(index)}
                    className="ml-2 p-1 rounded-full hover:bg-gray-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6 text-gray-500 hover:text-gray-700"
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
          ))}
        </div>

        {/* Add Comment Input */}
        <div className="mt-4 flex items-center gap-3">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 bg-[#2A2945] text-white border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-[#6B5DD3] outline-none"
          />
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="bg-[#6B5DD3] hover:bg-[#584CC6] text-white rounded-full px-4 py-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsPopup;
