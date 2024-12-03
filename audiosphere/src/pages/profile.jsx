import React, { useState } from "react";

function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const user = {
    fullName: "Mira Hart",
    username: "mira.hart",
    bio: "music enthusiast!",
    profilePicture: "https://via.placeholder.com/150",
    posts: [
      {
        id: 1,
        content: "I just now luv this",
        thumbnail: "https://via.placeholder.com/150",
        createdAt: "2024-11-25",
        comments: [
          { user: "Alexa", text: "I love this song too!" },
          { user: "Kevin", text: "The beat is amazing!" },
        ],
      },
      {
        id: 2,
        content: "Awesome song!",
        thumbnail: "https://via.placeholder.com/150",
        createdAt: "2024-11-24",
        comments: [
          { user: "Cindy", text: "Adding this to my playlist!" },
        ],
      },
    ],
    playlists: [
      { name: "Liked Songs" },
      { name: "Classical Classics" },
      { name: "Throwbacks n More" },
    ],
  };

  return (
    <div className="absolute top-[420px] right-[50px] translate-y-[-50%] w-[1490px] h-[780px] bg-[#2F2C50] rounded-xl p-5 shadow-lg overflow-hidden flex flex-col">
      {/* Top Section */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-[#19182D] p-6 rounded-t-xl">
        <div className="mt-3 flex items-center gap-5">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-[#19182D] ml-60 mr-20"
          />
          <div>
            <h3 className="text-white text-4xl font-bold">{user.fullName}</h3>
            <p className="text-[#E2BBE9]">@{user.username}</p>
            <p className="text-gray-300">{user.bio}</p>
          </div>
        </div>
        <button className="bg-[#5A639C] text-[#E2BBE9] py-2 px-4 absolute top-[130px] right-[300px] rounded-full">
          Edit Profile
        </button>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#2F2C50] p-6 rounded-b-xl">
        <h2 className="text-white text-3xl font-bold mt-[-90px]">Posts & Playlists</h2>

        <div className="flex mt-6 space-x-6">
          {/* Posts Section */}
          <div className="w-1/2 bg-[#19182D] p-6 rounded-lg">
            <h3 className="text-white text-3xl font-semibold">Posts ({user.posts.length})</h3>
            <div className="flex flex-col gap-5 mt-3">
              {user.posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#2F2C50] rounded-lg p-4 flex items-center gap-4 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Circular Thumbnail */}
                  <img
                    src={post.thumbnail}
                    alt={post.content}
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                  {/* Post Details */}
                  <div>
                    <p className="text-[#E2BBE9] font-semibold">
                      {user.fullName}{" "}
                      <span className="text-gray-400">
                        @{user.username} | {post.createdAt}
                      </span>
                    </p>
                    <p className="text-white">{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playlists Section */}
          <div className="w-1/2 bg-[#2F2C50] p-6 rounded-lg">
            <h3 className="text-white text-3xl font-semibold">Playlists</h3>
            <div className="flex flex-col gap-4 mt-3">
              {user.playlists.map((playlist, index) => (
                <div key={index} className="flex items-center bg-[#2F2C50] p-3 rounded-lg">
                  <div className="text-white text-xl mr-3">🎵</div>
                  <p className="text-white">{playlist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Post Modal */}
      {selectedPost && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="bg-[#2F2C50] p-6 rounded-lg text-white w-[500px] shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              {/* Thumbnail */}
              <img
                src={selectedPost.thumbnail}
                alt={selectedPost.content}
                className="w-[60px] h-[60px] rounded-full object-cover"
              />
              {/* User Details */}
              <div>
                <h3 className="text-lg font-bold">{user.fullName}</h3>
                <p className="text-gray-400 text-sm">
                  @{user.username} | {selectedPost.createdAt}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <div className="bg-[#403D66] p-4 rounded-lg mb-4">
              <p className="text-gray-300">{selectedPost.content}</p>
            </div>

            {/* Comments Section */}
            <div className="mt-4">
              <h4 className="text-gray-400 mb-2">Comments</h4>
              <div className="bg-[#403D66] p-3 rounded-lg">
                {selectedPost.comments && selectedPost.comments.length > 0 ? (
                  selectedPost.comments.map((comment, index) => (
                    <div key={index} className="mb-2">
                      <p className="text-sm">
                        <span className="font-bold">{comment.user}:</span>{" "}
                        {comment.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No comments yet. Be the first to comment!</p>
                )}
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="mt-2 w-full p-2 rounded-lg bg-[#2F2C50] text-gray-300 text-sm"
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              className="mt-4 bg-[#5A639C] py-2 px-4 rounded-lg text-[#E2BBE9] w-full hover:bg-[#4E5786]"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
