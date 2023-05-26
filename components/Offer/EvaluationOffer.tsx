import Link from "next/link"
import styles from "./Offer.module.css"

export default function EvaluationOffer(props:{ score: number, message: string, url: string}){
    return(
        <div className={`${styles.evaluation} ${props.score <= 5 ? styles.red : props.score <= 7 ? styles.yellow : styles.green }`}>
            <div className={styles.evaluation_text}>
                <span>{props.score}</span>
                <p>{props.message}</p>
            </div>
            <Link href={props.url} target="_blank">Ver oferta</Link> 
        </div>
    )
}