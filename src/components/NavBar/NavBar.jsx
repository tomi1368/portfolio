import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  LightMode,
  DarkMode,
  GitHub,
  LinkedIn,
  InsertDriveFile,
} from "@mui/icons-material/";
import ThemeContext from "../../context/theme-Context";
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  const {theme,chgTheme} = useContext(ThemeContext)

  let style = theme === "light" ? "" : "dark"
  
  
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div>
          <NavLink exact="true" to="/">
            <h2 className={`navbar-content__brand ${style}`}>TR</h2>
          </NavLink>
        </div>
          <ul className="navbar-content__links">
            <li className={`navbar-content__links__link ${style}`} onClick={()=>chgTheme()}>{theme==="dark" ? <LightMode /> : <DarkMode />}</li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://github.com/tomi1368"} rel="noopener" target="_blank">
                <GitHub></GitHub>
              </a>
            </li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://github.com/tomi1368"} rel="noopener" target="_blank">
                <LinkedIn></LinkedIn>
              </a>
            </li>
            <li>
              <a className={`navbar-content__links__link ${style}`} href={"https://github.com/tomi1368"} rel="noopener" target="_blank">
                <InsertDriveFile></InsertDriveFile>
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
