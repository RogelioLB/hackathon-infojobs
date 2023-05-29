import { NextResponse } from "next/server"
import {ChatCompletionRequestMessageRoleEnum, Configuration,OpenAIApi} from "openai"
import { defaultsMessage } from "../../../../openai/messages"

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
}) 

const openai = new OpenAIApi(configuration)


export async function POST(req:Request){
    const body = await req.json()
    const { requirementsMin, skills, offerTitle, skillsAsked, experience} = body;

    try{
        const completetion = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[...defaultsMessage,
                {
                    role:ChatCompletionRequestMessageRoleEnum.User,
                    content:`Titulo de la oferta: ${offerTitle} \n  Habilidades pedidas: ${skillsAsked} \n Mi cv: ${experience} manejo ${skills}`
                }
            ]
        })
       
        const data = completetion.data.choices[0].message?.content ?? ''
        try{
            const json = JSON.parse(data.trim())
            return NextResponse.json(json)
        }catch{
            return new Response('No se ha podido transformar el JSON',{ status:500 })
        }
    }catch{
        return new Response('Este proyecto usa la API gratuita de OpenAI. Asi que solo permite 3 peticiones por minuto. Deja pasar el tiempo.',{status:500})
    }
}