import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./inputfield";
import Notification from "./popupmessage";

export default function SignUp({ onSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate(); // For routing

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3s
      return;
    }

    // Call onSignup to set the logged-in state in App.jsx
    onSignup();

    // Navigate to the profile page after successful signup
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#19182D]">
      {/* AudioSphere logo text */}
      <div className="absolute top-6 left-6 text-[#E2BBE9] text-3xl font-bold">
        AudioSphere
      </div>

      {/* Sign Up form container */}
      <div className="w-full max-w-md p-6 bg-[#9B86BD] rounded-lg shadow-lg">
        {/* Notification for empty fields */}
        {showNotification && (
          <Notification
            message="Please fill out all fields!"
            type="error"
            onClose={() => setShowNotification(false)}
          />
        )}

        {/* Sign Up form */}
        <form className="space-y-6" onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold text-white text-center">
            Sign Up to AudioSphere
          </h2>

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            togglePassword={togglePassword}
            className="w-full"
          />

          <InputField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            togglePassword={togglePassword}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-[#5A639C] text-white py-2 rounded-lg hover:bg-[#9B86BD] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Link to log in if user already has an account */}
        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-white font-bold underline hover:bg-[#7776B3] transition duration-300"
          >
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}
