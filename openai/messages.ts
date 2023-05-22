import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from "openai";

export const defaultsMessage : ChatCompletionRequestMessage[] = [
    {
    role:ChatCompletionRequestMessageRoleEnum.System,
    content:`Quiero que cuando te pase requerimientos minimos de una oferta de trabajo y mis habilidades me los compares y me des una puntuacion del 1 al 10, quiero que me devuelvas la respuesta en formato JSON sera el siguiente: 

    {
         "score":[score],
         "message":[message],
    }
    
    tienes que cambiar lo que hay entre corchetes por el valor. el maximo de caracteres permitidos en 'message' sera de 300 por lo que se descriptivo en lo más posible.
    Tambien ten en cuenta que un nivel alto significa que tiene conocimientos avanzados del tema, un nivel medio tiene conocimientos del tema, y un nivel bajo apenas tiene conocimientos del tema. Por lo que basate en esos parametros para dar tu score. 
    No tengas en cuenta la experiencia previa para el trabajo.
    
    Por ejemplo: 
    
    {
       "score": 8,
       "message": "Cumples con la mayoria de habilidades pedidas para el trabajo."
    }
    `},

    {
        role:ChatCompletionRequestMessageRoleEnum.User,
        content:"No tengas en cuenta la experiencia necesaria para el trabajo, solo toma en cuenta las habilidades pedidas. Toma en cuenta las habilidades relacionadas con el trabajo y lo que pide en la oferta."
    },
    {
        role:ChatCompletionRequestMessageRoleEnum.User,
        content: "Oferta: ¿Que precisamos? · FP en Diseño Grafico, cursos Photoshop, diseño gráfico y visual y/o similares · Experiencia en puesto similar de un año. · Nivel avanzado de Photoshop · Valorable nivel avanzado de Ilustrator · Se valorará experiencia en sector textil · Disponibilidad para trabajar en turnos rotatorios (07h a 15h y de 14h a 22h) · Proactividad, iniciativa y capacidad de adaptabilidad. Habilidades: React alto, mongodb bajo, node medio, typescript alto, javascript alto"
    },
    {
        role: ChatCompletionRequestMessageRoleEnum.Assistant,
        content:`{"score":2,"message":"Tus conocimientos no tienen nada que ver relacionados con la oferta de trabajo."}`
    },
    {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: "Oferta: 2 años de experiencia minimos. Desarrollador FrontEnd. Stack MERN (MongoDB, ExpressJS, React, Node). Habilidades: React alto, mongodb bajo, node medio, typescript alto, javascript alto"
    },
    {
        role: ChatCompletionRequestMessageRoleEnum.Assistant,
        content:`{"score":8,"message":"No cumples completamente con los requerimientos pero podrias adapterte facilmente."}`
    }
]