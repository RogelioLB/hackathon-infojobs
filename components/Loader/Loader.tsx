import styles from "./Loader.module.css"

export default function Loader(){
    return(
        <div className="container">
            <span className={styles.loader}></span>
        </div>
    )
}