import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function InputField({ label, type, name, value, onChange }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility toggle

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  return (
    <div className="mb-6 relative">
      {/* Label */}
      <label className="block text-gray-700 font-medium mb-2">{label}</label>

      {/* Input Field */}
      <div className="relative">
        <input
          type={isPasswordVisible && type === "password" ? "text" : type} // Toggle between "text" and "password"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-600"
        />

        {/* Password Visibility Toggle */}
        {type === "password" && (
          <span
            onClick={handleTogglePasswordVisibility}
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
            {/* Toggle eye icons */}
          </span>
        )}
      </div>
    </div>
  );
}
