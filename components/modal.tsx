import React, { useCallback } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
type Props = {
    isOpen?:boolean,
    onClose:()=>void,
    content:React.ReactElement
}

const Modal = ({content,isOpen,onClose}: Props) => { 
    if(!isOpen){
        return null
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-neutral-800 bg-opacity-70'>
            <div className='bg-white rounded-md md:w-[600px] relative w-10/12 h-4/5 overflow-scroll'>
                <div onClick={onClose} className='absolute top-1 right-1 cursor-pointer'>
                    <AiOutlineClose size={30} className='hover:text-red-500' />
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal