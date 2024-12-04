import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar"; // Import Sidebar

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-[#5A639C] text-white">
      {/* Sidebar with a fixed width */}
      <Sidebar className="w-64" /> {/* Set a fixed width for the sidebar */}
      <main className="flex-1 p-5 mb-[120px] ml-64">
        {/* The main content will have a left margin that equals the width of the sidebar */}
        <Outlet /> {/* Routed components render here */}
      </main>
    </div>
  );
};

export default Layout;
