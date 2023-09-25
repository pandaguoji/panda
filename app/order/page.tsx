"use client"
import React from 'react'
import { toast } from 'react-hot-toast'

type Props = {}

const Order = (props: Props) => {
  return (
    <div className='h-screen flex justify-center'>
        <div className='md:w-[700px] w-10/12 flex items-center gap-2 shadow-md border border-gray-300 rounded-lg h-20 p-2 mt-2'>
          <input type='text' placeholder='输入你的卡密' className=' border-b basis-5/6 border-black  focus:outline-none'/>
          <button onClick={()=>{toast.error("能别瞎测试不?拿老子服务器验卡的友商死全家")}}
                  className=' bg-green-500 px-2 py-1 rounded-md basis-1/6 text-white'>搜索</button>
        </div>
    </div>
  )
}

export default Order