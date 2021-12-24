import logo from ".././images/logo.svg"
// import "./pagestyles/Home.css"
import "../fonts.css"
import "../SharedStyles.css"
let ExperienceTile = ({
    experienceName,
    experienceDesc,
    date,
    bullets,
    companyUrl,
    companyLink
}) => {
    let tempBullets = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Morbi sit amet viverra sapien. In condimentum vehicula risus eu dictum",
        "Morbi quis efficitur erat. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    ]
    let projectItems = tempBullets.map((item) => <li> {item} </li>)

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {" "}
                Software Engineer @ <b> Charles Schwab </b>{" "}
            </p>
            <p> 2021 - Present </p>
            <ul>{projectItems}</ul>
        </div>
    )
}
export default ExperienceTile
