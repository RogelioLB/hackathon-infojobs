import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const headersList = headers();
    const token = headersList.get('Authorization');
    const res = await fetch(`${process.env.API_URL}/2/curriculum`,{
        headers:{
            "Authorization":`Basic ${process.env.INFOJOBS_TOKEN}, ${token} `,  
            "Content-Type":"application/json"          
        }
    })
    const data = await res.json();
    return NextResponse.json(data)
}