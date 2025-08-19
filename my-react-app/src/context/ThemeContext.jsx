import {createContext,useContext, useEffect, useState} from "react";

const ThemeContext = createContext();
 export const ThemeProvider = ({ children})=>{
     const [theme,setTheme] = useState('light');

     useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")|| "light";
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
     },[]);

     useEffect(()=>{
        document.documentElement.classList.remove(theme === 'light' ? "dark" :"light");
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme',theme);
     },[theme]);

     const toggleTheme =()=>{
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
     };

     return(
        <ThemeContext.Provider value={{ theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
     );
 };

 export const useTheme = () => useContext(ThemeContext);