import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from "openai";

export const defaultsMessage : ChatCompletionRequestMessage[] = [
    {
    role:ChatCompletionRequestMessageRoleEnum.System,
    content:`Te pasare los requerimientos minimos y habilidades pedidas de una oferta de trabajo, quiero que las compares con mi cv que te pasare, quiero que la respuesta me la devuelvas en formato JSON de la siguiente manera:

    {
         "score":[score],
         "message":[message],
    }

Donde remplazaras los corchetes con los valores.
Score debe ser un numero del 1 al 10 y message no debe ser mas de 150 caracteres
    
    Por ejemplo: 
    
    {
       "score": 8,
       "message": "Cumples con la mayoria de habilidades pedidas para el trabajo."
    }

    Se más especifico en el campo "message" y toma en cuenta todo lo pedido en la oferta de trabajo.
    `}
]