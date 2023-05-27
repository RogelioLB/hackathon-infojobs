import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { offersContext } from "../context/offersContext";
import { Offer, SkillInfo } from "../types";

export default function useOffers(id?:string){
    const { offers, loading, getOffers, currentPage, totalPages, setQuery, setOffers, query, totalResults } = useContext(offersContext)
    const [skillsAsked,setSkillsAsked] = useState<SkillInfo[]>()

    useEffect(()=>{
        if(!id) return
        
        const getSkillsAsked = async () =>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/offer/${id}`)
            const data : Offer = await res.json()
            setSkillsAsked(data.skillsList)
        }

        getSkillsAsked()
    },[id])
    

    return { 
        offers,
        loading, 
        getOffers: getOffers as ((page?: number, teleworkin?:string) => Promise<void>), 
        currentPage, 
        totalPages,
        setQuery: setQuery as Dispatch<SetStateAction<string>>, 
        setOffers: setOffers as Dispatch<SetStateAction<Offer[]>>,
        skillsAsked,
        query,
        totalResults
    }
}