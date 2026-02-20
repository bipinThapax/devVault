import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { FaSquare } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbProgress } from "react-icons/tb";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

import { AuthContext, ProjectContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const { projects } = useContext(ProjectContext);
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
              <div className="text-3xl font-bol">{projects.length}</div>
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

        <div className="recentProjects">
          <div className="recentProjectText flex justify-between">
            <h3 className="font-bold text-xl">Recent Projects</h3>
            <h4
              className="text-gray-400 cursor-pointer hover:text-gray-200 transition duration-300 ease-in-out active:scale-95"
              onClick={() => {
                navigate("/dashboard/projects");
              }}
            >{`See all -->`}</h4>
          </div>

          <div
            className="recentProjectContainer py-10 px-2 grid  grid-cols-3  gap-y-10 justify-items-center  max-[1395px]:grid-cols-2
        max-[905px]:grid-cols-1 "
          >
            {projects.length > 0 ? (
              projects.map((project) => {
                return (
                  <div
                    className="projectCard w-[320px] min-w-40 max-[905px]:max-w-[90%] flex flex-col justify-around gap-4 p-4 rounded-2xl shadow-white/60 shadow-[1px_1px_4px]"
                    key={project.pID}
                  >
                    <div className="projectProgress text-gray-500 py-1 text-sm">
                      <span
                        className={`  py-1 px-4 rounded-2xl  shadow-[0px_0px_6px]`}
                      >
                        {project.pStatus}
                      </span>
                    </div>
                    <div className="name flex items-center justify-between">
                      <h2 className="text-2xl font-bold">{project.pName}</h2>
                      <span className="text-gray-400 text-xs">
                        {project.pCreatedAt}
                      </span>
                    </div>
                    <div className="description text-gray-400 text-sm">
                      {project.pDesc}
                    </div>
                    <div className="links flex justify-between px-2 mt-4 w-full ">
                      <button className="border border-gray-700 w-[50%] py-2  rounded-md mr-4 cursor-pointer flex gap-4 items-center justify-center hover:shadow-white/15 hover:shadow-[1px_1px_10px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-95">
                        <FaGithub /> <span>Code</span>
                      </button>
                      <button className="border border-gray-700 w-[50%] py-2 rounded-md cursor-pointer flex gap-4 items-center justify-center hover:shadow-white/15 hover:shadow-[1px_1px_10px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-95">
                        <FaRegShareSquare /> <span>Demo</span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-gray-500 text-xl">No any projects.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
