import { useState } from "react";
import { EvaluationError } from "../../errors";
import useExperience from "../../hooks/useExperience";
import useModal from "../../hooks/useModal";
import useOffers from "../../hooks/useOffers";
import useSkills from "../../hooks/useSkills";
import { CurriculumSkills, EvaluationResponse, Offer } from "../../types";
import ContentOffer from "./ContentOffer";
import EvaluationOffer from "./EvaluationOffer";
import HeaderOffer from "./HeaderOffer";
import styles from './Offer.module.css'
import SkillsOffer from "./SkillsOffer";

export default function Offer(props:Offer){
    const [evaluation,setEvaluation] = useState<{score:number,message:string, percentage:string}>()
    const [loading,setLoading] = useState(false)
    const skills = useSkills()
    const {skillsAsked} = useOffers(props.id)
    const expertise = useExperience()
    const {showModal} = useModal()

    const generateSkills = (skills:CurriculumSkills) => {
        const {expertise,language} = skills
        const exp = expertise.map((sk)=>{
            return `${sk.skill} ${sk.level}`
        }).join(', ')
        return exp
    }
    const parsedSkills = generateSkills(skills as CurriculumSkills)

    const getScore = async () =>{
        setLoading(true)
        const parseSkillsAsked = skillsAsked?.map(sk=>{
            return `${sk.skill}`
        }).join(",")
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/evaluate`,{
                body:JSON.stringify(
                    {
                        requirementsMin:props.requirementMin, 
                        skills: parsedSkills,
                        offerTitle:props.title,
                        skillsAsked:parseSkillsAsked,
                        experience:expertise
                    }),
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(res.status===500) throw new EvaluationError(await res.text())
            const data : EvaluationResponse = await res.json()
            setEvaluation(data)
            setLoading(false)
        }catch(err){
            if(err instanceof EvaluationError) showModal(err.message)
            else showModal('A ocurrido un error.')
            setLoading(false)
        }
    }

    return(
        <div className={styles.group}>
            <article className={styles.offer}>
                <HeaderOffer city={props.city} publicationDate={props.published} />
                <ContentOffer profile={props.author} onClick={getScore} title={props.title} loading={loading} />
                <SkillsOffer skills={skillsAsked}/>
            </article>
            { evaluation && <EvaluationOffer {...evaluation} url={props.link}  /> }
        </div>
    )
}