import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { offersContext } from "../context/offersContext";
import { Offer, Skill } from "../types";

export default function useOffers(id?:string){
    const { offers, loading, getOffers, currentPage, totalPages, setQuery, setOffers } = useContext(offersContext)
    const [skillsAsked,setSkillsAsked] = useState<Skill[]>()

    useEffect(()=>{
        if(!id) return
        
        const getSkillsAsked = async () =>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/offer/${id}`)
            const data : Offer = await res.json()
            console.log(data.skillsList)
            setSkillsAsked(data.skillsList)
        }

        getSkillsAsked()
    },[id])
    

    return { 
        offers,
        loading, 
        getOffers: getOffers as ((page?: number) => Promise<void>), 
        currentPage, 
        totalPages,
        setQuery: setQuery as Dispatch<SetStateAction<string>>, 
        setOffers: setOffers as Dispatch<SetStateAction<Offer[]>>,
        skillsAsked
    }
}