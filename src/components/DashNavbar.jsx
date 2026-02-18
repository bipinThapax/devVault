import { NavLink } from "react-router-dom";
import { GiIceCube } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const DashNavbar = () => {
  return (
    <div className="w-[23%] p-10  flex flex-col h-screen gap-10 border-r border-r-gray-600">
      <div className="logo flex gap-4 items-center border-b border-b-gray-500 justify-center">
        <div className="logoImg text-[#8f1ccd] text-3xl">
          <GiIceCube />
        </div>
        <div className="logoText text-3xl font-extrabold ">
          <h1>DevVault</h1>
        </div>
      </div>
      <nav className="navigations w-full">
        <ul className="flex flex-col gap-5 text-xl">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `py-3 px-7 flex gap-5 items-center rounded-xl border  ${isActive ? "text-white border-purple-500 bg-purple-500/20" : "text-gray-500 border-purple-500/45"} hover:shadow-purple-400/35 hover:shadow-[1px_1px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out`
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
                `py-3 px-7 flex gap-5 items-center rounded-xl border  ${isActive ? "text-white border-purple-500 bg-purple-500/20" : "text-gray-500 border-purple-500/45"} hover:shadow-purple-400/35 hover:shadow-[1px_1px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out`
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
                `py-3 px-7 flex gap-5 items-center rounded-xl border  ${isActive ? "text-white border-purple-500 bg-purple-500/20" : "text-gray-500 border-purple-500/45"} hover:shadow-purple-400/35 hover:shadow-[1px_1px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out`
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
                `py-3 px-7 flex gap-5 items-center rounded-xl border  ${isActive ? "text-white border-purple-500 bg-purple-500/20" : "text-gray-500 border-purple-500/45"} hover:shadow-purple-400/35 hover:shadow-[1px_1px_10px_0px] hover:-translate-y-px transition duration-300 ease-in-out`
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
