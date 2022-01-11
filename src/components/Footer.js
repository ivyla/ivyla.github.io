import "../fonts.css"
import "../SharedStyles.css"
const footerText = {
    textAlign: "center",
    fontSize: "14px",
    // marginBottom: "1.3rem",
    fontFamily: "Karla"
}

const backToTop = {
    all: "unset",
    fontFamily: "Karla"
}

let Footer = () => {
    return (
        // <div className="section">
        <div style={{marginTop: "4rem"}}>
            <div style={footerText}>
                {" "}
                Built with ♥ by Ivy La. © 2021 |
                <button
                    onClick={() => window.scroll({top: 0, behavior: "smooth"})}
                    style={backToTop}
                >
                    &nbsp; Back to top
                </button>
            </div>
        </div>
    )
}
export default Footer
