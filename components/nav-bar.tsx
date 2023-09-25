import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-16 shadow-sm w-full bg-white flex justify-center items-center'>
        <div className='md:w-3/5 flex gap-7 items-center justify-between w-11/12'>
            <Link href={'/'} className=' text-rose-400 flex items-center gap-3' >
                <Image src={'/panda.png'} height={20} width={30} alt='logo'/>
                <span>
                    潘达卡券24h自动发卡网
                </span>
            </Link>
            <Link href={'/order'} className=' flex items-center gap-1 text-neutral-500' >
                <AiOutlineSearch size={25}/>
                <span>
                    查询订单
                </span>
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar