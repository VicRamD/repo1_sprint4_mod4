import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("dd-theme") || "classic";
    });

    const themes = {
        classic: "Classic",
        elegance: "Elegance",
        dark: "Dark",
        radiation: "Radiation",
    }

    const changeTheme = (themeName) => setTheme(themeName);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            //console.log(document.documentElement);
            localStorage.setItem("dd-theme", theme);
        }
    }, [theme]);

    return {changeTheme, themes}
}