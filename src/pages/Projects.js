import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Projects.css"

let Projects = () => (
    <div className="section">
        <h2> Featured Projects </h2>
        <div className="projects">
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            {/* <ProjectTile /> */}
        </div>
    </div>
)
export default Projects
