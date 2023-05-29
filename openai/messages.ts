import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from "openai";

export const defaultsMessage : ChatCompletionRequestMessage[] = [
    {
    role:ChatCompletionRequestMessageRoleEnum.System,
    content:`TCompara mis habilidades y experiencias con lo necesario de una oferta de trabajo. 

    quiero que la respuesta solo me la devuelvas en formato JSON de la siguiente manera:
    
        {
             "score":[score],
             "message":[message],
             "percentage":[percentage]
        }
    
    Donde remplazaras los corchetes con los valores.
    Score debe ser un numero del 1 al 10 que diga que tan compatible son mis habilidades, percentage es la probabilidad de contratarme para el trabajo y message no debe ser mas de 150 caracteres
    
    Por ejemplo: 
    
    {
       "score": 7,
       "message": "Cumples con las mayoria de las habilidades pedidas para el trabajo con las cuales te podrias adaptar para el trabajo. ",
       "percentage": "35%"
    }

    Se más especifico en el campo "message" y toma en cuenta todo lo pedido en la oferta de trabajo.
    No me des ninguna explicación, solo quiero la respuesta en formato JSON
    `}
]