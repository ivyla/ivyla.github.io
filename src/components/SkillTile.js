let SkillTile = ({skillsTitle, skillsList, columnNums}) => {
    console.log({columnNums})
    const listStyle = {columns: columnNums}
    // Create list of li elements
    let skillElements = skillsList.map((skill, index) => <li> {skill}</li>)
    // console.log(skillElements)
    // console.log(skillsList[0])
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
