import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-16 shadow-sm w-full bg-white flex justify-around items-centerm mt-10 border-t'>
        <Image src={'/panda.png'} height={100} width={100} alt='logo'/>
        <div className=' flex items-center text-lg'>
            潘达金融国际© 2023 新加坡
        </div>
        
    </div>
  )
}

export default Footer