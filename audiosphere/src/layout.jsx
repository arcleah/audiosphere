import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
      }}
    >
      <nav
        style={{
          width: "240px",
          background: "#1a1a1a",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Home
        </button>
        <button
          onClick={() => navigate("/search")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
        <button
          onClick={() => navigate("/create")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Create
        </button>
        <button
          onClick={() => navigate("/notifications")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Notifications
        </button>
        <button
          onClick={() => navigate("/profile")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Profile
        </button>
        <button
          onClick={() => navigate("/playlist")}
          style={{
            padding: "10px",
            background: "#333",
            border: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Playlist
        </button>
      </nav>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
