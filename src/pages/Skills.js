import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Projects.css"
import skillsData from "../pages/data/projectData"
import Spacer from "../components/Spacer"

// let skills = skillsData.map((project) => (
//     <ProjectTile
//         projectName={project.projectName}
//         projectDesc={project.projectDesc}
//         projectDate={project.projectDate}
//         technologies={project.technologies}
//         repoLink={project.repoLink}
//         demoLink={project.demoLink}
//         projectType={project.projectType}
//     />
// ))

let Skills = () => (
    <div className="section" id="skills">
        <div>
            <h2 style={{display: "inline"}}> Skills 🎯 </h2>
            <h3> Languages </h3>
            <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Java, Javascript, Python, SQL, HTML, CSS{" "}
            </p>
            <h3> Frameworks/Tools </h3>
            {/* <p> React </p> */}
            <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; Java Spring, Java JDBC, Pivotal Cloud
                Foundry (PCF), Junit, Atlassian Bamboo, React.js, Redux, Axios
            </p>
            <h3> Development </h3>
            <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; REST APIs, Batch Processing,
                Object-Oriented Programming, Computer Systems Design, Zephyr
                Testing, Behavior Driven Development (BDD), Test Driven
                Development (TDD), Front End Development + Design{" "}
            </p>
            <h3> Additional </h3>
            <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp; Agile Practices, Public Speaking, High
                Fidelity Mockups, Wireframing, User Persona Research,
                Qualitative Coding, Ideation
            </p>
        </div>
        {/* <Spacer spacerNum={2} /> */}
        <span> </span>
        {/* <div className="projects">{projects}</div> */}
    </div>
)
export default Skills
