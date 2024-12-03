// src/layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from './components/sidebar'; // Import Sidebar

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#5A639C", color: "white" }}>
      <Sidebar /> {/* Render Sidebar here */}
      <main style={{ flex: 1, padding: "10px", marginBottom: '120px' }}> {/* Add margin to prevent overlap */}
        <Outlet /> {/* This is where routed components will be rendered */}
      </main>
    </div>
  );
}

export default Layout;