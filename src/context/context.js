// auth context --> fake login or logout
// theme context --> dark mode or light mode
// project context --> projectData [pName, pDesc, pStatus]

import { createContext } from "react";

export const ThemeContext = createContext();
export const AuthContext = createContext();
export const ProjectContext = createContext();