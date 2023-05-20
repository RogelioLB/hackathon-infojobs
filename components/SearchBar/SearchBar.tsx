import styles from "./SearchBar.module.css"
import {FaSearch} from "react-icons/fa"
import { ChangeEvent, FormEvent, useState } from "react"
import useOffers from "../../hooks/useOffers"

export default function SearchBar(){
    const [searchValue,setSearchValue] = useState<string>("")
    const {getOffers} = useOffers()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await getOffers(searchValue)
    }

    return (
        <form className={styles.search_bar} onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setSearchValue(e.target.value)}></input>
            <button type="submit"><FaSearch /></button>
        </form>
    )
}