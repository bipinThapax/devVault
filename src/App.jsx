import { BrowserRouter } from "react-router-dom";
import { ThemeContext, AuthContext, ProjectContext } from "./context/context";
import { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

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
    let value = JSON.parse(localStorage.getItem("user"));
    return value ? value : null;
  });

  // user obj attributes : name, email, address, loggedIn:true/fasle, DOB

  // saves user data to localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // clears user data from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // project Context
  const [projects, setProjects] = useState(() => {
    let project = JSON.parse(localStorage.getItem("projects"));
    return project ? project : [];
  });

  const addProject = (projectData) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    setProjects([
      ...projects,
      {
        pID: Date.now(),
        pName: projectData.projectName,
        pDesc: projectData.description,
        pStatus: projectData.projectStatus,
        pCreatedAt: `${day}/${month}/${year}`,
      },
    ]);
  };

  const deleteProject = (pID) => {
    setProjects(
      projects.filter((project) => {
        return project.pID !== pID;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <ProjectContext.Provider
          value={{ projects, addProject, deleteProject }}
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
