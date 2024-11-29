import React from "react";

function ProfilePage() {
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
      },
      {
        id: 2,
        content: "Awesome song!",
        thumbnail: "https://via.placeholder.com/150",
        createdAt: "2024-11-24",
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
    {/* Profile Picture and Username */}
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

    {/* Edit Profile Button */}
    <button className="bg-[#5A639C] text-[#E2BBE9] py-2 px-4 absolute top-[130px] right-[300px] rounded-full">
      Edit Profile
    </button>
  </div>
  
{/* Bottom Section */}
<div className="absolute bottom-0 left-0 w-full h-[50%] bg-[#2F2C50] p-6 rounded-b-xl">
  <h2 className="text-white text-3xl font-bold mt-[-90px]">Posts & Playlists</h2>

  <div className="flex mt-6 space-x-6"> {/* Flex container for left-right layout */}
    
    {/* Posts Section */}
    <div className="w-1/2 bg-[#19182D] p-6 rounded-lg">
      <h3 className="text-white text-3xl font-semibold">Posts ({user.posts.length})</h3>
      <div className="flex flex-wrap gap-5 mt-3">
        {user.posts.map((post) => (
          <div key={post.id} className="bg-[#2F2C50] rounded-lg p-4 w-[200px] text-center">
            <img
              src={post.thumbnail}
              alt={post.content}
              className="w-full rounded-lg mb-2"
            />
            <p className="text-white">{post.content}</p>
            <small className="text-gray-400">{post.createdAt}</small>
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

    </div>  
  );
}

export default ProfilePage;
