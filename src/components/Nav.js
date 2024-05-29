import "./Nav.css"
// import "../SharedStyles.css"
import "../fonts.css"
import {MenuOutlined} from "@ant-design/icons"

// const customNavStyle = {
//     marginTop: "1rem",
//     paddingLeft: "6rem",
//     paddingRight: "6rem",
//     alignSelf: "end"
// }
function myFunction() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}

let Nav = () => (
    <div className="pls">
    {/* <div className="topnav" id="myTopnav" style={customNavStyle}> */}
    {/* <div className="navContainer"> */}
        <ul>
            <li> 
                <a href="#home" className="hoverLink">Home</a>
            </li>
            <li><a href="#projects" className="hoverLink">Projects</a> </li>
            <li><a href="#experience" className="hoverLink">Experience</a></li>
            <li><a href="#skills" className="hoverLink">Skills</a></li>
            <li><a href="#about" className="hoverLink">About</a></li>
            <li>            <a href="#"
                className="media-icons icon"
                onClick={(e) => {
                    e.preventDefault()
                    myFunction()
                }}>
                <MenuOutlined />
            </a></li>
        </ul>
            {/* </div>   */}
    </div>
)
export default Nav
