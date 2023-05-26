import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    const headersList = headers();
    const token = headersList.get('Authorization');
    const res = await fetch(`${process.env.API_URL}/2/curriculum/${params.id}/experience`,{
        headers:{
            "Authorization":`Basic ${process.env.INFOJOBS_TOKEN}, ${token} `,  
            "Content-Type":"application/json"          
        }
    })
    const data = await res.json();
    console.log(data)
    return NextResponse.json(data)
}