import { useContext } from "react";
import { offersContext } from "../context/offersContext";

export default function useOffers(){
    const { offers, loading, getOffers, currentPage,totalPages,setQuery } = useContext(offersContext)

    return { offers, loading, getOffers: getOffers as ((page?: number) => Promise<void>), currentPage, totalPages,setQuery}
}