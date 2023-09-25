import {create} from 'zustand'
import React from 'react'

type Props = {
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
    
}

const useStarterModal = create<Props>(
    (set) => ({
                 isOpen:true,
                 onOpen:()=>set({isOpen:true}),
                 onClose:()=>set({isOpen:false})}
    ))

export default useStarterModal