import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/theme-Context'
import "./Header.scss"

const Header = () => {
    const {theme} = useContext(ThemeContext)

    let style = theme === "light" ? "" : "dark"

    return (
        <header className="container header">
            <h1>Hello <span className={`header-emoji ${style}`}>&#128400;</span>, I´m Tomas Rodriguez. I´am a self-taught Front-End Developer with a knowledge about JS Backend</h1>
            <NavLink className={`header-about ${style}`} to="/about">
                Know More About Me ➝
            </NavLink>
        </header>
    )
}

export default Header
