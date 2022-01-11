import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Projects.css"
import projectData from "../pages/data/projectData"

let projects = projectData.map((project) => (
    <ProjectTile
        projectName={project.projectName}
        projectDesc={project.projectDesc}
        projectDate={project.projectDate}
        technologies={project.technologies}
        repoLink={project.repoLink}
        demoLink={project.demoLink}
    />
))

let Projects = () => (
    <div className="section" id="projects">
        <h2> Featured Projects </h2>
        <div className="projects">{projects}</div>
    </div>
)
export default Projects
