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
        userID: user.id,
        pID: Date.now(),
        pName: projectData.projectName,
        pDesc: projectData.description,
        pStatus: projectData.projectStatus,
        pCreatedAt: `${day}/${month}/${year}`,
      },
    ]);
  };

  const userProjects = projects.filter(
    (project) => project.userID === user?.id,
  );

  const deleteProject = (pID) => {
    setProjects(projects.filter((project) => project.pID !== pID));
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

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
