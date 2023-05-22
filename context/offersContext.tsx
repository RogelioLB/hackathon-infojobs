
"use client"
import { createContext, ReactNode, useState } from "react";
import { Offer, OfferResponse, OffersContextValues } from "../types";

const defaultValue : OffersContextValues = { offers:[],loading:true }

export const offersContext = createContext(defaultValue)

const OffersContext = ({ children } : { children:ReactNode }) =>{
    const [offers,setOffers] = useState<Offer[]>([])
    const [loading,setLoading] = useState<boolean>(false)

    const getOffers = async (query:string) =>{
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/offer?q=${query}`)
        const data : OfferResponse = await res.json()
        setOffers(data.offers.filter( offer => offer.requirementMin.length>0 ))
        setLoading(false)
    }

    return(
        <offersContext.Provider value={{ offers, loading, getOffers }}>
            {children}
        </offersContext.Provider>
    )
}

export default OffersContext