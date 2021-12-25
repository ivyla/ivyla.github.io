import "../fonts.css"

const footerText = {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "1.3rem"
}

const linkStyle = {
    textDecoration: "none"
}

let Footer = () => {
    return (
        <div style={footerText}>
            {" "}
            Built with ♥ by Ivy La. © 2021 |
            <a href="" style={linkStyle}>
                {" "}
                Back to top{" "}
            </a>
        </div>
    )
}
export default Footer
