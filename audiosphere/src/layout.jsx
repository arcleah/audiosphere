import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar"; // Import Sidebar
import MusicBar from "./components/musicbar"; // Import MusicBar

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#5A639C] text-white">
      {/* Sidebar with a fixed width */}
      <Sidebar className="w-64" /> {/* Set a fixed width for the sidebar */}

      <main className="flex-1 p-5 ml-64 mb-[120px]"> {/* Adjusted margin-bottom */}
        {/* The main content will have a left margin that equals the width of the sidebar */}
        <Outlet /> {/* Routed components render here */}
      </main>

      {/* Music Bar at the Bottom */}
      <MusicBar />
    </div>
  );
};

export default Layout;