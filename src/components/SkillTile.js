import {findByLabelText} from "@testing-library/react"
import "../pages/pagestyles/Skills.css"

let SkillTile = ({skillsTitle, skillsList, columnNums}) => {
    // Create list of li elements
    let skillElements = skillsList.map((skill, index) => (
        <li style={{marginBottom: "2px", padding: "2px 2px"}}> {skill}</li>
    ))
    return (
        <div>
            <h3> {skillsTitle}</h3>
            <ul className="listStyle">{skillElements}</ul>
        </div>
    )
}
export default SkillTile
