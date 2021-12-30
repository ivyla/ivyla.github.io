import {
    LinkedinFilled,
    GithubFilled,
    MailFilled,
    FileTextOutlined
} from "@ant-design/icons"

import "./pagestyles/Home.css"
import "../fonts.css"
import "../SharedStyles.css"
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"

let Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div data-aos="fade-up ease-out" className="section">
            <h1 className="homeHeader"> Hi, I'm Ivy! </h1>
            <p>
                I’m a full stack developer based in the bay area! Phasellus
                vulputate malesuada tortor, convallis maximus sem efficitur ut.
                Pellentesque id aliquet neque. Curabitur sodales magna finibus.
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

            <a
                href="mailto:ila@ucsc.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MailFilled className="media-icons" id="email-icon" />
            </a>

            <a
                href="mailto:ila@ucsc.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FileTextOutlined className="media-icons" id="email-icon" />
            </a>
        </div>
    )
}
export default Home
