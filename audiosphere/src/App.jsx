import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/search";
import CreatePage from "./pages/create";
import NotificationsPage from "./pages/notifications";
import ProfilePage from "./pages/profile";
import PlaylistPage from "./pages/playlist";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = () => {
    setIsLoggedIn(true); // Set logged-in state to true after signup
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged-in state to true after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged-in state to false on logout
  };

  return (
    <Router>
      <div className="min-h-screen">
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage onLogout={handleLogout} />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="create" element={<CreatePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="playlist" element={<PlaylistPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<SignUp onSignup={handleSignup} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
