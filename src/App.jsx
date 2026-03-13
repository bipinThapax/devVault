import { BrowserRouter } from "react-router-dom";
import { ThemeContext, AuthContext, ProjectContext } from "./context/context";
import { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

import {
  getAllProjects,
  createProject,
  deleteProject as deleteProjectAPI,
} from "./services/api";

function App() {
  // theme context
  const [isDark, setIsDark] = useState(() => {
    let value = localStorage.getItem("isDark");
    return value === null || value === "" ? false : JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((theme) => !theme);
  };

  // authContext

  //single user
  const [user, setUser] = useState(() => {
    let value = JSON.parse(localStorage.getItem("user"));
    return value ? value : null;
  });

  // all users
  const [users, setUsers] = useState(() => {
    let value = JSON.parse(localStorage.getItem("users"));
    return value ? value : [];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // store new user
  const signIn = (newUser) => {
    setUser(newUser);
    setUsers([...users, newUser]);
  };

  // validate user
  const login = (userData) => {
    // userData has email and pw
    const findUser = users.find(
      (u) => u.email === userData.email && u.password === userData.password,
    );
    if (findUser) {
      setUser(findUser);
      return true;
    }
    return false;
  };

  // clears user data from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // project Context
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getAllProjects();
      setProjects(data);
    };
    fetchProject();
  }, []);

  const addProject = async (projectData) => {
    const newProject = await createProject(projectData);
    setProjects([...projects, newProject]);
  };

  const userProjects = projects;

  const deleteProject = async (pID) => {
    await deleteProjectAPI(pID);
    setProjects(projects.filter((project) => project._id !== pID));
  };

  return (
    <AuthContext.Provider value={{ user, users, signIn, login, logout }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <ProjectContext.Provider
          value={{ userProjects, addProject, deleteProject }}
        >
          <div className=" bg-black text-white ">
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </div>
        </ProjectContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
