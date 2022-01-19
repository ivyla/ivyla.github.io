import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    // display: "flex",
    // width: "400px",
    marginRight: "30px"
}

const technologyItem = {
    display: "inline",
    backgroundColor: "#3d3d3d",
    color: "white",
    boxShadow: "0 3px 5px rgb(0 0 0 / 0.2)",
    // Sizing
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
    borderRadius: "10px",
    marginRight: "0.5rem",
    marginBottom: "0.5rem"
}

const projectTitle = {
    // float: "right"
    display: "block"
    // justifyContent: "spaceBetween"
}

const techItems = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
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
            <div style={projectTitle}>
                <p style={{marginTop: "0px"}}>
                    <b> {projectName} </b>
                    &nbsp;
                    {repoComponent}
                    {demoComponent}
                </p>
            </div>
            <p className="smallText"> {projectType} </p>
            <p>{projectDesc}</p>
            <div style={techItems}>{techDisplay}</div>
            <p></p>
        </div>
    )
}

export default ProjectTile
