// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sidebar.css'; // Import your sidebar styles

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <nav className="sidebar">
            <h1 className="audiosphere-logo">AUDIOSPHERE</h1>
            <button onClick={() => navigate("/")} className="nav-button">
                <img src="assets/icons/house-chimney-blank-svgrepo-com.svg" alt="Home Icon" className="nav-icon" /> Home
            </button>
            <button onClick={() => navigate("/search")} className="nav-button">
                <img src="assets/icons/search-svgrepo-com.svg" alt="Search Icon" className="nav-icon" /> Search
            </button>
            <button onClick={() => navigate("/playlist")} className="nav-button">
                <img src="assets/icons/list-music-svgrepo-com.svg" alt="Playlist Icon" className="nav-icon" /> Playlists
            </button>
            <button onClick={() => navigate("/create")} className="nav-button">
                <img src="assets/icons/plus-large-svgrepo-com.svg" alt="Create Icon" className="nav-icon" /> Create
            </button>
            <button onClick={() => navigate("/notifications")} className="nav-button">
                <img src="assets/icons/heart-svgrepo-com.svg" alt="Notifications Icon" className="nav-icon" /> Notifications
            </button>
            <button onClick={() => navigate("/profile")} className="nav-button">
                <img src="assets/icons/user-svgrepo-com.svg" alt="Profile Icon" className="nav-icon" /> Profile
            </button>
        </nav>
    );
};

export default Sidebar;