import ProjectTile from "../components/ProjectTile"
import "../fonts.css"
import "./pagestyles/Skills.css"
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
            "Batch Processing",
            "Functional Programming",
            "Object-Oriented Programming",
            "Production Release Process",
            "Behavior Driven Development",
            "Test Driven Development",
            "REST APIs",
            "Computer Systems Design",
            "Front End Development",
            "Responsive Web Design",
            "UI Design",
            "Agile Software Development"
        ],
        columnNums: 3
    },
    {
        key: 4,
        skillsTitle: "Additional",
        skillsList: [
            "Public Speaking",
            "Documentation",
            "SCRUM Framework",
            "High Fidelity Mockups",
            "Wireframing",
            "User Persona Research",
            "Qualitative Coding"
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
            <div className="skillsContainer">
                {skills[0]}
                {skills[1]}
                {skills[2]}
                {skills[3]}
            </div>
        </div>
    )
}
export default Skills
