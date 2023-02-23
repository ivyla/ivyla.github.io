import {findByLabelText} from "@testing-library/react"

let SkillTile = ({skillsTitle, skillsList, columnNums}) => {
    const listStyle = {
        // columns: columnNums
        columns: 3
    }
    // Create list of li elements
    let skillElements = skillsList.map((skill, index) => <li> {skill}</li>)
    return (
        <div>
            <h3> {skillsTitle}</h3>
            <ul style={listStyle}>
                <li> {skillElements} </li>
            </ul>
        </div>
    )
}
export default SkillTile
