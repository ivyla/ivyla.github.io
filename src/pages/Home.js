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

const emphasis = {
    // fontWeight: "bold"
    // color: "#5fb2e8"
    // background: "-webkit-linear-gradient(#eee, #333)"
}

let Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div data-aos="fade-up" className="section" id="home">
            <h1 className="homeHeader"> Ivy La 💡🌳 </h1>
            <p className="smallText"> Software Engineer, design enthusiast </p>
            {/* <p className="smallText"> Design enthusiast </p> */}
            {/* <p className="smallText"> Software Engineer </p> */}
            <p>
                Hello! My name is Ivy I'm a{" "}
                <span style={emphasis}> Full Stack Developer </span> based in
                <span style={emphasis}> San Francisco, CA. </span> <br />I
                currently work at Charles Schwab where I am developing Java
                applications and studying investment performance methodology. I
                love learning anything there is to know about computing and
                creating meaningful, elegant experiences.
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
            <span className="codeComment"> // connect with me! :-) </span>
        </div>
    )
}
export default Home
