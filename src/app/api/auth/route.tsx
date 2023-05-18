import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")
    const res = await fetch(`https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.REDIRECT_URI}`, {
        method:"POST"
    })
    const data = await res.json()
    return NextResponse.json(data)
}