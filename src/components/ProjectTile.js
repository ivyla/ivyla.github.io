import "../SharedStyles.css"
import {GithubFilled, CodeOutlined, LinkOutlined} from "@ant-design/icons"

const projectHeader = {
    fontSize: "1.6rem"
}

const tile = {
    // minWidth: "30%",
    maxWidth: "30%",
    marginBottom: "20px"
}

// icons for project: github, link (if applicable),

let InfoTile = ({
    projectName,
    projectDesc,
    technologies,
    repoLink,
    demoLink
}) => (
    <div style={tile}>
        <h2 style={projectHeader}> My Cool App </h2>
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
export default InfoTile
