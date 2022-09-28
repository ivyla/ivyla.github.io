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
                    My journey as a creator began when my parents handed me a
                    copy of{" "}
                    <a href="https://spongebob.fandom.com/wiki/SpongeBob_SquarePants_Typing">
                        {" "}
                        Spongebob Squarepants Typing.
                    </a>{" "}
                    From then on, I fell in love with the idea of typing
                    something and seeing the results on the screen. This later
                    fed my curiosity and I learned how to do many different
                    things, such as make HTML changes to my Myspace page, or how
                    to edit videos with outrageous effects. Indulging into all
                    the resources the world wide web had to offer led me to
                    pursuing a major in Computer Science and a career in
                    software development.
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
