import { useContext } from "react";
import { tagsContext } from "../context/tagsContext";

export default function useTags(){
    const { tags, handleDelete, handleSelect, teleworking } = useContext(tagsContext)

    return { tags, teleworking, handleDelete: handleDelete as (id:string)=>void, handleSelect: handleSelect as (text:string)=>void}
}