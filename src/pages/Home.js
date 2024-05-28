import {
    LinkedinFilled,
    GithubFilled,
    MailFilled,
    FileTextOutlined
} from "@ant-design/icons"

// import "./pagestyles/Home.css"
import "../fonts.css"
import "../SharedStyles.css"
import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"
import homeImg from "../images/bioAlt.jpg"
import "./pagestyles/About.css"

const mySpacer = {
    backgroundColor: "#B1D9F3",
    color: "#B1D9F3",
    width: "60%",
    height: "2px",
    borderRadius: "5px",
    marginBottom: "1rem"
}

let Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div data-aos="fade-up" id="home" className="home">
            <div className="center">
                <h1> Ivy La 💡🌳 </h1>
                <p className="smallText">
                    <b> 💙 Full Stack Software Engineer, design enthusiast </b>{" "}
                </p>
                <div style={mySpacer}> </div>
                <p>
                    Hi, I'm Ivy! I am a software engineer based in San
                    Francisco, CA. Since 2021, I've been developing cool
                    features @ Charles Schwab. I love learning anything I can
                    about coding. At work I'm developing Java back end
                    applications while my projects feature front end interfaces
                    in both mobile and web. I hope to utilize my creations to
                    their fullest potential by delivering meaningful and elegant
                    experiences!{" "}
                </p>

                <a
                    href="https://linkedin.com/in/ivyla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinFilled
                        className="media-icons"
                        id="linkedin-icon"
                    />
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
                    href="https://docs.google.com/document/d/1nOiYDSfLW5fj_MG33Xdwjem1qQyoiI4RU0DO2PsJDBY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileTextOutlined className="media-icons" id="email-icon" />
                </a>
                <span className="codeComment"> // let's connect :-) </span>
            </div>
        </div>
    )
}
export default Home
