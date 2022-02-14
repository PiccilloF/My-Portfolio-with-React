const classNames = require('classnames');

export default function Skill({range, skill}){
    let rangeClass = classNames( `span w-${range}`);
    return(
    <>   
        <div className="techno">
            <span className="font-medium text-sm">
                {skill}
            </span>
        </div>
            <div className="progress-line">
            <span className={rangeClass}></span>
        </div>
    </> 
    )
};