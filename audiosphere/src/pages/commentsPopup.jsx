// CommentsPopup.js
import React, { useState } from "react";

const CommentsPopup = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]); // Store comments
  const [newComment, setNewComment] = useState(""); // Store new comment input

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); // Clear input field after adding
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Comments</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg">
              <p>{comment}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            className="border rounded-lg p-2 w-full"
          />
          <button
            onClick={handleAddComment}
            className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsPopup;
