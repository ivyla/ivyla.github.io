import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Projects.css"
import "./pagestyles/SectionShared.css"

let Projects = () => (
    <div>
        <h2> Featured Projects </h2>
        <div className="projects">
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
        </div>
    </div>
)
export default Projects
