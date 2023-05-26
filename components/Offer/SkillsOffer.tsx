import { Skill } from "../../types"
import * as SFC from "../Skill/Skill"
import styles from "./Offer.module.css"
const SkillFC = SFC.default

export default function SkillsOffer({ skills } : { skills?: Skill[] }){
    return(
        <div className={styles.skills_offer}>
            <h3>Habilidades especificas: </h3>
            <ul>
                {
                    skills && skills.map(sk=><SkillFC skill={sk} color="#475569" key={sk.skill}/>)
                }
            </ul>
        </div>
    )
}