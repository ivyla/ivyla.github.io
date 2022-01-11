import "../fonts.css"
import "../SharedStyles.css"
import ExperienceTile from "../components/ExperienceTile"
import "./pagestyles/Experience.css"

import experienceData from "../pages/data/experienceData"

let experiences = experienceData.map((experience, index) => (
    <ExperienceTile
        role={experience.role}
        company={experience.company}
        companyLink={experience.companyLink}
        image={experience.image}
        roleDesc={experience.roleDesc}
        date={experience.date}
        imageIndex={index}
    />
))
let Experience = () => {
    return (
        <div className="section" id="experience">
            <h2> Experience </h2>
            <div className="experiences">{experiences}</div>
        </div>
    )
}
export default Experience
