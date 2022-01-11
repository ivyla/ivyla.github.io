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
        <div data-aos="fade-up" className="section" id="home">
            <h1 className="homeHeader"> Hi, I'm Ivy! </h1>
            <p>
                I’m a full stack developer based in the bay area! Nam consequat
                lacus vitae dictum commodo. Nam porta ante sit amet lacus
                scelerisque faucibus. Sed neque neque, rutrum in massa id,
                hendrerit volutpat massa. Cras aliquam nec lorem vitae rhoncus.
                Donec vitae magna vehicula, venenatis orci eu, lobortis odio.
                Nam malesuada pellentesque elit sit amet auctor. Morbi
                pellentesque libero nunc, non porta nisi aliquam at.
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
