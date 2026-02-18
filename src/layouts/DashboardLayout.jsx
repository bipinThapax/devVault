import { Outlet } from "react-router-dom";
import DashNavbar from "../components/DashNavbar";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex">
        {/* side bar hunxa Div ley wrap garera --> [DashboardHOme, AddProject, ProjectDetails, Setting, Issues] */}
        <DashNavbar />
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
