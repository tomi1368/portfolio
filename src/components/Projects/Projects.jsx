import React, { useContext } from 'react'
import cardsContent from './mocks/cards-content'
import Project from './presentational/Project/Project'
import ThemeContext from '../../context/theme-Context'
import "./Projects.scss"
const Projects = () => {
    const {theme} = useContext(ThemeContext)

    let style = theme === "light" ? "" : "dark"


    return (
        <section className="container projects">
            {cardsContent.map((card,i)=><Project key={i} props={card}></Project>)}
            <div className="projects-span">
            <span className={`projects-span__line ${style}`}></span><span className={`projects-span__text ${style}`}>WORK</span>
            </div>
        </section>
    )
}

export default Projects
