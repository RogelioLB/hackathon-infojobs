import { NextResponse } from "next/server"
import {ChatCompletionRequestMessageRoleEnum, Configuration,OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
}) 

const openai = new OpenAIApi(configuration)
const defaultMessage = {role:ChatCompletionRequestMessageRoleEnum.System,content:`Quiero que cuando te pase requerimientos minimos de una oferta de trabajo y mis habilidades me los compares y me des una puntuacion del 1 al 10, quiero que me devuelvas la respuesta en formato JSON sera el siguiente: 

{
     "score":[score],
     "message":[message],
}

tienes que cambiar lo que hay entre corchetes por el valor. el maximo de caracteres permitidos en 'message' sera de 300 por lo que se simple y conciso.
Tambien ten en cuenta que un nivel alto significa que tiene conocimientos avanzados del tema, un nivel medio tiene conocimientos del tema, y un nivel bajo apenas tiene conocimientos del tema. Por lo que basate en esos parametros para dar tu score. 
Además no seas tan estricto y ten más en cuenta mis habilidades que los requerimientos. No tengas en cuenta los años de experiencia que piden en la oferta.

Por ejemplo: 

{
   "score": 6,
   "message": "Si bien tus habilidades encajan con lo que piden no tienes la experiencia indicada."
}`}

export async function POST(req:Request){
    const body = await req.json()
    const {requirementsMin,skills} = body;
    try{
        const completetion = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[defaultMessage,{role:ChatCompletionRequestMessageRoleEnum.User,content:`Requerimientos minimos: ${requirementsMin}. Mis habilidades: ${skills}`}]
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