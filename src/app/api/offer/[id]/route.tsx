import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    const res = await fetch(`${process.env.API_URL}/7/offer/${params.id}`,{
        headers:{
            "Authorization":`Basic ${process.env.INFOJOBS_TOKEN}`,  
            "Content-Type":"application/json"          
        }
    })
    const data = await res.json();
    return NextResponse.json(data)
}