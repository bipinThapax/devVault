import { Outlet } from "react-router-dom";
import DashSidebar from "../components/DashSideBar";
import { useState } from "react";

import { FaBars } from "react-icons/fa6";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="relative min-h-screen flex">
        <button
          className="fixed top-5 left-3 z-20 block md:hidden text-white text-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
        <DashSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className=" absolute bg-black z-10 left-[20%] w-[80%] max-md:relative max-md:w-full max-md:left-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
