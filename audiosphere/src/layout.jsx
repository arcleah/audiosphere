import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar"; // Import Sidebar

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-[#5A639C] text-white">
      <Sidebar /> {/* Sidebar stays on the side */}
      <main className="flex-1 p-5 mb-[120px]">
        {" "}
        {/* Adjust padding and bottom margin */}
        <Outlet /> {/* Routed components render here */}
      </main>
    </div>
  );
};

export default Layout;
