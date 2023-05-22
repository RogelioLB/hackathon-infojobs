"use client"
import { createContext, MouseEvent, MouseEventHandler, ReactNode, useState } from "react";

const DEFAULT_VALUE : { show: boolean; showModal: (text:string) => void; closeModal: () => void,textModal:string} = {
    show:false,
    showModal: () => {},
    closeModal: () => {},
    textModal: ""
} 

export const modalContext = createContext(DEFAULT_VALUE)

export default function ModalContext({children}:{children:ReactNode}){
    const [showModal,setShowModal] = useState(false)
    const [text,setText] = useState("")

    const handleShowModal = (text:string) =>{
        setText(text)
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }

    return (
        <modalContext.Provider value={{show:showModal,showModal:handleShowModal,closeModal:handleCloseModal,textModal:text}}>
            {children}
        </modalContext.Provider>
    )
}