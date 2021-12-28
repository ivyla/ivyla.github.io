import logo from ".././images/logo.svg"
// import "./pagestyles/Home.css"
import "../fonts.css"
import "../SharedStyles.css"
// import schwab from "../images/schwab.png"
// import tech4good from "../images/smile-small.png"
// import salesforce from "../images/sf2.svg"
// import readlee from "../images/readlee.png"
// import csa from "../images/csa.jpg"

const tile = {
    maxWidth: "25%",
    marginBottom: "20px"
}

const companyLogo = {
    height: "25vmin",
    pointerEvents: "none"
}

let ExperienceTile = ({role, company, companyLink, roleDesc, date, image}) => {
    // let tempBullets = [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi sit amet viverra sapien"
    // ]
    // let projectItems = tempBullets.map((item) => <li> {item} </li>)

    return (
        <div style={tile}>
            {/* <img src={\" + image + \"} style={companyLogo} alt="logo" /> */}
            <p>
                {role} @ <b> {company} </b>
                {/* {" "}
                Software Engineer @ <b> Charles Schwab </b>{" "} */}
            </p>
            {/* <span style={dateStyle}> 2021 - Present </span> */}
            <p> 2021 - Present </p>
            {/* <p> {tempBullets[0]} </p> */}
        </div>
    )
}
export default ExperienceTile
