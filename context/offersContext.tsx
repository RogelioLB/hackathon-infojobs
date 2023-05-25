
"use client"
import { createContext, ReactNode, useState } from "react";
import { FetchError } from "../errors";
import useModal from "../hooks/useModal";
import { Offer, OfferResponse, OffersContextValues } from "../types";

const defaultValue : OffersContextValues = { offers:[],loading:true, currentPage:1, totalPages:0 }

export const offersContext = createContext(defaultValue)

const OffersContext = ({ children } : { children:ReactNode }) =>{
    const [offers,setOffers] = useState<Offer[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [currentPage,setCurrentPage] = useState(1)
    const [totalPages,setTotalPages] = useState<number>(0)
    const [query,setQuery] = useState("")
    const {showModal} = useModal()

    const getOffers = async (page:number = currentPage) =>{
        setLoading(true)
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/offer?q=${query}&page=${page}`)
            const data : OfferResponse = await res.json()
            setOffers(offers => [...offers,...data.offers.filter(offer => offer.requirementMin.length>0)])
            setCurrentPage(data.currentPage)
            setTotalPages(data.totalPages)
            setLoading(false)
        }catch{
            const err = new FetchError("Hubo un error inesperado en la peticion.")
            showModal(err.message)
            setLoading(false)
        }
    }

    return(
        <offersContext.Provider value={{ offers, loading, getOffers, currentPage, totalPages, setQuery }}>
            {children}
        </offersContext.Provider>
    )
}

export default OffersContext