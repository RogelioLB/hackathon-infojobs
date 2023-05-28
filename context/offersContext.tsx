
"use client"
import { createContext, ReactNode, useState } from "react";
import { FetchError } from "../errors";
import useModal from "../hooks/useModal";
import { OfferResponse, OffersContextValues } from "../types";

const DEFAULT_VALUES : OffersContextValues = { 
    offers:[], 
    loading:true, 
    currentPage:1, 
    totalPages:0, 
    query:"", 
    totalResults:0 
}

export const offersContext = createContext(DEFAULT_VALUES)

const OffersContext = ({ children } : { children:ReactNode }) =>{
    const [offers,setOffers] = useState(DEFAULT_VALUES.offers)
    const [loading,setLoading] = useState(DEFAULT_VALUES.loading)
    const [currentPage,setCurrentPage] = useState(DEFAULT_VALUES.currentPage)
    const [totalPages,setTotalPages] = useState(DEFAULT_VALUES.totalPages)
    const [totalResults,setTotalResults] = useState(DEFAULT_VALUES.totalResults)
    const [query,setQuery] = useState(DEFAULT_VALUES.query)
    const { showModal } = useModal()

    const getOffers = async (page:number = currentPage,teleworking?:string) =>{
        setLoading(true)
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/offer?q=${query}&page=${page}${teleworking && teleworking}`)
            const data : OfferResponse = await res.json()
            setOffers(offers => [...offers,...data.offers.filter(offer => offer.requirementMin.length>0)])
            setCurrentPage(data.currentPage)
            setTotalPages(data.totalPages)
            setTotalResults(data.totalResults)
            setLoading(false)
        }catch{
            const err = new FetchError("Hubo un error inesperado en la peticion.")
            showModal(err.message)
            setLoading(false)
        }
    }

    return(
        <offersContext.Provider value={{ totalResults, offers, loading, getOffers, currentPage, totalPages, setQuery, setOffers, query }}>
            {children}
        </offersContext.Provider>
    )
}

export default OffersContext