import { Skill } from "../../types";
import styles from "./Skill.module.css"

export default function Skill({skill}:{skill:Skill}){
    return (
        <span className={`${styles.skill} ${skill.level === "alto" ? styles.skill_green : skill.level === "medio" ? styles.skill_yellow : styles.skill_red}`}>{skill.skill}</span>
    )
}