import { Outlet } from "react-router-dom";
import DashSidebar from "../components/DashSideBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="relative min-h-screen flex">
        <DashSidebar />
        <div className=" absolute bg-black z-10 left-[20%] w-[80%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
