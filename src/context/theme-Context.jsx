
import { createContext, useState } from "react";

const ThemeContext = createContext()

let initialTheme = "light"

const Provider= ({children})=>{
    const [theme,setTheme] = useState(initialTheme)
    const chgTheme = ()=>{
        setTheme(theme==="light" ? "dark" : "light")
        document.body.classList[theme==="light" ? "add" : "remove"]("dark")
    }
    const data = {theme,chgTheme}
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
export {Provider}
export default ThemeContext