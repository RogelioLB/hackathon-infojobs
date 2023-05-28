import InfiniteScroll from "react-infinite-scroll-component"
import useOffers from "../../hooks/useOffers"
import useTags from "../../hooks/useTags"
import Loader from "../Loader/Loader"
import Offer from "../Offer/Offer"
import styles from "./ListOffers.module.css"

export default function ListOffers(){
    const { offers, loading, currentPage, getOffers, totalPages, query, totalResults } = useOffers()
    const { tags } = useTags()

    const handleNext = async () => {
        const teleworkingTags = tags.map(t=>`&teleworking=${t.id}`).join('')
        await getOffers(currentPage+1,teleworkingTags)
    }

    return (
        <>
            {
                loading && offers.length<=0 ? <Loader /> : 
                offers.length > 0 &&
                    <InfiniteScroll className={styles.list_offers} dataLength={offers.length} next={handleNext} hasMore={currentPage<totalPages} loader={<Loader />}>
                        <h4>Hay {totalResults} resultados {query && `para ${query}`}</h4>
                        {offers.map(offer=><Offer key={offer.id} {...offer} />)}
                    </InfiniteScroll>
            }
        </>
    )
}