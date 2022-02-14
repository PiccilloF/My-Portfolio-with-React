const classNames = require('classnames');

export default function Skill({...prop}){
    let rangeClass = classNames( `span w-${prop.range}`);
    return(
    <>   
        <div className="techno">
            <span className="font-medium text-sm">
                {prop.skill}
            </span>
        </div>
            <div className="progress-line">
            <span className={rangeClass}></span>
        </div>
    </> 
    )
};