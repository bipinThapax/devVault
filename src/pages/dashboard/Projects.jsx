import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects px-10 py-5 ">
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
      <div className="projects py-20 text-center">
        <p className="text-gray-600 text-xl mb-15">No projects yet.</p>
        <button
          className="bg-linear-to-r from-[#0975b2]  to-[#5a75d6] py-2 px-3 rounded-lg cursor-pointer  shadow-blue-700/75 shadow-[0px_0px_10px] hover:shadow-[1px_1px_20px] hover:-translate-y-px transition duration-300 ease-in-out active:scale-[97%]"
          onClick={() => navigate("/dashboard/projects/new")}
        >
          Create your first project
        </button>
      </div>
    </div>
  );
};

export default Projects;
