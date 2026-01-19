import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    themeMode: 'Light',
})

export function ThemeContextProvider({ children }) {
    const [themeMode, setThemeMode] = useState('light')

     const toggleTheme = () => {
        setThemeMode(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
  return useContext(ThemeContext);
} 