import { useContext } from "react";
import { modalContext } from "../context/modalContext";

export default function useModal(){
    const {closeModal,show,showModal,textModal} = useContext(modalContext)

    return {closeModal,show,showModal,textModal}
}