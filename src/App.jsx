import { BrowserRouter } from "react-router-dom";
import { ThemeContext, AuthContext } from "./context/context";
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

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className=" bg-black text-white ">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
