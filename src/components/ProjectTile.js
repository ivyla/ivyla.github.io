import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    maxWidth: "30%",
    marginTop: "1.8rem",
    marginBottom: "2.8rem",
    paddingRight: "2rem"
}

const technologyItem = {
    display: "inline",
    // backgroundColor: "#6F6866",
    backgroundColor: "#3d3d3d",
    color: "white",
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    borderRadius: "10px",
    marginRight: "0.5rem",
    boxShadow: "0 3px 5px rgb(0 0 0 / 0.2)"
    // fontSize: "0.8rem"
}

let ProjectTile = ({
    projectName,
    projectDesc,
    projectDate,
    technologies,
    repoLink,
    demoLink,
    projectType
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
            <p style={{marginTop: "0px"}}>
                <b> {projectName} </b>
            </p>
            <p className="smallText"> {projectType} </p>
            <p>{projectDesc}</p>
            <div>{techDisplay}</div>
            <p></p>

            {repoComponent}
            {demoComponent}
        </div>
    )
}

export default ProjectTile
