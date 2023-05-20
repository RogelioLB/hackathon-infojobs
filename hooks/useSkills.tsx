import { useContext } from "react";
import { curriculumContext } from "../context/curriculumContext";

export default function useSkills(){
    const {skills} = useContext(curriculumContext)

    return skills
}