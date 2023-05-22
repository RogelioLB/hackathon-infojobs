"use client"
import { useSearchParams } from "next/navigation"
import ListOffers from "../../../components/ListOffers/ListOffers"
import ListSkills from "../../../components/ListSkills/ListSkills"
import Loader from "../../../components/Loader/Loader"
import Modal from "../../../components/Modal/Modal"
import SearchBar from "../../../components/SearchBar/SearchBar"
import useCurriculum from "../../../hooks/useCurriculum"
import useToken from "../../../hooks/useToken"

export default function Home(){
    const searchParams = useSearchParams()
    const code = searchParams.get("code")
    const [token,loading] = useToken(code)
    useCurriculum(token as string)

    return(
        <>
            {loading && !token ? <Loader /> : 
                <div className="content">
                    <SearchBar />
                    <ListSkills />
                    <ListOffers />
                    <Modal />
                </div>
            }
        </>
    )
    
}