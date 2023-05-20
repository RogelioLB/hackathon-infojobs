import useOffers from "../../hooks/useOffers"
import Loader from "../Loader/Loader"
import Offer from "../Offer/Offer"
import styles from "./ListOffers.module.css"

export default function ListOffers(){
    const {offers,loading} = useOffers()
    
    return (
        <>
            {
            loading ? <Loader /> : 
                <div className={styles.list_offers}>
                    {offers?.map((offer)=><Offer key={offer.id} {...offer}/>)}
                </div>
            }
        </>
    )
}