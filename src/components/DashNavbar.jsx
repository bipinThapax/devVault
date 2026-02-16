import { NavLink } from "react-router-dom";
const DashNavbar = () => {
  return (
    <nav>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/dashboard/projects">Projects</NavLink>
      <NavLink to="/dashboard/issues">Issues</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </nav>
  );
};

export default DashNavbar;
