"use client"
import { useRouter, useSearchParams } from "next/navigation"
import ListOffers from "../../../components/ListOffers/ListOffers"
import ListSkills from "../../../components/ListSkills/ListSkills"
import Loader from "../../../components/Loader/Loader"
import SearchBar from "../../../components/SearchBar/SearchBar"
import useCurriculum from "../../../hooks/useCurriculum"
import useToken from "../../../hooks/useToken"
import { CurriculumSkills } from "../../../types"

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
                </div>
            }
        </>
    )
    
}