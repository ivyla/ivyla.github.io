let InfoTile = ({
    projectName,
    projectDesc,
    technologies,
    repoLink,
    demoLink
}) => (
    <div>
        <h2> My Cool App </h2>
        <p>
            {" "}
            An app created to bring together and crowdsource projects. It does
            this and it does that{" "}
        </p>
        <p>
            <i> React, MongoDB, Node </i>
        </p>
        <a href="facebook.com"> Link 1 </a>
        <a href="facebook.com"> Link 2 </a>
    </div>
)
export default InfoTile
