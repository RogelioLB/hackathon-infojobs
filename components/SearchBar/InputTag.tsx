"use client"
import { useEffect, useState } from "react"
import { TagInfo } from "../../types"
import Tag from "../Skill/Tag"
import styles from "./SearchBar.module.css"

export default function InputTag({ selected, onSelect, suggestions, onDelete } : { selected: TagInfo[], onSelect:(text:string) => void, suggestions: TagInfo[], onDelete: (id:string)=>void }){
    const [unselected,setUnselected] = useState<TagInfo[]>([])
    
    useEffect(()=>{
        const uns = suggestions.map((sgg)=>{
            if(selected.length<=0) return sgg
            if(selected.filter(sl=>sl.id===sgg.id).length<=0) return sgg
            return undefined
        }).filter(uns=>uns!==undefined) as TagInfo[]
        setUnselected(uns)
    },[suggestions,selected])

    return(
        <div className={styles.input_tag}>
            <label htmlFor="tags">Metodo de trabajo: </label>
            <div className={styles.tags}>
                {selected && selected.map(sl=><Tag color="#1E3A8A" onClick={()=>onDelete(sl.id)} text={sl.text} key={sl.id} />)}
            </div>
            <input placeholder="(Presencial, Hibrido, etc)" name="tags" list="teleworking" onKeyDownCapture={(e)=>{
                if(e.key==="Enter" && unselected.findIndex(uns=>uns.text===e.currentTarget.value) >= 0){
                    onSelect(e.currentTarget.value)
                    e.currentTarget.value = ''
                } 
            }} />
            <datalist id="teleworking">
                {unselected.map((sgg)=><option key={sgg?.id} id={sgg?.id} value={sgg?.text}></option>)}
            </datalist>
        </div>
    )
}