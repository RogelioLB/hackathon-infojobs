
"use client"
import { createContext, ReactNode, useCallback, useState } from "react";
import { Curriculum, CurriculumContextValues, CurriculumSkills } from "../types";

const defaultCurriculum = {
    id:"",
    code:"",
    completed:false,
    incompleteSteps:[],
    name:"",
    principal:false
}

const defaultValue : CurriculumContextValues = {
    curriculum:defaultCurriculum,
}

export const curriculumContext = createContext<CurriculumContextValues>(defaultValue)

const CurriculumContext = ({children}:{children:ReactNode}) =>{
    const [curriculum,setCurriculum] = useState(defaultCurriculum)
    const [skills,setSkills] = useState<CurriculumSkills>()

    const getCurriculum = useCallback(async (token:string) =>{
        const res = await fetch(`https://hackathon-infojobs.vercel.app/api/curriculum`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        setCurriculum(data[0])
    },[])

    const getSkills = useCallback(async (curriculum:Curriculum,token:string) =>{
        const res = await fetch(`http://hackathon-infojobs.vercel.app/api/curriculum/${curriculum.code}`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data : CurriculumSkills = await res.json()
        setSkills(data)
    },[])

    return(
        <curriculumContext.Provider value={{curriculum,getCurriculum,skills,getSkills}}>
            {children}
        </curriculumContext.Provider>
    )
}

export default CurriculumContext
















