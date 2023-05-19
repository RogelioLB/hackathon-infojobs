
"use client"
import { createContext, ReactNode, useState } from "react";
import { Curriculum } from "../types";

const defaultValue : Curriculum = {
    id:"",
    code:"",
    completed:false,
    incompleteSteps:[],
    name:"",
    principal:false
}

export const curriculumContext = createContext<Curriculum>(defaultValue)

const CurriculumContext = ({children}:{children:ReactNode}) =>{
    const [curriculum,setCurriculum] = useState(defaultValue)

    return(
        <curriculumContext.Provider value={curriculum}>
            {children}
        </curriculumContext.Provider>
    )
}

export default CurriculumContext