import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
