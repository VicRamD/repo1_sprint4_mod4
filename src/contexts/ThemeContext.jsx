import { createContext, useContext } from "react";
import { useTheme } from '../hooks/useTheme';

//Crear el contexto
const ThemeContext = createContext();

//Crear el proveedor del contexto
export const ThemeProvider = ({children}) => {
    const {changeTheme, themes} = useTheme();

    return(
        <ThemeContext.Provider value={{changeTheme, themes}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}