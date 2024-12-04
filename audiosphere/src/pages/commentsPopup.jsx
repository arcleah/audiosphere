import React, { useState } from "react";
import sabrina from "../assets/sabrina.svg";

const CommentsPopup = ({ postId, onClose }) => {
  const [comments, setComments] = useState([
    { user: "Alexa", text: "Just now", content: "Mid" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { user: "Mira", text: "Just now", content: newComment },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-[#1D1B31] rounded-3xl w-[500px] p-6 shadow-2xl text-white">
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
          <span className="mx-auto font-semibold text-lg">@mira.hart</span>

          {/* Timestamp */}
          <span className="absolute right-0 text-sm text-gray-400">
            Oct 30, 2024
          </span>
        </div>

        {/* Profile and Song Info */}
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
            <img
              src={sabrina}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Taste</h4>
            <p className="text-sm text-gray-400">Sabrina Carpenter | 2:37</p>
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
        <div className="mt-6 space-y-4 bg-[#2A2945] rounded-xl p-4">
          <h5 className="font-semibold mb-2">Comments</h5>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-[#3A3955] text-sm rounded-lg p-3 flex justify-between items-center"
            >
              <span className="font-medium text-white">{comment.user}:</span>
              <p className="text-gray-300">{comment.content}</p>
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
