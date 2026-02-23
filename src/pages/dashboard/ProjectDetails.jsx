import { useNavigate, useParams } from "react-router-dom";

import { ProjectContext } from "../../context/context";
import { useContext } from "react";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  // search above id and return it to display
  const { userProjects, deleteProject } = useContext(ProjectContext);
  let project = userProjects.find(
    (project) => project.pID === Number(params.projectId),
  );

  return (
    <div className="projectDetails px-10 py-5 text-white">
      {project ? (
        <div
          className=" h-[60vh] flex flex-col gap-5 p-10 text-2xl"
          key={project.pID}
        >
          <div className="projectProgress text-gray-500 text-sm">
            <div className="text-xl">
              <span>Project Status: </span>
              {project.pStatus}
            </div>
          </div>
          <div className="name flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              <span>Project Name: </span>
              {project.pName}
            </h2>
            <span className="text-gray-400 ">
              <span>Date: </span>
              {project.pCreatedAt}
            </span>
          </div>
          <div className="description text-gray-400 ">
            <span>Description: </span>
            <div>{project.pDesc}</div>
          </div>
          <div className="edits flex gap-5 ">
            <button className="bg-blue-500 p-2 px-6 rounded-2xl cursor-pointer hover:bg-blue-700">
              Edit
            </button>
            <button
              className="bg-red-500 p-2 px-6 rounded-2xl cursor-pointer hover:bg-red-700"
              onClick={() => deleteProject(project.pID)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="notFound text-center   flex flex-col h-[60vh] gap-10 justify-center">
          <h2 className="text-4xl font-bold">Project Not found !</h2>
          <div className="goBack">
            <button
              className="bg-blue-500 p-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-700"
              onClick={() => navigate("/dashboard")}
            >
              Return to home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
