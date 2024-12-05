import React, { useState } from "react";
import alexa from "../assets/alexa-miller.jpg";
import sabrina from "../assets/sabrina.svg";
import sza from "../assets/sza.svg";
import frank from "../assets/frank.svg";
import CommentsPopup from './commentsPopup'; // Import CommentsPopup
import ProfilePlaylist from "./profilePlaylist"; // Import ProfilePlaylist
import playlistpic1 from "../assets/playlist4-pic.jpg";
import playlistpic2 from "../assets/playlist5-pic.jpg";
import playlistpic3 from "../assets/playlist3-pic.jpg";

function alexaProfile({onBack}) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // Store the selected playlist
  const [showConfirmUnfollowPopup, setShowConfirmUnfollowPopup] = useState(false); // Track popup visibility
  const [isFollowing, setIsFollowing] = useState(true); // Track follow status


  const user = {
    fullName: "Alexa Miller",
    username: "itsalexa",
    bio: "music major! 📚🎵",
    profilePicture: alexa,
    posts: [
      {
        id: 1,
        content: "If you like R&B, you gotta listen to this.",
        thumbnail: sza,
        createdAt: "Oct 29, 2024",
        song: "Good Days",
        artist: "SZA",
        comments: [
          { user: "Mira", text: "Love this" },
          { user: "Kevin", text: "The beat is amazing!" },
        ],
      },
      {
        id: 2,
        content: "Awesome song!",
        thumbnail: frank,
        createdAt: "2024-10-24",
        song: "Ivy",
        artist: "Frank Ocean",
        comments: [
          { user: "Cindy", text: "Adding this to my playlist!" },
        ],
      },
    ],
    followers: 100,
    following: 90,
    playlists: [
      { name: "Liked Songs", pic: playlistpic1, songs: [{ title: "Taste", artist: "Sabrina Carpenter", duration: "2:37", cover: sabrina }] },
      { name: "classical classics", pic: playlistpic2, songs: [{ title: "Good Days", artist: "SZA", duration: "3:30", cover: sza }] },
      { name: "moody", pic: playlistpic3, songs: [{ title: "Ivy", artist: "Frank Ocean", duration: "4:05", cover: frank }] },
    ],
  };

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist); // Set the selected playlist
  };

  const handleBackToProfile = () => {
    setSelectedPlaylist(null); // Clear the selected playlist
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setShowConfirmUnfollowPopup(false);
    console.log(`You have unfollowed ${user.fullName}`);
  };

  const handleFollow = () => {
    setIsFollowing(true);
    console.log(`You are now following ${user.fullName}`);
  };

  const closeUnfollowPopup = () => {
    setShowConfirmUnfollowPopup(false);
  };

  // Render the playlist screen if a playlist is selected
  if (selectedPlaylist) {
    return <ProfilePlaylist playlist={selectedPlaylist} onBack={handleBackToProfile} />;
  }

  // Default: Profile Screen
  return (
    <div className="absolute left-[360px] top-[30px] w-[1050px] h-[630px] bg-[#2F2C50] rounded-[25px]">
      {/* Top Section */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#19182D] rounded-t-[25px]">
      <div className="mt-[25px] flex items-center gap-5">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-[200px] h-[200px] rounded-full border-4 border-[#19182D] ml-[80px] mr-[20px] object-cover"
          />
          <div>
            <h3 className="text-white text-4xl font-bold absolute top-[50px]">{user.fullName}</h3>
            <p className="text-[#E2BBE9] absolute top-[105px]">@{user.username}</p>
            <p className="text-gray-300 absolute top-[135px]">{user.bio}</p>
            <div className="mt-3 flex gap-12 absolute top-[165px] left-[320px]">
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
        {/* Back Button */}
        <button 
            onClick={onBack} 
            className="absolute top-4 left-4 w-[30px] h-[30px] rounded-full bg-[#2F2C50] flex items-center justify-center transition duration-300 ease-in-out hover:filter hover:brightness-125"
        >
            <img src="/assets/icons/chevron-left-svgrepo-com.svg" alt="Back" className="w-15 h-10 -ml-[2.5px]" />
        </button>
      {/* Follow/Unfollow Button */}
      {isFollowing ? (
          <button
            className="bg-[#5A639C] text-[#E2BBE9] py-2 px-4 absolute top-[20px] right-[30px] rounded-full"
            onClick={() => setShowConfirmUnfollowPopup(true)}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="bg-[#5A639C] text-[#E2BBE9] py-2 px-4 absolute top-[20px] right-[30px] rounded-full"
            onClick={handleFollow}
          >
            Follow
          </button>
        )}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#2F2C50] p-6 rounded-b-[25px]">
        <h2 className="text-white text-2xl font-bold mb-6 mr-2">Posts & Playlists</h2>
        <div className="flex space-x-4 h-[calc(100%-40px)]">
        {/* Posts Section */}
        <div className="w-1/2 bg-[#19182D] p-4 mb-4 rounded-xl flex flex-col h-[280px]"> {/* Adjust height as needed */}
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
                background-color: #2A2945;
                border-radius: 10px;
              }
            `}
          </style>

          {/* Sticky Title */}
          <div className="flex-shrink-0 mb-4">
            <h3 className="text-[#E2BBE9] text-xl font-semibold">Posts ({user.posts.length})</h3>
          </div>

          {/* Posts List - Scrollable Area */}
          <div className="posts-container overflow-y-auto flex-grow p-4">
            {user.posts.map((post) => (
              <div key={post.id} className="relative mb-12 w-full">
                <div 
                  className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-[440px] h-[59px] cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="w-[97px] h-[97px] rounded-full border-2 border-[#2F2C50] ml-[20px] overflow-hidden flex-shrink-0">
                    <img 
                      src={post.thumbnail}
                      alt={`${post.content} Thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg text-[#2F2C50] font-medium">{post.content.slice(0, 20)}</h3>
                    <p className="text-[#2F2C50] font-light">
                      {post.song} • {post.artist.slice(0, 5)} | {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <img
                    src="/assets/icons/circle-play-svgrepo-com copy.svg"
                    alt="View Post"
                    className="w-10 h-10 ml-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

 {/* Playlists Section */}
 <div className="w-1/2 bg-transparent p-4 mb-4 rounded-xl flex flex-col h-[280px]">
            <style>
              {`
                .playlists-container::-webkit-scrollbar {
                  width: 8px;
                }
                .playlists-container::-webkit-scrollbar-thumb {
                  background-color: #6B5DD3;
                  border-radius: 10px;
                  border: 2px solid #3A3955;
                }
                .playlists-container::-webkit-scrollbar-thumb:hover {
                  background-color: #584CC6;
                }
                .playlists-container::-webkit-scrollbar-track {
                  background-color: #2A2945;
                  border-radius: 10px;
                }
              `}
            </style>
            <div className="flex-shrink-0 mb-4">
              <h3 className="text-[#E2BBE9] text-xl font-semibold">Playlists ({user.playlists.length})</h3>
            </div>
            <div className="playlists-container overflow-y-auto flex-grow p-4">
              {user.playlists.map((playlist) => (
                <div key={playlist.id} className="relative mb-12 w-full">
                  <div 
                    className="flex items-center bg-[#19182D] rounded-[80px] p-4 w-[440px] h-[59px] cursor-pointer"
                    onClick={() => handlePlaylistClick(playlist)}
                  >
                    <div className="w-[97px] h-[97px] rounded-full border-2 border-[#19182D] ml-[20px] overflow-hidden flex-shrink-0">
                      <img 
                        src={playlist.pic}
                        alt={`${playlist.name} Cover`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-[16px] text-white font-medium">{playlist.name}</h3>
                      <p className="text-white font-light">{playlist.songs.length} songs</p>
                    </div>
                    <img
                      src="/assets/icons/profilePlayButton.svg"
                      alt="Play Playlist"
                      className="w-10 h-10 ml-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Popup */}
      {selectedPost && (
        <CommentsPopup
          post={selectedPost}
          onClose={() => setSelectedPost(null)} // Close the popup when back button is clicked
        />
      )}

{showConfirmUnfollowPopup && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-60 backdrop-blur-md z-40"
            onClick={closeUnfollowPopup}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#9B86BD] text-[#2F2C50] text-lg p-6 rounded-[25px] w-[400px] min-h-[175px] flex flex-col items-center justify-between">
              <h3 className="text-[#2F2C50] font-bold text-xl mb-2">Unfollow {user.fullName}?</h3>
              <p className="text-center mb-4 overflow-y-auto max-h-[100px]">
                Are you sure you want to unfollow @{user.username}?
              </p>
              <div className="flex justify-center space-x-16">
                <button
                  onClick={handleUnfollow}
                  className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Unfollow
                </button>
                <button
                  onClick={closeUnfollowPopup}
                  className="border border-[#2F2C50] text-[#2F2C50] px-4 py-2 rounded-[15px] hover:bg-[#2F2C50] hover:text-white transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default alexaProfile;
