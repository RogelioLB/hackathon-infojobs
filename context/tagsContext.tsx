'use client'
import { createContext, ReactNode, useCallback, useState } from "react"
import { TagInfo, TagsContextValues } from "../types"

const DEFAULT_VALUES : TagsContextValues = {
    tags: [],
    teleworking:  [{id:'trabajo-solo-presencial',text:'Presencial'},{id:'solo-teletrabajo',text:'Solo teletrabajo'},{id:'teletrabajo-posible',text:"Hibrido"}]
}

export const tagsContext = createContext<TagsContextValues>(DEFAULT_VALUES)

export default function TagsContext({ children } : { children: ReactNode}){
    const [tags,setTags] = useState(DEFAULT_VALUES.tags)

    const handleSelect = useCallback((text:string) => {
        const { id } = DEFAULT_VALUES.teleworking.find(tl=>tl.text===text) as TagInfo
        setTags(t=>[...t, { id, text:text } ])
    },[])

    const handleDelete = useCallback((id:string) => {
        setTags(t=>[...t.filter(tag=>tag.id!==id)])
    },[])

    return (
        <tagsContext.Provider value={{ tags, handleDelete, handleSelect, teleworking:DEFAULT_VALUES.teleworking }}>
            {children}
        </tagsContext.Provider>
    )

}