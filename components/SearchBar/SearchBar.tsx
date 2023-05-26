import styles from "./SearchBar.module.css"
import {FaSearch} from "react-icons/fa"
import { ChangeEvent, FormEvent, useState } from "react"
import useOffers from "../../hooks/useOffers"

export default function SearchBar(){
    const {getOffers,setQuery,setOffers} = useOffers()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setOffers([])
        await getOffers(1)
    }

    return (
        <form className={styles.search_bar} onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setQuery(e.target.value)}></input>
            <button type="submit"><FaSearch /></button>
        </form>
    )
}