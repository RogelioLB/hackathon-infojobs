"use client"
import { createContext, ReactNode, useState } from "react";
import { ModalContextValues } from "../types";

const DEFAULT_VALUE : ModalContextValues = {
    show:false,
    showModal: () => {},
    closeModal: () => {},
    textModal: ""
} 

export const modalContext = createContext(DEFAULT_VALUE)

export default function ModalContext({ children }:{ children:ReactNode }){
    const [showModal,setShowModal] = useState(DEFAULT_VALUE.show)
    const [text,setText] = useState(DEFAULT_VALUE.textModal)

    const handleShowModal = (text:string) =>{
        setText(text)
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }

    return (
        <modalContext.Provider value={{ show:showModal, showModal:handleShowModal, closeModal:handleCloseModal, textModal:text }}>
            {children}
        </modalContext.Provider>
    )
}