import styles from "./SearchBar.module.css"
import {FaSearch} from "react-icons/fa"
import { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useState } from "react"
import useOffers from "../../hooks/useOffers"
import InputTag from "./InputTag"
import { TagInfo } from "../../types"

export default function SearchBar(){
    const {getOffers,setQuery,setOffers} = useOffers()
    const [tags,setTags] = useState<TagInfo[]>([])
    const teleworking : TagInfo[] = [{id:'trabajo-solo-presencial',text:'Presencial'},{id:'solo-teletrabajo',text:'Solo teletrabajo'},{id:'teletrabajo-posible',text:"Hibrido"}]

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setOffers([])
        const teleworkingTags = tags.map(t=>`&teleworking=${t.id}`).join('')
        await getOffers(1,teleworkingTags)
    }

    const handleSelect = (text:string) => {
        const { id } = teleworking.find(tl=>tl.text===text) as TagInfo
        setTags(t=>[...t, { id, text:text } ])
    }

    const handleDelete = (id:string) => {
        setTags(t=>[...t.filter(tag=>tag.id!==id)])
    }

    return (
        <>
            <form className={styles.search_bar} onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setQuery(e.target.value)}></input>
                <button type="submit"><FaSearch /></button>
            </form>
            <InputTag selected={tags} onDelete={handleDelete} onSelect={handleSelect} suggestions={teleworking}/>
        </>
    )
}