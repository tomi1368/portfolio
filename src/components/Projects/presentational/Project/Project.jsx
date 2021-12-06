import React, { useContext } from "react";
import "./Project.scss";
import Tag from "./Tag/Tag";
import ThemeContext from "../../../../context/theme-Context";

const Project = ({props}) => {
  const {theme} = useContext(ThemeContext)
  
  let style = theme === "light" ? "" : "dark"

  return (
    <div className={`project-card ${style}`}>
      <div className="project-card__text">
        <span className={`project-card__text__net ${style}`}>Shopify</span>
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        <div className="project-card__text__tags">
          {props.tags.map((tag, i) => (
            <Tag key={i} title={tag}/>
          ))}
        </div>
      </div>
      <div className="project-card__img">
        <img src={props.img} alt="img project" />
      </div>
    </div>
  );
};

export default Project;
