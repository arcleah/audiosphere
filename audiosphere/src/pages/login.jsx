import React, { useState } from "react";
import InputField from "./inputfield";
import Notification from "./popupmessage";
import AudioSphere from "./../assets/audiosphere.svg";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }
    onLogin();
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#1a1b26] flex items-center justify-center p-0">
        <img
          src={AudioSphere}
          alt="AudioSphere Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#5A639C]">
        {/* Header matching login box width */}
        <div className="w-full max-w-md p-4 mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            Discover. Connect. Play.
          </h1>
        </div>

        {/* Login Box */}
        <div className="w-full max-w-md p-10 bg-[#9886BD] rounded-lg">
          {showNotification && (
            <Notification
              message="Please fill out all fields!"
              type="error"
              onClose={() => setShowNotification(false)}
            />
          )}

          <div className="space-y-6">
            <InputField
              label="Enter email or username"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Enter password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              togglePassword={togglePassword}
            />
            {/* Forgot Password Link */}
            <div className="text-right">
              <button className="text-white font-bold underline hover:text-[#F0D5F3] transition duration-200">
                Forgot password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#5A639C] text-white py-3 px-6 rounded-lg w-full hover:bg-[#7776B3] transition duration-300"
            >
              Log in
            </button>
            <p className="text-white text-center">
              New user?{" "}
              <a
                href="/signup"
                className="text-white font-bold underline hover:text-[#F0D5F3] transition duration-200"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
