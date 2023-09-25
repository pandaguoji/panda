"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import useCartModal from '@/hooks/useCartModal'
import Modal from '../modal'
import useCartStore from '@/hooks/useCartStore'
import {BsFillCartCheckFill} from 'react-icons/bs'
import useCartSum from '@/hooks/useCartSum'
import { useRouter } from 'next/navigation'


type Props = {}

const CartModal = (props: Props) => {
    const route = useRouter()
    const cartModal = useCartModal()  
    const {selectedCard} = useCartStore()
    const {updateSum} = useCartSum()
    const [quantity,setQuantity] = useState<number>(0)
    const handleSubmit = (e:any)=>{
        e.preventDefault(); 
        updateSum(quantity,Number(selectedCard?.price))
        route.push('/checkOut')
    }

    const bodyContent = (
        <div className=' '>
            <div className='p-2 flex flex-col gap-4 justify-center items-center'>
                <p className='text-xl font-bold border-b w-full text-center border-dashed border-neutral-300'>
                    {selectedCard?.name}
                </p>
                <Image src={selectedCard?.img as string} alt='card' height={50} width={300}/>
                <div className='p-2 text-md flex flex-col gap-1'>
                
                    <div>
                    商品详情：1张*<span className=' text-green-600' > {selectedCard?.name}</span>。预计可赚<span className=' text-red-600' > {selectedCard?.profit}</span>元
                    </div>
                    <p>
                    自动发卡：购买填写邮箱和订单查询密码，购买成功后首页订单查询，请自行查收
                    </p>
                    <p>
                    支付方式：数字货币 USDT 支付，链名称选择:TRC20
                    </p>
                    <p>
                    高盛卡券独家渠道出卡，100%可用,质保时效一星期
                    </p>
                
                    <form   onSubmit={(e) => handleSubmit(e)}
                            className='flex flex-col gap-4 mt-4'>
                        <p>
                        卡密格式：十六位数字英文
                        </p>
                        <div>
                        商品单价：<span className='text-red-500'>{selectedCard?.price}</span>
                        </div>
                        <div>
                            发货方式：<span className='bg-green-500 px-2 py-1 rounded-md text-white'>自动发货</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span>
                                联系方式:
                            </span>
                            <input required type="email" placeholder='请输入你的邮箱'  className=" w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 "/>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span>
                                设置密码:
                            </span>
                            <input required type="password" placeholder='设置密码'   className="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 "/>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span>
                                推荐代码:
                            </span>
                            <input type="text" placeholder='没有推荐人,可以不填写'   className="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 "/>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span>
                                购买数量:
                            </span>
                            <input  onChange={(e) => setQuantity(Number(e.target.value))}
                                    required type="number"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 "/>
                        </div>

                        <div>
                        订单金额：<span className='text-red-500'>{selectedCard?.price}</span>
                        </div>

                        <div>
                            <div className='flex gap-2 items-center text-lg w-full border-b-[1px] border-neutral-500 border-dashed'>
                                <BsFillCartCheckFill/>
                                <span>
                                    付款方式
                                </span>
                            </div>
                            <button 
                                    type='submit'
                                    className='flex gap-2 items-center h-8 bg-sky-300 px-2 rounded-md mt-2 text-black'>
                                <Image src={'/usdt.png'} alt='usdt' width={20} height={20}/>
                                USDT付款
                            </button>
                        </div>
                    </form>
             </div>
            </div>
        </div>
    )

    
  

    return (
        <Modal content={bodyContent}
                isOpen = {cartModal.isOpen}
                onClose={cartModal.onClose} 
        />
    )
}

export default CartModal