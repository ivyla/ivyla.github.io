import "../fonts.css"
import "../SharedStyles.css"
import schwab from "../images/schwab.png"
import tech4good from "../images/smile-small.png"
import salesforce from "../images/sf2.svg"
import readlee from "../images/readlee.png"
import csa from "../images/csa.jpg"
import rad from "../images/rad.png"

// let images = [schwab, rad, tech4good, salesforce]
let images = [schwab, rad, tech4good]

const tile = {
    maxWidth: "25%",
    marginBottom: "20px"
}

const companyLogo = {
    height: "25vmin",
    pointerEvents: "none"
}

let ExperienceTile = ({
    role,
    company,
    companyLink,
    roleDesc,
    date,
    imageIndex
}) => {
    return (
        <div style={tile}>
            <img src={images[imageIndex]} style={companyLogo} alt="logo" />
            <p>
                {role} @ <b> {company} </b>
            </p>
            <p> 2021 - Present </p>
            <p> {roleDesc} </p>
        </div>
    )
}
export default ExperienceTile
