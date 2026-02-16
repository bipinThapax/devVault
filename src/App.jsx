import { BrowserRouter } from "react-router-dom";
import { ThemeContext, AuthContext } from "./context/context";
import { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isDark, setIsDark] = useState(() => {
    let value = localStorage.getItem("isDark");
    return value === null || value === "" ? false : JSON.parse(value);
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    console.log(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((theme) => !theme);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
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
