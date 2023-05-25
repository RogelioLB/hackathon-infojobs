import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EvaluationError } from "../../errors";
import useModal from "../../hooks/useModal";
import useSkills from "../../hooks/useSkills";
import { CurriculumSkills, Offer } from "../../types";
import styles from './Offer.module.css'

export default function Offer(props:Offer){
    const [evaluation,setEvaluation] = useState<{score:number,message:string}>()
    const [loading,setLoading] = useState(false)
    const skills = useSkills()
    const {showModal} = useModal()

    const generateSkills = (skills:CurriculumSkills) => {
        const {expertise,language} = skills
        const exp = expertise.map((sk)=>{
            return `${sk.skill} ${sk.level}`
        }).join(', ')
        return exp
    }
    const parseSkills = generateSkills(skills as CurriculumSkills)

    const getScore = async () =>{
        setLoading(true)
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/evaluate`,{
                body:JSON.stringify({requirementsMin:props.requirementMin, skills: parseSkills,offertTitle:props.title}),
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(res.status===500) throw new EvaluationError(await res.text())
            const data : { score:number,message:string } = await res.json()
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
                <div className={styles.offer_left}>
                    <div className={styles.offer_square}>
                        <Image src={props.author.logoUrl} alt={props.author.name} fill />
                    </div>
                    {
                        evaluation?.score && 
                        <div className={`${styles.offer_square} ${styles.offer_score} ${evaluation.score >= 8 ? styles.offer_score_green : evaluation.score >= 6 ? styles.offer_score_yellow : styles.offer_score_red}`}>
                            <span>{evaluation.score}</span>
                        </div>
                    }
                </div>
                <div className={styles.offer_right}>
                    <h3>{props.title}</h3>
                    <p>{props.requirementMin}</p>
                    <button onClick={getScore} disabled={loading}>{loading ? "Cargando..." : "Evaluar"}</button>
                </div>
            </article>
            {
                evaluation 
                && 
                <div className={`${styles.recomendation} ${evaluation.score >= 8 ? styles.offer_score_green : evaluation.score >= 6 ? styles.offer_score_yellow : styles.offer_score_red}`}>
                    <p>{evaluation.message}</p>
                    <Link href={props.link} target="_blank">Ver oferta</Link>
                </div>
            }
        </div>
    )
}