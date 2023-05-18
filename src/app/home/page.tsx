"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { AuthResponse, ErrorAuthResponse } from "../../../types"
import Loader from "../../../components/Loader/Loader"

export default function Home(){
    const [token,setToken] = useState<string>()
    const [loading,setLoading] = useState<boolean>()
    const router = useRouter()
    const searchParams = useSearchParams();
    const code = searchParams.get("code")

    useEffect(()=>{
        const getToken = async () =>{
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/auth?code=${code}`)
            const data : AuthResponse = await res.json()
            if(!data.error){
                setToken(data.access_token)
            }
            setLoading(false)
        }

        if(!code) return router.replace("/")
        getToken()

    },[code,router])

    return(
        <>
            {loading ? <Loader /> : <h1>{token}</h1>}
        </>
    )
    
}