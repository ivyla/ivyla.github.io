import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Skills.css"
// import skillsData from "../pages/data/projectData"
import SkillTile from "../components/SkillTile"
import Spacer from "../components/Spacer"

const skillsData = [
    {
        key: 1,
        skillsTitle: "Languages",
        skillsList: ["Java", "Javascript", "Python", "SQL", "HTML", "CSS"],
        columnNums: 3
    },
    {
        key: 2,
        skillsTitle: "Frameworks/Tools",
        skillsList: [
            "Java Spring",
            "Spring Data JPA",
            "Junit",
            "Pivotal Cloud Foundry (PCF)",
            "Atlassian Bamboo (CI/CD)",
            "React.js",
            "Redux",
            "Axios",
            "Pytest",
            "SQLAlchemy",
            "Docker"
        ],
        columnNums: 3
    },
    {
        key: 3,
        skillsTitle: "Development",
        skillsList: [
            "Front End Development",
            "Responsive Web Design",
            "UI Design",
            "REST APIs",
            "Batch Processing",
            "Functional Programming",
            "Object-Oriented Programming",
            "Zephyr Testing",
            "Behavior Driven Development",
            "Test Driven Development",
            "Computer Systems Design"
        ],
        columnNums: 3
    },
    {
        key: 4,
        skillsTitle: "Additional",
        skillsList: [
            "Agile Best Practices",
            "SCRUM Framework",
            "Public Speaking",
            "High Fidelity Mockups",
            "Wireframing",
            "User Persona Research",
            "Qualitative Coding",
            "Ideation",
            "Video Editing"
        ],
        columnNums: 3
    }
]
let skills = skillsData.map((item) => (
    <SkillTile
        skillsTitle={item.skillsTitle}
        skillsList={item.skillsList}
        columnNums={item.columnNums}
    />
))

let Skills = () => {
    return (
        <div className="section" id="skills">
            <h2> Skills 🎯 </h2>
            {skills[0]}
            {skills[1]}
            {skills[2]}
            {skills[3]}
        </div>
    )
}
export default Skills
