import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Projects.css"
import projectData from "../pages/data/projectData"
import Spacer from "../components/Spacer"

let projects = projectData.map((project) => (
    <ProjectTile
        projectName={project.projectName}
        projectDesc={project.projectDesc}
        projectDate={project.projectDate}
        technologies={project.technologies}
        repoLink={project.repoLink}
        demoLink={project.demoLink}
        projectType={project.projectType}
    />
))

let Projects = () => (
    <div className="section" id="projects">
        <h2> Featured Projects 💻 </h2>
        {/* <Spacer spacerNum={2} /> */}
        <span> </span>
        <div className="projects">{projects}</div>
    </div>
)
export default Projects
