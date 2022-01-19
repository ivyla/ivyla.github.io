import "./Nav.css"
// import "../SharedStyles.css"
import "../fonts.css"

const customNavStyle = {
    marginTop: "1rem",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    alignSelf: "end"
}
let Nav = () => (
    <div style={customNavStyle}>
        <ul className="navBar">
            <li className="listItem">
                <a href="." className="hoverLink">
                    Home
                </a>
            </li>
            <li className="listItem">
                <a href="#projects" className="hoverLink">
                    Projects
                </a>
            </li>
            <li className="listItem">
                <a href="#experience" className="hoverLink">
                    Experience
                </a>
            </li>
            <li className="listItem">
                <a href="#about" className="hoverLink">
                    About
                </a>
            </li>
        </ul>
    </div>
)
export default Nav
