import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { FaSquare } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbProgress } from "react-icons/tb";
import { useContext } from "react";

import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="dashHome ">
      <div className="dashboardHeader w-full flex items-center justify-between px-10 py-3 border-b border-gray-800">
        <div className="search w-[40%] px-2 bg-[#131212] rounded-xl flex items-center gap-2">
          <CiSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search projects"
            className=" p-2 w-full outline-none  "
          />
        </div>
        <div className="avatar flex gap-6 text-2xl">
          <div className="notifications">
            <IoMdNotificationsOutline />
          </div>
          <div className="profile">
            <RxAvatar />
          </div>
        </div>
      </div>
      <div className="dashboard py-3 px-10">
        <div className="dashBanner flex justify-between items-center">
          <div className="welcomeMsg">
            <h1 className="text-4xl font-bold leading-relaxed">
              Good Morning, {user.name} !
            </h1>
            <p className="text-gray-600">
              Here's what happening with your projects today.
            </p>
          </div>
          {/*  */}
          <div className="addProject ">
            <button
              className="flex items-center gap-2 bg-linear-to-r from-[#0975b2]  to-[#5a75d6] p-2 px-3 rounded-lg cursor-pointer font-bold shadow-blue-700/75 shadow-[0px_0px_10px] hover:shadow-[1px_1px_20px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-[97%]"
              onClick={() => navigate("/dashboard/projects/new")}
            >
              <IoMdAdd className="text-2xl" />
              <span>Add Project</span>
            </button>
          </div>
        </div>
        <div className="projectStatsCard py-10 flex justify-around ">
          <div className="project-card--total px-10 py-6 border border-[#151515] bg-[#0b0a0aa6] rounded-md flex items-center gap-10">
            <div className="projectCount">
              <div className="text-3xl font-bol">12</div>
              <div className="text-gray-500">Total Projects</div>
            </div>
            <div className="projectCompletedIcon text-2xl p-3 text-purple-500 bg-purple-300/10 rounded-lg">
              <FaSquare />
            </div>
          </div>
          <div className="project-card--completed px-10 py-6 border border-[#151515] bg-[#0b0a0aa6] rounded-md flex items-center gap-10">
            <div className="projectCount">
              <div className="text-3xl font-bol">7</div>
              <div className="text-gray-500">Completed</div>
            </div>
            <div className="projectCompletedIcon text-2xl p-3 text-green-500 bg-green-300/10 rounded-lg ">
              <FaRegCheckCircle />
            </div>
          </div>
          <div className=" project-card--in-progress px-10 py-6 border border-[#151515] bg-[#0b0a0aa6] rounded-md flex items-center gap-10">
            <div className="projectCount">
              <div className="text-3xl font-bol">5</div>
              <div className="text-gray-500">In Progress</div>
            </div>
            <div className="projectCompletedIcon text-2xl p-3 text-blue-500 bg-blue-300/10 rounded-lg">
              <TbProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
