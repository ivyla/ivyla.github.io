import "../fonts.css"
import {CoffeeOutlined} from "@ant-design/icons"
// <CoffeeOutlined />
import "../SharedStyles.css"
import "./pagestyles/About.css"
import bioImg from "../images/bioAlt.jpg"
import Spacer from "../components/Spacer"

// might install a carousel

let About = () => (
    <div className="section" id="about">
        <h2> About Me 😋</h2>
        <Spacer spacerNum={0} />
        <div className="aboutInfo">
            <div className="aboutText">
                <p style={{marginTop: "0"}}>
                    {" "}
                    Thank you so much for visiting my site! Heres a few fun
                    facts about me:{" "}
                </p>

                <p>
                    Phasellus vulputate malesuada tortor, convallis maximus sem
                    efficitur ut. Pellentesque id aliquet neque. Curabitur
                    sodales magna finibus. Phasellus vulputate malesuada tortor,
                    convallis maximus sem efficitur ut. Pellentesque id aliquet
                    neque. Curabitur sodales magna finibus. Phasellus vulputate
                    malesuada tortor, convallis maximus sem efficitur ut.
                    Pellentesque id aliquet neque. Curabitur sodales magna
                    finibus.
                </p>
            </div>
            <div>
                <img src={bioImg} className="bioImgStyle" alt="Me" />
            </div>
        </div>

        {/* <p className="additionalComment">
            if you would like to know more about me or chat about anything, i'd
            love to connect! <CoffeeOutlined className="media-icons" />
        </p> */}
    </div>
)
export default About
