import React, { useState } from "react";
import mira from "../assets/mira.svg";
import sabrina from "../assets/sabrina.svg";
import kanye from "../assets/kanye.svg";
import jackie from "../assets/jackie.svg";
import SZA from "../assets/SZA.svg";
import alexa from "../assets/alexa-miller.jpg";
import CommentsPopup from "./commentsPopup";
import ProfilePopup from "./profilePopup";
import frank from "../assets/frank.svg";
import playlistpic1 from "../assets/playlist4-pic.jpg";
import playlistpic2 from "../assets/playlist5-pic.jpg";
import playlistpic3 from "../assets/playlist3-pic.jpg";

const NotificationsPage = () => {
  const [isCommentPopupVisible, setIsCommentPopupVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCommentClick = (notification) => {
    setCurrentNotification({
      id: notification.id,
      username: notification.username,
      date: notification.date,
      content: notification.content,
      song: notification.song,
      artist: notification.artist
    });
    setIsCommentPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsCommentPopupVisible(false);
    setCurrentNotification(null);
  };

  return (
    <div className="relative h-screen overflow-y-auto py-2 pt-10 flex-1 max-h-[650px] posts-container">
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
        <div className="absolute left-[85px] top-[17px] w-[1000px]">
                {/* Header section */}
          <h1 className="text-[#E2BBE9] text-4xl font-bold mb-8">What's New?</h1>
          <h2 className="text-[#E2BBE9] text-3xl">Today</h2>
          <hr className="border-black border-t-[1.5px] ml-1 my-4 w-[650px]"/>

          <div className="mt-[30px] ml-[8px] p-2">
            <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
                <img src={sabrina} className="w-[100px] h-[100px] rounded-full ml-[20px] object-cover border border-black"/>
                <div className="ml-5 flex-grow">
                  <h3 className="text-lg text-[#2F2C50]">
                    <span className="font-bold">Alexa Miller</span> Commented on your post
                  </h3>
                  <div className="flex items-center gap-1 text-base text-[#2F2C50] font-semibold">
                    <svg
                      className="w-6 h-6"
                      fill={"none"}
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    10.2k
                    <svg
                      className="w-6 h-6 ml-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14l4 4z" />
                    </svg>
                    843
                  </div>
                </div>
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
                onClick={() => handleCommentClick({
                    id: 3,
                    username: "@mira.hart",
                    date: "Oct 30, 2024",
                    content: "I loveee this song!!!",
                    song: "Taste",
                    artist: "Sabrina Carpenter",
                })}>
                  View
                </button>
            </div>
        </div>

        <div className="mt-[40px] ml-[8px] p-2">
            <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
                <img src={kanye} className="w-[100px] h-[100px] rounded-full ml-[20px] object-cover border border-black"/>
                <div className="ml-5 flex-grow">
                  <h3 className="text-lg text-[#2F2C50]">
                    <span className="font-bold">Jessica Thompson</span> Replied to your comment on her post
                  </h3>
                </div>
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
                onClick={() => handleCommentClick({
                    id: 3,
                    username: "@thompsonjessica",
                    date: "Oct 30, 2024",
                    content: "One of my favorites!",
                    song: "Glory",
                    artist: "Kanye West",
                })}>
                  View
                </button>
            </div>
        </div>
        <h2 className="text-[#E2BBE9] text-3xl mt-6">Yesterday</h2>
        <hr className="border-black border-t-[1.5px] ml-1 my-4 w-[650px]"/>

        <div className="mt-[30px] ml-[8px] p-2">
          <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
            <div className="relative flex items-center ml-[10px] mr-[10px]">
              {/* Dave's photo */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden z-10 -translate-y-3 border border-black">
                <img src={jackie} className="w-full h-full object-cover"/>
              </div>
              {/* Mira's photo positioned diagonally */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -right-7 -bottom-2 border border-black">
                <img src={mira} className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <div className="ml-8 flex-grow">
              <h3 className="text-lg text-[#2F2C50]">
                <span className="font-bold">Dave</span> Sent you a friend request
              </h3>
              <p className="text-[#2F2C50] font-semibold">
                <button>Accept</button> | <button>Decline</button>
              </p>
            </div>
            <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
            onClick={() => {
              setSelectedUser({
                fullName: "Dave",
                username: "grandpadave",
                bio: "I have 7 grandkids.",
                profilePicture: jackie,
                posts: [],
                followers: 50,
                following: 30,
                playlists: []
              });
              setShowProfile(true);
              }}>
              View
            </button>
          </div>
        </div>
        <h2 className="text-[#E2BBE9] text-3xl mt-6">November 1, 2024</h2>
        <hr className="border-black border-t-[1.5px] ml-1 my-4 w-[650px]"/>

        <div className="mt-[30px] ml-[8px] p-2">
          <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
            <div className="relative flex items-center ml-[10px] mr-[10px]">
              {/* Dave's photo */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden z-10 -translate-y-3 border border-black">
                <img src={alexa} className="w-full h-full object-cover"/>
              </div>
              {/* Mira's photo positioned diagonally */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -right-7 -bottom-2 border border-black">
                <img src={mira} className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <div className="ml-8 flex-grow">
              <h3 className="text-lg text-[#2F2C50]">
                <span className="font-bold">Alexa Miller</span> Accepted your friend request
              </h3>
            </div>
            <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
            onClick={() => {
              setSelectedUser({
                fullName: "Alexa Miller",
                username: "itsalexa",
                bio: "music major! 📚🎵",
                profilePicture: alexa,
                posts: [
                  {
                    id: 1,
                    content: "If you like R&B, you gotta listen to this.",
                    thumbnail: SZA,
                    createdAt: "Oct 29, 2024",
                    song: "Drew Barrymore",
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
                  { name: "classical classics", pic: playlistpic2, songs: [{ title: "Good Days", artist: "SZA", duration: "3:30", cover: SZA }] },
                  { name: "moody", pic: playlistpic3, songs: [{ title: "Ivy", artist: "Frank Ocean", duration: "4:05", cover: frank }] },
                ]
              });
              setShowProfile(true);
              }}>
              View
            </button>
          </div>
        </div>
        <h2 className="text-[#E2BBE9] text-3xl mt-6">Last Month</h2>
        <hr className="border-black border-t-[1.5px] ml-1 my-4 w-[650px]"/>

        <div className="mt-[30px] ml-[8px] p-2">
            <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
                <img src={SZA} className="w-[100px] h-[100px] rounded-full ml-[20px] object-cover border border-black"/>
                <div className="ml-5 flex-grow">
                  <h3 className="text-lg text-[#2F2C50]">
                    <span className="font-bold">Jessica Thompson</span> Commented on your post
                  </h3>
                  <div className="flex items-center gap-1 text-base text-[#2F2C50] font-semibold">
                    <svg
                      className="w-6 h-6"
                      fill={"none"}
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    912
                    <svg
                      className="w-6 h-6 ml-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14l4 4z" />
                    </svg>
                    14
                  </div>
                </div>
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
                onClick={() => handleCommentClick({
                    id: 3,
                    username: "@mira.hart",
                    date: "Oct 30, 2024",
                    content: "Awesome song!",
                    song: "Good Days",
                    artist: "SZA",
                })}>
                  View
                </button>
            </div>
        </div>

        <div className="mt-[40px] ml-[8px] p-2">
            <div className="flex items-center bg-[#9B86BD] rounded-[80px] p-4 w-100% h-[59px]">
                <img src={SZA} className="w-[100px] h-[100px] rounded-full ml-[20px] object-cover border border-black"/>
                <div className="ml-5 flex-grow">
                  <h3 className="text-lg text-[#2F2C50]">
                    <span className="font-bold">Jessica Thompson</span> Liked your post
                  </h3>
                  <div className="flex items-center gap-1 text-base text-[#2F2C50] font-semibold">
                    <svg
                      className="w-6 h-6"
                      fill={"none"}
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    912
                    <svg
                      className="w-6 h-6 ml-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14l4 4z" />
                    </svg>
                    13
                  </div>
                </div>
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]"
                onClick={() => handleCommentClick({
                    id: 3,
                    username: "@mira.hart",
                    date: "Oct 30, 2024",
                    content: "Awesome song!",
                    song: "Good Days",
                    artist: "SZA",
                })}>
                  View
                </button>
            </div>
        </div>
        {isCommentPopupVisible && (
          <CommentsPopup 
            post={currentNotification} 
            onClose={handleClosePopup} 
          />
        )}

        {showProfile && selectedUser && (
          <ProfilePopup 
            user={selectedUser}
            onClose={() => {
              setShowProfile(false);
              setSelectedUser(null);
            }}
          />
        )}
        </div>
    </div>
  );
};

export default NotificationsPage;
