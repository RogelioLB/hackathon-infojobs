import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthResponse } from "../types";

export default function useToken(code?:string | null){
    const [token,setToken] = useState<string>()
    const [loading,setLoading] = useState<boolean>(true)
    const router = useRouter()

    useEffect(()=>{
        const getToken = async () =>{
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth?code=${code}`)
            const data : AuthResponse = await res.json()
            if(data.error) return router.replace("/")
            setToken(data.access_token)
            setLoading(false)
        }

        if(!code) return router.replace("/")
        getToken()

    },[code,router])

    return [token,loading]
}