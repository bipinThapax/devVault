import { Outlet } from "react-router-dom";
import DashNavbar from "../components/DashNavbar";

const DashboardLayout = () => {
  return (
    <>
      <DashNavbar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
