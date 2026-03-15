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

import {
  registerUser as registerAPI,
  loginUser as loginAPI,
} from "./services/auth";

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

  const [user, setUser] = useState(() => {
    let value = localStorage.getItem("user");
    return value ? JSON.parse(value) : null;
  });
  const signIn = async (userData) => {
    try {
      const data = await registerAPI(userData);
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      }
    } catch (error) {
      console.error("Resgistration Failed", error);
    }
  };

  // validate user
  const login = async (credentials) => {
    try {
      const data = await loginAPI(credentials);
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login Failed:", error);
      return false;
    }
  };

  // clears user data from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
    <AuthContext.Provider value={{ user, signIn, login, logout }}>
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
