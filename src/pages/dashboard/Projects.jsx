import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/context";

//icons
import { FaGithub } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  const projectStatusClasses = {
    pComplete: " border-green-600 text-green-300    shadow-green-500/40 ",
    pProgress: " border-amber-600 text-orange-300    shadow-amber-500/40 ",
    pPlanning: " border-cyan-600 text-blue-300   shadow-blue-500/40 ",
  };

  const projectStatusMap = {
    completed: projectStatusClasses.pComplete,
    inProgress: projectStatusClasses.pProgress,
    planning: projectStatusClasses.pPlanning,
  };

  const { userProjects } = useContext(ProjectContext);
  return (
    <div className="projects px-10 py-5 max-[955px]:px-3">
      <div className="projectHeader  ">
        <div className="projectTitle flex justify-between">
          <h1 className="text-4xl font-extrabold bg-linear-to-br from-blue-800  to-blue-300 bg-clip-text text-transparent">
            Projects
          </h1>
          <button
            className="flex items-center gap-2 bg-linear-to-r from-[#0975b2]  to-[#5a75d6] py-2 px-3 rounded-lg cursor-pointer  shadow-blue-700/75 shadow-[0px_0px_10px] hover:shadow-[1px_1px_20px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-[97%]"
            onClick={() => navigate("/dashboard/projects/new")}
          >
            <IoMdAdd className="text-xl" />
            <span>Add New Project</span>
          </button>
        </div>
      </div>

      {userProjects.length > 0 ? (
        <div
          className="projectContainer py-10 px-2 grid  grid-cols-3  gap-y-10 justify-items-center  max-[1395px]:grid-cols-2
        max-[905px]:grid-cols-1 "
        >
          {userProjects.map((project) => {
            return (
              <div
                className="projectCard w-[320px] min-w-40 max-[905px]:max-w-[90%] flex flex-col justify-around gap-4 p-4 rounded-2xl shadow-stone-500/80 shadow-[1px_1px_6px] border border-stone-500/70 cursor-pointer hover:shadow-[1px_1px_18px] transition duration-300 ease-in-out hover:-translate-y-1"
                key={project._id}
                onClick={() => navigate(`/dashboard/projects/${project._id}`)}
              >
                <div className="projectProgress text-gray-500 py-1 text-sm">
                  <span
                    className={` ${projectStatusMap[project.status]}    border rounded-full py-2 px-4  shadow-[1px_1px_10px]`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="name flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <span className="text-gray-400 text-xs">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="description text-gray-400 text-sm">
                  {project.description}
                </div>
                <div className="links flex justify-between px-2 mt-4 w-full ">
                  <button className="border border-gray-700 w-[50%] py-2  rounded-md mr-4 cursor-pointer flex gap-4 items-center justify-center hover:shadow-white/15 hover:shadow-[1px_1px_10px] hover:-translate-y-px transition duration-300 ease-in-out">
                    <FaGithub /> <span>Code</span>
                  </button>
                  <button className="border border-gray-700 w-[50%] py-2 rounded-md cursor-pointer flex gap-4 items-center justify-center hover:shadow-white/15 hover:shadow-[1px_1px_10px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-95">
                    <FaRegShareSquare /> <span>Demo</span>
                  </button>
                </div>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <div className="projects py-20 text-center">
          <p className="text-gray-600 text-xl mb-15">No projects yet.</p>
          <button
            className="bg-linear-to-r from-[#0975b2]  to-[#5a75d6] py-2 px-3 rounded-lg cursor-pointer  shadow-blue-700/75 shadow-[0px_0px_10px] hover:shadow-[1px_1px_20px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-[97%]"
            onClick={() => navigate("/dashboard/projects/new")}
          >
            Create your first project
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
