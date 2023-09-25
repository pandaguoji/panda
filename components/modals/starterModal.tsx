"use client"

import React from 'react'
import Modal from '../modal'
import useStarterModal from '@/hooks/useStarterModal'
import Image from 'next/image'

type Props = {}


const StarterModal = (props: Props) => {
    const starterModal = useStarterModal()

    const startContnet = (
        <div className='flex justify-center flex-col'>
           <p className='  text-2xl border p-4 text-red-600'>
           某些卡券友商真别来我这里找画面,就你们那平台的那点出单量和我在这装你妈呢？
            老子一天走的流水比你们一个月都多,臭傻逼！
           </p>

           <p className='mt-4 text-center text-green-500'>
                高价回收各种品牌充值卡,单量大的优先。
           </p>

           <p className='mt-4 text-center text-purple-500'>
                高价回收信用卡,单量大的优先。
           </p>

           <p className='mt-4 text-center text-rose-500'>
               招国内国际代理, 有资源的来!
           </p>

           <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src='/panda.png' width={140} height={140} alt='logo'/>
            <p className='text-4xl font-bold'>潘达券商,荣耀出品</p>
           </div>

          

        </div>
    )
    
    return (
        <Modal content={startContnet}
                isOpen = {starterModal.isOpen}
                onClose={starterModal.onClose} 
        />
    )
}

export default StarterModal