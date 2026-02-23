import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { useContext } from "react";

import { GiIceCube } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const DashNavbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const navClasses =
    "py-2 px-5 flex gap-5 items-center rounded-md border hover:text-white hover:border-blue-500 hover:shadow-blue-400/30 hover:shadow-[1px_0px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out max-[1030px]:gap-2";
  return (
    <div
      className={` min-w-40  w-[20%] min-h-screen z-20 bg-black fixed top-0 py-5 px-4 flex flex-col  h-screen gap-15 border-r border-r-gray-600 
        ${isSidebarOpen ? "block" : "hidden"} md:flex`}
    >
      <div className="logo flex flex-col gap-4 items-center text-3xl max-[1000px]:text-2xl max-[860px]:text-xl">
        {isSidebarOpen ? (
          <button
            className=" block md:hidden text-white text-2xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MdOutlineCancel />
          </button>
        ) : (
          ""
        )}
        <div className="logoImg text-[#3a1ccd] ">
          <GiIceCube />
        </div>
        <div className="logoText  font-extrabold ">
          <h1>DevVault</h1>
        </div>
      </div>
      <nav className="navigations  h-[85%] flex flex-col justify-between text-center ">
        <ul className="flex flex-col gap-5 text-lg">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${isActive ? "text-white border  border-blue-500  " : "text-gray-400 border-blue-400/30 "} ${navClasses} `
              }
            >
              <RxDashboard className="max-[975px]:hidden" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/projects"
              end
              className={({ isActive }) =>
                `${isActive ? "text-white border  border-blue-500  " : "text-gray-400 border-blue-400/30 "} ${navClasses} `
              }
            >
              <IoFolderOpenOutline className="max-[975px]:hidden" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/issues"
              end
              className={({ isActive }) =>
                `${isActive ? "text-white border  border-blue-500  " : "text-gray-400 border-blue-400/30 "} ${navClasses} `
              }
            >
              <MdOutlineReportProblem className="max-[975px]:hidden" />
              <span>Issues</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              end
              className={({ isActive }) =>
                `${isActive ? "text-white border  border-blue-500  " : "text-gray-400 border-blue-400/30 "} ${navClasses} `
              }
            >
              <IoSettingsOutline className="max-[975px]:hidden" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
        <div className="logout ">
          <button
            className="w-full py-2 border border-gray-600 text-gray-200 rounded-md cursor-pointer hover:border-red-500  hover:text-white  hover:shadow-red-400/30 hover:shadow-[1px_0px_10px_0px] hover:-translate-y-px active:scale-95 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/login");
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DashNavbar;
