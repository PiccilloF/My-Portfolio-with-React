import Skill from './Skill';

export default function Skills(props) {
   
    return (
        <div className="flex flex-col items-center p-3">
            <h3 className="p-2 mt-1 text-xl font-bold">Compétences</h3>
                <h4 className="skills">Technologies pratiquées</h4>
                <div className="bar">
                   <Skill range = {props.range} skill = {props.skill} />
                </div>
            <br/>
            <div className="skills">
                <h4>Autres compétences</h4>
            </div>
        </div>
    );
}