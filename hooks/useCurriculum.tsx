import { useContext, useEffect } from "react";
import { curriculumContext } from "../context/curriculumContext";

export default function useCurriculum(token:string){
    const {getCurriculum,curriculum,getSkills,getExperience} = useContext(curriculumContext)

    useEffect(()=>{
        if(getCurriculum) getCurriculum(token)
    },[token,getCurriculum])

    useEffect(()=>{
        if(curriculum && getSkills) getSkills(curriculum,token)
        if(curriculum && getExperience) getExperience(curriculum,token)
    },[curriculum,getSkills,getExperience,token])

    return {curriculum}
}