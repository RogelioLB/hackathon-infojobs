import useModal from "../../hooks/useModal"
import styles from "./Modal.module.css"

export default function Modal(){
    const {show,closeModal,textModal} = useModal()
    return(
        <div className={`${styles.modal} ${show ? styles.modal_show : ""}`}>
            <span>{textModal}</span>
            <button onClick={closeModal}>Aceptar</button>
        </div>
    )
}