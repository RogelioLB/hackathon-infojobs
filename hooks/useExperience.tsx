import { useContext } from "react";
import { curriculumContext } from "../context/curriculumContext";

export default function useExperience(){
    const {expertise} = useContext(curriculumContext)

    return expertise
}