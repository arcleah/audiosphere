import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./inputfield";
import Notification from "./popupmessage";

export default function SignUp() {
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

    // Additional validation logic (e.g., password match) can be added here
    navigate("/create-profile"); // Redirect after successful validation
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {showNotification && (
          <Notification
            message="Please fill out all fields!"
            type="error"
            onClose={() => setShowNotification(false)}
          />
        )}

        <form className="space-y-6" onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
