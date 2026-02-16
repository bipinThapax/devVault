import { NavLink } from "react-router-dom";
const DashNavbar = () => {
  return (
    <nav>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard/projects"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-500"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/dashboard/issues"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-500"
        }
      >
        Issues
      </NavLink>
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) =>
          isActive ? "text-white" : "text-gray-500"
        }
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default DashNavbar;
