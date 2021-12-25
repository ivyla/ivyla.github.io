import logo from ".././images/logo.svg"
// import "./pagestyles/Home.css"
import "../fonts.css"
import "../SharedStyles.css"

const tile = {
    maxWidth: "25%",
    marginBottom: "20px"
}

const companyLogo = {
    height: "25vmin",
    pointerEvents: "none"
}

const dateStyle = {
    // fontSize: "1rem"
}

let ExperienceTile = ({
    experienceName,
    experienceDesc,
    date,
    bullets,
    companyUrl,
    companyLink,
    image
}) => {
    // let tempImages = []
    let tempBullets = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi sit amet viverra sapien"
    ]
    let projectItems = tempBullets.map((item) => <li> {item} </li>)

    return (
        <div style={tile}>
            <img src={image} style={companyLogo} alt="logo" />
            <p>
                {" "}
                Software Engineer @ <b> Charles Schwab </b>{" "}
            </p>
            {/* <span style={dateStyle}> 2021 - Present </span> */}
            <p> 2021 - Present </p>
            <p> {tempBullets[0]} </p>
            {/* <ul>{projectItems}</ul> */}
        </div>
    )
}
export default ExperienceTile
