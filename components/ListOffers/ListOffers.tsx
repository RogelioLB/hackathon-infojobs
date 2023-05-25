import InfiniteScroll from "react-infinite-scroll-component"
import useOffers from "../../hooks/useOffers"
import Loader from "../Loader/Loader"
import Offer from "../Offer/Offer"
import styles from "./ListOffers.module.css"

export default function ListOffers(){
    const {offers,loading,currentPage,getOffers,totalPages} = useOffers()

    return (
        <>
            {
                loading && !(offers.length>0) ? <Loader /> : 
                offers.length > 0 && 
                    <InfiniteScroll className={styles.list_offers} dataLength={offers.length} next={async()=>await getOffers(currentPage+1)} hasMore={currentPage<totalPages} loader={<Loader />}>
                        {offers.map(offer=><Offer key={offer.id} {...offer} />)}
                    </InfiniteScroll> 
            }
        </>
    )
}