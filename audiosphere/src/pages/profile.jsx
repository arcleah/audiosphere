// function ProfilePage() {
//   return (
//     <div>
//       <h1>Profile</h1>
//     </div>
//   );
// }

// export default ProfilePage;
import React from "react";
import "../styles/Profile.css"; // Add styling for this component

function ProfilePage() {
  // Mocked user data
  const user = {
    fullName: "Alexa Miller",
    username: "itsalexa",
    bio: "<description>",
    profilePicture: "https://via.placeholder.com/120",
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

  // Render the profile page
  return (
    <div className="profile-page">
      {/* Header Section */}
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-pic" />
        <h2>{user.fullName}</h2>
        <p className="username">@{user.username}</p>
        <p>{user.bio}</p>
        <button className="unfollow-btn">Unfollow</button>
      </div>

      {/* Posts Section */}
      <div className="profile-section">
        <h3>Posts ({user.posts.length})</h3>
        <div className="posts">
          {user.posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.thumbnail} alt={post.content} className="post-img" />
              <div>
                <p>{post.content}</p>
                <small>{post.createdAt}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Playlists Section */}
      <div className="profile-section">
        <h3>Playlists</h3>
        <div className="playlists">
          {user.playlists.map((playlist, index) => (
            <div className="playlist" key={index}>
              <div className="playlist-icon">🎵</div>
              <p>{playlist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
