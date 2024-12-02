import React from "react";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      username: "@theseanrivers",
      date: "Oct 28, 2024",
      content: "Check out my song!",
      song: "Seigfried",
      artist: "Sean Rivers",
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
      content: "My grandkids recommended this to me! I think its groovy!",
      song: "Rainy Tapestry",
      artist: "Lamp",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#7776B3] rounded-lg p-6 flex items-start gap-6 shadow-lg"
          >
            {/* Profile Picture and Play Button */}
            <div className="relative w-20 h-20 flex-shrink-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full hover:bg-black/40 transition duration-300"
                aria-label="Play"
              >
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </button>
            </div>

            {/* Post Content */}
            <div className="flex-1 min-w-0">
              {/* User Info and Date */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-white text-sm">
                  {post.username}
                </span>
                <span className="text-xs text-gray-300">{post.date}</span>
              </div>

              {/* Post Text */}
              {post.content && (
                <p className="text-sm text-white mb-4 break-words">
                  {post.content}
                </p>
              )}

              {/* Icons and Song Info */}
              <div className="flex items-center gap-5 text-sm text-gray-300">
                {/* Like Button */}
                <button
                  className="hover:text-red-500 transition duration-300"
                  aria-label="Like"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>

                {/* Comment Button */}
                <button
                  className="hover:text-blue-500 transition duration-300"
                  aria-label="Comment"
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

                {/* Music Button */}
                {post.song && (
                  <button
                    className="hover:text-green-500 transition duration-300"
                    aria-label="Music"
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
                )}

                {/* Song and Artist Info */}
                {post.song && (
                  <div className="text-white">
                    <span className="font-medium">{post.song}</span>
                    {post.artist && (
                      <span className="text-gray-300"> • {post.artist}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
