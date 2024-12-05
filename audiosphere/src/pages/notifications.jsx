import React, { useState } from "react";
import mira from "../assets/mira.svg";
import sabrina from "../assets/sabrina.svg";
import kanye from "../assets/kanye.svg";
import jackie from "../assets/jackie.svg";
import frank from "../assets/frank.svg";

const NotificationsPage = () => {

  return (
    <div className="relative">
        <div className="absolute left-[85px] top-[17px] w-[980px]">
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
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]">
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
                <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]">
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
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden z-20 -translate-y-3 border border-black">
                <img src={jackie} className="w-full h-full object-cover"/>
              </div>
              {/* Mira's photo positioned diagonally */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -right-7 -bottom-2 z-10 border border-black">
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
            <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]">
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
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden z-20 -translate-y-3 border border-black">
                <img src={frank} className="w-full h-full object-cover"/>
              </div>
              {/* Mira's photo positioned diagonally */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -right-7 -bottom-2 z-10 border border-black">
                <img src={mira} className="w-full h-full object-cover"/>
              </div>
            </div>
            
            <div className="ml-8 flex-grow">
              <h3 className="text-lg text-[#2F2C50]">
                <span className="font-bold">Frank Ocean</span> Accepted your friend request
              </h3>
            </div>
            <button className="ml-auto mr-2 cursor-pointer font-bold text-xl text-[#2F2C50]">
              View
            </button>
          </div>
        </div>
        </div>
    </div>

  );
};

export default NotificationsPage;
