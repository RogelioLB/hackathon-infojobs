import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url)
    const query = searchParams.get("q")
    const res = await fetch(`${process.env.API_URL}/6/offer?q=${query}`,{
        headers:{
            "Authorization":`Basic ${process.env.INFOJOBS_TOKEN}`,  
            "Content-Type":"application/json"          
        }
    })
    const data = await res.json();
    return NextResponse.json(data)
}