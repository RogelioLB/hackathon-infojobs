import useSkills from "../../hooks/useSkills";
import { CurriculumSkills } from "../../types";
import Skill from "../Skill/Skill";
import styles from "./ListSkills.module.css"

export default function ListSkills(){
    const skills = useSkills()
    return (
        <div className={styles.list_skills}>
            <h4>Mis habilidades: </h4>
            <ul>
                {skills && skills?.expertise?.map(skill=><Skill key={skill.skill} skill={skill}/>)}
            </ul>
        </div>
    )
}