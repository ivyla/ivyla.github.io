import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"
import {AutoComplete} from "antd"

const tile = {
    maxWidth: "30%",
    marginBottom: "20px",
    paddingRight: "2rem"
}

const lastItem = {
    // display: "none",
    maxWidth: "30%",
    marginBottom: "20px"
    // alignSelf: "center",
    // backgroundColor: "green"
}

// icons for project: github, link (if applicable),

let ProjectTile = ({
    projectName,
    projectDesc,
    technologies,
    repoLink,
    demoLink,
    lastItem
}) => (
    // <div style={lastItem === true ? lastItem : tile}>
    <div style={tile}>
        {/* <h2 style={projectHeader}> My Cool App </h2> */}
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
