import React, { useState } from "react";
import InputField from "./inputfield";
import Notification from "./popupmessage";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setShowNotification(true); // Show error notification
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
      return;
    }
    onLogin(); // Proceed with login logic
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 to-purple-700">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">AUDIOSPHERE</h1>
          <p className="text-xl">Discover. Connect. Play.</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          {/* Error Notification */}
          {showNotification && (
            <Notification
              message="Please fill out all fields!"
              type="error"
              onClose={() => setShowNotification(false)}
            />
          )}

          <h2 className="text-3xl font-semibold mb-6 text-center">Sign In</h2>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            togglePassword={togglePassword}
          />
          <button
            onClick={handleLogin}
            className="bg-purple-600 text-white py-3 px-6 rounded-lg w-full hover:bg-purple-700"
          >
            Sign In
          </button>
          <p className="text-gray-600 mt-4 text-center">
            New user?{" "}
            <a href="/signup" className="text-purple-600">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
