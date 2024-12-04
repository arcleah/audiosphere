import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

// Sidebar component definition
const Sidebar = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State to keep track of which button is active
  const [activeButton, setActiveButton] = useState("");

  // Function to handle navigation and set active button
  const handleNavigation = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  return (
    <nav className="sidebar">
      {/* Logo */}
      <h1 className="audiosphere-logo">AUDIOSPHERE</h1>

      {/* Navigation buttons */}
      {/* Home button */}
      <button
        onClick={() => handleNavigation("/")}
        className={`nav-button ${activeButton === "/" ? "active" : ""}`}
      >
        <img
          src="assets/icons/house-chimney-blank-svgrepo-com.svg"
          alt="Home Icon"
          className="nav-icon"
        />{" "}
        Home
      </button>
      {/* Search button */}
      <button
        onClick={() => handleNavigation("/search")}
        className={`nav-button ${activeButton === "/search" ? "active" : ""}`}
      >
        <img
          src="assets/icons/search-svgrepo-com.svg"
          alt="Search Icon"
          className="nav-icon"
        />{" "}
        Search
      </button>
      {/* Playlist button */}
      <button
        onClick={() => handleNavigation("/playlist")}
        className={`nav-button ${activeButton === "/playlist" ? "active" : ""}`}
      >
        <img
          src="assets/icons/list-music-svgrepo-com.svg"
          alt="Playlist Icon"
          className="nav-icon"
        />{" "}
        Playlists
      </button>
      {/* Create button */}
      <button
        onClick={() => handleNavigation("/create")}
        className={`nav-button ${activeButton === "/create" ? "active" : ""}`}
      >
        <img
          src="assets/icons/plus-large-svgrepo-com.svg"
          alt="Create Icon"
          className="nav-icon"
        />{" "}
        Create
      </button>
      {/* Notifications button */}
      <button
        onClick={() => handleNavigation("/notifications")}
        className={`nav-button ${
          activeButton === "/notifications" ? "active" : ""
        }`}
      >
        <img
          src="assets/icons/heart-svgrepo-com.svg"
          alt="Notifications Icon"
          className="nav-icon"
        />{" "}
        Notifications
      </button>
      {/* Profile button */}
      <button
        onClick={() => handleNavigation("/profile")}
        className={`nav-button ${activeButton === "/profile" ? "active" : ""}`}
      >
        <img
          src="assets/icons/user-svgrepo-com.svg"
          alt="Profile Icon"
          className="nav-icon"
        />{" "}
        Profile
      </button>
    </nav>
  );
};

export default Sidebar;
