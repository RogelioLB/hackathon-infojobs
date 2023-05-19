"use client"
import { useRouter, useSearchParams } from "next/navigation"
import Loader from "../../../components/Loader/Loader"
import SearchBar from "../../../components/SearchBar/SearchBar"
import useToken from "../../../hooks/useToken"

export default function Home(){
    const searchParams = useSearchParams()
    const code = searchParams.get("code")

    const [token,loading] = useToken(code)

    return(
        <>
            {loading && !token ? <Loader /> : 
                <div className="content">
                    <SearchBar />
                </div>
            }
        </>
    )
    
}