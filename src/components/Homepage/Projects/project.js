import PropTypes from "prop-types";

export default function Project({title, detail}) {
    return (
        <div className="project">
            <h4 className="project-title">{title}</h4>
            <article className="project-detail">{detail}</article>
            <img src="image de compostons" alt="image du projet CompOstons"></img>
        </div>
    )
}

Project.propTypes={
    title:PropTypes.string.isRequired,
    detail:PropTypes.string.isRequired,
};