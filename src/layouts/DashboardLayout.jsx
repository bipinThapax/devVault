import { Outlet } from "react-router-dom";
import DashSidebar from "../components/DashSideBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex">
        <DashSidebar />
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
