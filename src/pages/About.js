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
        {/* <Spacer spacerNum={0} /> */}
        <div className="aboutInfo">
            <div className="aboutText">
                <p>
                    My passion for technology began when my parents handed me a
                    copy of{" "}
                    <a href="https://spongebob.fandom.com/wiki/SpongeBob_SquarePants_Typing">
                        {" "}
                        Spongebob Squarepants Typing.
                    </a>{" "}
                    Little did I know, the fundamental skill of typing opened me
                    up to the amazing world wide web - I spent much of my free
                    as a child
                </p>

                <p>
                    {" "}
                    In my spare time, I like to design websites, play video
                    games, and keep myself up to date on the latest competition
                    shows. Some of my other interests include nature, art,
                    animation, stage lighting, and trying new tea flavors!
                </p>

                <p style={{marginTop: "0"}}>
                    {" "}
                    Thank you so much for visiting my site, there's nothing I
                    love more than letting others see my creations.
                </p>
            </div>
            <div className="aboutImg">
                <img src={bioImg} className="bioImgStyle" alt="Me" />
                <p className="imageCaption">
                    //fun fact: i lived by a 7-11 for 3 years!
                </p>
            </div>
        </div>

        {/* <p className="additionalComment">
            if you would like to know more about me or chat about anything, i'd
            love to connect! <CoffeeOutlined className="media-icons" />
        </p> */}
    </div>
)
export default About
