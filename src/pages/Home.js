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
import Spacer from "../components/Spacer"

const customHomeSection = {
    height: "90vh",
    width: "80%",
    marginTop: "150px"
    // marginTop: "5%"
    // alignSelf: "center"
}

let Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div data-aos="fade-up" style={customHomeSection} id="home">
            {/* <div id="home" style={customHomeSection}> */}
            <h1 className="homeHeader"> Ivy La 💡🌳 </h1>
            <p className="smallText">
                <b> 💙 Full Stack Software Engineer, design enthusiast </b>{" "}
            </p>
            <Spacer spacerNum={2} />
            <p>
                Hello, my name is Ivy! I am a Full Stack developer based in San
                Francisco, CA. Currently, I work at Charles Schwab where I am
                developing Java applications and studying investment performance
                methodology. I love learning anything there is to know about
                computing and creating meaningful, elegant experiences.{" "}
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
