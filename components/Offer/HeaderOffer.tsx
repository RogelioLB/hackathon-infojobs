import styles from "./Offer.module.css"

export default function HeaderOffer({ city, publicationDate } : { city:string, publicationDate: string}){
    const publication = new Date(publicationDate)
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    return(
        <div className={styles.header_offer}>
            <span>{city}</span>
            <span>{publication.getDate()} de {months[publication.getMonth()]} {publication.getFullYear()}</span>
        </div>
    )
}