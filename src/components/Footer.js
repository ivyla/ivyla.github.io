import "../fonts.css"

const footerText = {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "1.3rem",
    fontFamily: "Karla"
}

const backToTop = {
    all: "unset",
    fontFamily: "Karla"
}

let Footer = () => {
    return (
        <div style={footerText}>
            {" "}
            Built with ♥ by Ivy La. © 2021 |
            <button
                onClick={() => window.scroll({top: 0, behavior: "smooth"})}
                style={backToTop}
            >
                &nbsp; Back to top
            </button>
            {/* <a
                // href="#0"
                target="_blank"
                rel="noopener noreferrer"
                // style={linkStyle}
            >
                {" "}
                Back to top{" "}
            </a> */}
        </div>
    )
}
export default Footer
