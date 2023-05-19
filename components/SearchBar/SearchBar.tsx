import styles from "./SearchBar.module.css"
import {FaSearch} from "react-icons/fa"

export default function SearchBar(){
    return (
        <form className={styles.search_bar}>
            <input type="text"></input>
            <button type="submit"><FaSearch /></button>
        </form>
    )
}