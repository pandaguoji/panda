"use client"
import { Card } from '@/data/cards'
import useCartModal from '@/hooks/useCartModal'
import useCartStore from '@/hooks/useCartStore'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {
    cards:Card[],
}


const Card = ({cards}: Props) => {
    const cartStore = useCartStore()
    const cartModal = useCartModal()

   
    const handleClick = (id: number) => {
        cartModal.onOpen()
        const selectedCard = cards.find((card) => card.id === id);
        if (selectedCard) {
            cartStore.setSelectedCard(selectedCard)
        }
      };
  return (
    <div className='w-full flex flex-col justify-between gap-3'>
      <div className='flex w-full justify-between'>
        <p className='w-[100px] md:w-[250px]'>
          商品名称
        </p>
        <p className='w-[50px]'>
          价格
        </p>
        <p className='w-[100px] text-center'>
          收益
        </p>
        <p className='w-[50px]'>
          库存
        </p>
        <p className='w-[50px] text-center'>
          购买
        </p>
      </div>
      {
        cards.map((item)=>(
          <div key={item.id} className='flex w-full justify-between border-b-[1px] pb-2'>
            <p className='w-[100px] md:w-[250px]'>
              {item.name}
            </p>
            <p className='w-[50px] text-purple-500'>
              ¥{item.price}
            </p>
            <p className='w-[100px] text-center text-green-600'>
              ¥{item.profit}
            </p>
            <p className='w-[50px]'>
              {item.stock}
            </p>
            <div onClick={() => handleClick(item.id)} className='w-[50px] flex justify-center cursor-pointer'>
                <AiOutlineShoppingCart/>
            </div>
          
          </div>
          )
        )
      }
    </div>
  )
}


export default Card