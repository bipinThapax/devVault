import { Routes, Route } from "react-router-dom";
import Marketing from "../features/marketing/Marketing";
import Login from "../features/marketing/Login";
import About from "../features/marketing/About";
import Signup from "../features/marketing/Signup";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
