import Link from "next/link"
import { EvaluationComponentProps } from "../../types"
import styles from "./Offer.module.css"

export default function EvaluationOffer(props:EvaluationComponentProps){
    return(
        <div className={`${styles.evaluation} ${props.score <= 5 ? styles.red : props.score <= 7 ? styles.yellow : styles.green }`}>
            <div className={styles.evaluation_text}>
                <div className={styles.evaluation_score}>
                    <span>{props.score}</span>
                    <div className={styles.percentage}>
                        <h5>Probabilidad: </h5>
                        <span>{props.percentage}</span>
                    </div>
                </div>
                <p>{props.message}</p>
            </div>
            <Link href={props.url} target="_blank">Ver oferta</Link> 
        </div>
    )
}