import { Skill } from "../../types";
import styles from "./Skill.module.css"

export default function Skill({ skill, color }:{ skill:Skill, color?: string }){
    return (
        <span className={styles.skill} style={{backgroundColor:color}}>{skill.skill}</span>
    )
}