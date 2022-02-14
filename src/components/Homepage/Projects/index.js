import Project from "./Project"

export default function Projects() {
    return (
        <div className="projects-section">
            <h3 className="projects-section_title">Mes projets</h3>
            <Project title="CompOstons" detail="détail du projet" />
            <Project title="Autre projet" />
        </div>
    )
}