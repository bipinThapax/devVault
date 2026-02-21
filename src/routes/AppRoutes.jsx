import { Routes, Route } from "react-router-dom";

// marketing routes
import MarketingLayout from "../layouts/MarketingLayout";
import Home from "../pages/marketing/Home";
import Changelog from "../pages/marketing/Changelog";
import Docs from "../pages/marketing/Docs";

// auth routes
import AuthLayout from "../layouts/AuthLayout";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

// dashboard routes
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Projects from "../pages/dashboard/Projects";
import AddProject from "../pages/dashboard/AddProject";
import ProjectDetails from "../pages/dashboard/ProjectDetails";
import Settings from "../pages/dashboard/Settings";
import Issues from "../pages/dashboard/Issues";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Marketing pages  */}
      <Route path="/" element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="docs" element={<Docs />} />
      </Route>

      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* dashboard pages only through authentication  */}
      <Route element={<ProtectedRoutes />}>
        {/* Dashboard pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<AddProject />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="issues" element={<Issues />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* not found page if outside the route path */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
