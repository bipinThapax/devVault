import { NavLink } from "react-router-dom";
import { GiIceCube } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const DashNavbar = () => {
  const navClasses =
    "py-2 px-5 flex gap-5 items-center rounded-md border   hover:text-white hover:border-blue-500 hover:shadow-blue-400/30 hover:shadow-[1px_0px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out";
  return (
    <div className="w-[20%] py-5 px-4  flex flex-col h-screen gap-15 border-r border-r-gray-600">
      <div className="logo flex gap-4 items-center">
        <div className="logoImg text-[#3a1ccd] text-3xl">
          <GiIceCube />
        </div>
        <div className="logoText text-3xl font-extrabold ">
          <h1>DevVault</h1>
        </div>
      </div>
      <nav className="navigations ">
        <ul className="flex flex-col gap-5 text-lg">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${isActive ? "text-white border  border-blue-500  " : "text-gray-400 border-blue-400/30 "} ${navClasses} `
              }
            >
              <RxDashboard />
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
              <IoFolderOpenOutline />
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
              <MdOutlineReportProblem />
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
              <IoSettingsOutline />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashNavbar;
