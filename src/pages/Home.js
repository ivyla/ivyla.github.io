import {
    LinkedinFilled,
    GithubFilled,
    MailFilled,
    FileTextOutlined
} from "@ant-design/icons"

import "../fonts.css"
import "./pagestyles/Home.css"
import "../SharedStyles.css"

let Home = () => (
    <div className="section">
        <h1 className="homeHeader"> Ivy La </h1>
        <p>
            Hi there, I’m a full stack developer based in the bay area!
            Phasellus vulputate malesuada tortor, convallis maximus sem
            efficitur ut. Pellentesque id aliquet neque. Curabitur sodales magna
            finibus.
        </p>

        <a
            href="https://linkedin.com/in/ivyla"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedinFilled className="media-icons" id="linkedin-icon" />
        </a>
        <a
            href="https://github.com/ivyla"
            target="_blank"
            rel="noopener noreferrer"
        >
            <GithubFilled className="media-icons" id="github-icon" />
        </a>

        <a href="mailto:ila@ucsc.edu" target="_blank" rel="noopener noreferrer">
            <MailFilled className="media-icons" id="email-icon" />
        </a>

        <a href="mailto:ila@ucsc.edu" target="_blank" rel="noopener noreferrer">
            <FileTextOutlined className="media-icons" id="email-icon" />
        </a>
    </div>
)
export default Home
