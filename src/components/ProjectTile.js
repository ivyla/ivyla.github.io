import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    maxWidth: "30%",
    marginBottom: "2.8rem",
    paddingRight: "2rem"
}

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

    return (
        <div style={tile}>
            <p style={{marginTop: "0px"}}>
                <b> {projectName} </b>
            </p>
            <p>{projectDesc}</p>
            <p>
                <i> {technologies} </i>
            </p>

            {repoComponent}
            {demoComponent}
        </div>
    )
}

export default ProjectTile
