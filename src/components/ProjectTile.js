import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    maxWidth: "30%",
    marginBottom: "2.8rem",
    paddingRight: "2rem"
}

const technologyItem = {
    display: "inline",
    backgroundColor: "#3c4252",
    color: "white",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    borderRadius: "10px",
    marginRight: "0.5rem"
    // fontSize: "0.8rem"
}

// const technologiesSpacing = {
//     display: "flex",
//     justifyContent: "spaceBetween"
// }

let ProjectTile = ({
    projectName,
    projectDesc,
    projectDate,
    technologies,
    repoLink,
    demoLink
}) => {
    let repoComponent =
        repoLink === "" ? null : (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <GithubFilled className="media-icons" id="email-icon" />
            </a>
        )

    let demoComponent =
        demoLink === "" ? null : (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <LinkOutlined className="media-icons" id="email-icon" />{" "}
            </a>
        )

    let techDisplay = technologies.map((item) => (
        <div style={technologyItem}>{item}</div>
    ))

    return (
        <div style={tile}>
            <p style={{marginTop: "0px", color: "#78DCE8"}}>
                <b> {projectName} </b>
            </p>
            <p>{projectDesc}</p>
            <div>{techDisplay}</div>
            <p></p>

            {repoComponent}
            {demoComponent}
        </div>
    )
}

export default ProjectTile
