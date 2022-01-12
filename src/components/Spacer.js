const spacerLarge = {
    backgroundColor: "#B1D9F3",
    width: "400px",
    height: "2px",
    borderRadius: "5px",
    marginBottom: "1rem"
    // boxShadow: "0 2px 3px rgb(0 0 0 / 0.2)"
}

const spacerMedium = {
    backgroundColor: "#B1D9F3",
    width: "300px",
    height: "2px",
    borderRadius: "5px",
    marginBottom: "1rem"
    // boxShadow: "0 2px 3px rgb(0 0 0 / 0.2)"
}
const spacerSmall = {
    backgroundColor: "#B1D9F3",
    width: "200px",
    height: "2px",
    borderRadius: "5px",
    marginBottom: "1rem"
    // boxShadow: "0 2px 3px rgb(0 0 0 / 0.2)"
}

let spacers = [spacerSmall, spacerMedium, spacerLarge]

let Spacer = ({spacerNum}) => <div style={spacers[spacerNum]}></div>
export default Spacer
