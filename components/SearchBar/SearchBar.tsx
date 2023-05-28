import styles from "./SearchBar.module.css"
import {FaSearch} from "react-icons/fa"
import { FormEvent } from "react"
import useOffers from "../../hooks/useOffers"
import InputTag from "./InputTag"
import useTags from "../../hooks/useTags"

export default function SearchBar(){
    const { getOffers, setQuery, setOffers } = useOffers()
    const { handleDelete, handleSelect, tags, teleworking } = useTags()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setOffers([])
        const teleworkingTags = tags.map(t=>`&teleworking=${t.id}`).join('')
        await getOffers(1,teleworkingTags)
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