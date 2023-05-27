import Image from "next/image"
import { Profile } from "../../types"
import styles from "./Offer.module.css"

export default function ContentOffer({ profile, title, onClick, loading } : { profile:Profile, title: string, onClick: () => void, loading:boolean }){
    return(
        <div className={styles.content_offer}>
            <Image src={profile.logoUrl ?? "/not-found.png"} width={80} height={80} alt={profile.name} />
            <div className={styles.evaluate_offer}>
                <h2>{title}</h2>
                <button onClick={onClick} disabled={loading}>{loading ? 'Cargando...' : 'Evaluame'}</button>
            </div>
        </div>
    )
}