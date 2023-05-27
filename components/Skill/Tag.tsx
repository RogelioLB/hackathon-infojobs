import { FaTimes } from "react-icons/fa"
import styles from "./Skill.module.css"

export default function Tag({ text, color, onClick }:{ text:string, color?: string, onClick:()=>void }){
    return (
        <span className={styles.skill} style={{backgroundColor:color}}>{text} <FaTimes onClick={onClick} /></span>
    )
}