import "./Nav.css"
// import "../SharedStyles.css"
import "../fonts.css"
import {MenuOutlined} from "@ant-design/icons"

const customNavStyle = {
    marginTop: "1rem",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    alignSelf: "end"
}
function myFunction() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}

let Nav = () => (
    <div className="topnav" id="myTopnav" style={customNavStyle}>
        <a href="#home" className="hoverLink">
            Home
        </a>
        <a href="#projects" className="hoverLink">
            {" "}
            Projects{" "}
        </a>
        <a href="#experience" className="hoverLink">
            {" "}
            Experience{" "}
        </a>
        <a href="#skills" className="hoverLink">
            {" "}
            Skills{" "}
        </a>
        <a href="#about" className="hoverLink">
            About{" "}
        </a>
        <a
            href="#"
            className="media-icons icon"
            onClick={(e) => {
                e.preventDefault()
                myFunction()
            }}
        >
            <MenuOutlined />
        </a>
    </div>
)
export default Nav
