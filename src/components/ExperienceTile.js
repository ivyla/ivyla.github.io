import "../fonts.css"
import "../SharedStyles.css"
import "./ExperienceTile.css"
import schwab from "../images/schwab.png"
import tech4good from "../images/smile-small.png"
// import salesforce from "../images/sf2.svg"
import readlee from "../images/readlee.png"
import csa from "../images/csa.jpg"
import rad from "../images/rad.png"
let images = [schwab, readlee, rad, tech4good, csa]

let ExperienceTile = ({
    role,
    company,
    companyLink,
    roleDesc,
    date,
    imageIndex
}) => {
    const thirdBullet =
        roleDesc[2] == null ? {display: "none", padding: "0"} : null
    return (
        <div className="tile">
            <div className="contentLeft">
                <img
                    src={images[imageIndex]}
                    className="companyLogo"
                    alt="logo"
                />
            </div>
            <div className="contentRight">
                <b>
                    <p>
                        {role} @{" "}
                        <a
                            href={companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clickableLink"
                        >
                            {company}
                        </a>
                    </p>
                </b>
                <span style={{textAlign: "left"}}>
                    {" "}
                    <p className="smallText"> {date} </p>{" "}
                </span>
                <ul>
                    <li className="roleDesc"> {roleDesc[0]} </li>
                    <li className="roleDesc"> {roleDesc[1]} </li>
                    <li style={thirdBullet}> {roleDesc[2]} </li>
                </ul>
            </div>
        </div>
    )
}
export default ExperienceTile
