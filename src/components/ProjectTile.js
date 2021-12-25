import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    maxWidth: "30%",
    marginBottom: "20px",
    paddingRight: "2rem"
}

let ProjectTile = ({
    projectName,
    projectDesc,
    technologies,
    repoLink,
    demoLink,
    lastItem
}) => (
    <div style={tile}>
        <p>
            {" "}
            <b> My Cool App </b>{" "}
        </p>
        <p>
            {" "}
            An app created to bring together and crowdsource projects. It does
            this and it does that{" "}
        </p>
        <p>
            <i> React, MongoDB, Node </i>
        </p>
        <a href="mailto:ila@ucsc.edu" target="_blank" rel="noopener noreferrer">
            <CodeOutlined className="media-icons" id="email-icon" />
        </a>

        <a href="mailto:ila@ucsc.edu" target="_blank" rel="noopener noreferrer">
            <LinkOutlined className="media-icons" id="email-icon" />
        </a>
    </div>
)
export default ProjectTile
