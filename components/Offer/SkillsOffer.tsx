import { SkillInfo } from "../../types"
import Skill from "../Skill/Skill"
import styles from "./Offer.module.css"

export default function SkillsOffer({ skills } : { skills?: SkillInfo[] }){
    return(
        <div className={styles.skills_offer}>
            <h3>Habilidades especificas: </h3>
            <ul>
                {
                    skills && skills.length > 0 ? skills.map(sk=><Skill skill={sk} color="#475569" key={sk.skill}/>) : <span>No hay habilidades.</span>
                }
            </ul>
        </div>
    )
}