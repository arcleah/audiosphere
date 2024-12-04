import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import mira from "../assets/mira-hart.jpg";
import sabrina from "../assets/sabrina.svg";
import sza from "../assets/sza.svg";
import frank from "../assets/frank.svg";
import CommentsPopup from './CommentsPopup';  // Import the CommentsPopup component

function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const user = {
    fullName: "Mira Hart",
    username: "mira.hart",
    bio: "music enthusiast!",
    profilePicture: mira,
    posts: [
      {
        id: 1,
        content: "I loveee this song!!!",
        thumbnail: sabrina,
        createdAt: "Oct 30, 2024",
        song: "Taste",
        artist: "Sabrina Carpenter",
        comments: [
          { user: "Alexa", text: "I love this song too!" },
          { user: "Kevin", text: "The beat is amazing!" },
        ],
      },
      {
        id: 2,
        content: "Awesome song!",
        thumbnail: sza,
        createdAt: "2024-10-24",
        song: "Good Days",
        artist: "SZA",
        comments: [
          { user: "Cindy", text: "Adding this to my playlist!" },
        ],
      },
      {
        id: 3,
        content: "This track is on repeat! 🎧",
        thumbnail: frank,
        createdAt: "2024-10-01",
        song: "Ivy",
        artist: "Frank Ocean",
        comments: [
          { user: "Emily", text: "I can't stop listening to it either!" },
          { user: "John", text: "Same here, it’s on loop!" },
        ],
      },
    ],
    followers: 250,
    following: 180,
    playlists: [
      { name: "Liked Songs", link: "/playlist" },
      { name: "Classical Classics" },
      { name: "Throwbacks n More" },
    ],
  };

  return (
    <div className="fixed top-[15%] right-[30px] w-[70%] h-[70%] max-h-[70%] bg-[#2F2C50] rounded-xl p-5 shadow-lg overflow-hidden flex flex-col">
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
                <p className="text-xl font-bold text-[#E2BBE9]">{user.posts.length}</p>
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
        <button className="bg-[#5A639C] text-[#E2BBE9] py-2 px-4 absolute top-[20px] right-[30px] rounded-full">
          Edit Profile
        </button>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#2F2C50] p-6 rounded-b-xl">
        <h2 className="text-white text-2xl font-bold mb-4">Posts & Playlists</h2>
        <div className="flex space-x-4 h-[calc(100%-40px)]">
          <div className="w-1/2 bg-[#19182D] p-4 rounded-xl overflow-y-auto">
            <h3 className="text-[#E2BBE9] text-xl font-semibold">Posts ({user.posts.length})</h3>
            <div className="mt-[20px] ml-[8px] p-2">
              {user.posts.map((post) => (
                <div key={post.id} className="relative mb-10 w-50%">
                  <div
                    className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px] cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <img
                      src={post.thumbnail}
                      alt={`${post.content} Thumbnail`}
                      className="w-[100px] h-[100px] rounded-full ml-[20px]"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm text-[#2F2C50] font-small">
                        {post.content.slice(0, 20)}
                      </h3>
                      <p className="text-xs text-[#2F2C50] font-semibold">{post.song} • {post.artist.slice(0,5)} | {new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                    <button className="ml-auto cursor-pointer">
                      <img
                        src="/assets/icons/circle-play-svgrepo-com copy.svg"
                        alt="View Post"
                        className="w-10 h-10"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playlists Section */}
          <div className="w-1/2 bg-[#2F2C50] p-4 rounded-lg">
            <h3 className="text-[#E2BBE9] text-xl font-semibold">Playlists</h3>
            <div className="flex flex-col gap-4 mt-3">
              {user.playlists.map((playlist, index) => (
                <button
                  key={index}
                  onClick={() => navigate(playlist.link)}
                  className="flex items-center bg-[#19182D] p-3 rounded-lg text-white text-l hover:bg-[#5A639C] transition-all duration-300"
                >
                  <div className="mr-3">🎵</div>
                  <p>{playlist.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Popup */}
      {selectedPost && (
        <CommentsPopup
          post={selectedPost}
          onClose={() => setSelectedPost(null)}  // Close the popup when back button is clicked
        />
      )}
    </div>
  );
}

export default ProfilePage;
