"use client"
import { createContext, ReactNode, useCallback, useState } from "react";
import { Curriculum, CurriculumContextValues, CurriculumSkills, ExperienceResponse } from "../types";

const defaultCurriculum = {
    id:"",
    code:"",
    completed:false,
    incompleteSteps:[],
    name:"",
    principal:false
}

const DEFAULT_VALUE : CurriculumContextValues = {
    curriculum:defaultCurriculum,
    expertise:""
}

export const curriculumContext = createContext<CurriculumContextValues>(DEFAULT_VALUE)

const CurriculumContext = ({children}:{children:ReactNode}) =>{
    const [curriculum,setCurriculum] = useState(defaultCurriculum)
    const [skills,setSkills] = useState<CurriculumSkills>()
    const [expertise,setExpertise] = useState<string>("")

    const getCurriculum = useCallback(async (token:string) =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/curriculum`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()
        setCurriculum(data[0])
    },[])

    const getSkills = useCallback(async (curriculum:Curriculum,token:string) =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/curriculum/${curriculum.code}`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data : CurriculumSkills = await res.json()
        setSkills(data)
    },[])

    const getExperience = useCallback(async (curriculum:Curriculum,token:string) =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/curriculum/${curriculum.code}/experience`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data : ExperienceResponse= await res.json()
        if(!data.experience) return
        const exp = data.experience.map((exp)=>{
            const yearsWorked = new Date().getFullYear() - new Date(exp.startingDate).getFullYear() 
            return `Trabaje en ${exp.company} como ${exp.job} usando ${exp.expertise.map(sk=>`${sk.skill}`).join(",")} durante ${yearsWorked} años.`
        }).join(".")
        setExpertise(exp)
    },[])

    return(
        <curriculumContext.Provider value={{curriculum,getCurriculum,skills,getSkills,getExperience,expertise}}>
            {children}
        </curriculumContext.Provider>
    )
}

export default CurriculumContext
















