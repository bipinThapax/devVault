// we have two context api to provide 

// auth context --> fake login or logout
// theme context --> dark mode or light mode

import { createContext } from "react";

export const ThemeContext = createContext();
export const AuthContext = createContext();