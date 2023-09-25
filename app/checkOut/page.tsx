"use client"
import useCartStore from '@/hooks/useCartStore'
import useCartSum from '@/hooks/useCartSum'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

type Props = {}

const CheckOut = (props: Props) => {
  const [textToCopy, setTextToCopy] = useState('THB57HfUhaPCYvrguNCEXWaiDZAfkzVcvr');
  const [countdown, setCountdown] = useState(900);

  const copyToClipboard = () => {
    // 创建一个虚拟的textarea元素
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // 将textarea元素添加到DOM中
    document.body.appendChild(textarea);

    // 选择textarea中的文本并复制
    textarea.select();
    document.execCommand('copy');

    // 删除虚拟textarea元素
    document.body.removeChild(textarea);
    toast.success("复制成功")
  };
  
  const {sum} = useCartSum()
  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        // 倒计时结束后关闭页面
        window.close();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  const formatTime = (seconds:number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <div className='h-screen justify-center items-center flex flex-col'>
        <div className='md:w-[700px] shadow-lg py-4 px-2 w-11/12 gap-4 flex flex-col justify-center items-center '>
            <div className=' text-3xl font-bold'>
                请支付 <span className='text-red-500'>{(sum/7.3).toFixed(2)} </span> USDT
            </div>
            <Image  src={'/qr.png'} height={200} width={200} alt='qr'/>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-2'>
              <span>钱包地址: </span>
              <span className='text-green-500'>{textToCopy}</span>
              <button
                className='ml-3 bg-sky-400 px-2 py-1 rounded-md text-neutral-700 cursor-pointer'
                onClick={copyToClipboard}
              >
                复制
              </button>
            </div>
            <div className=' flex justify-center flex-col items-center gap-3'>
              <p className='text-lg text-sky-600'>
                先复制钱包地址，扫码后也可以复制
              </p>
              <p className='text-lg'>
              数额填写: <span className=' bg-rose-500 text-white p-2 rounded-md'>{(sum/7.3).toFixed(2)} </span> ，否则需要重新提交订单
              </p>
              <p className='text-lg text-red-600'>
                付款成功，等待20秒~2分钟到账。可以通过你的邮箱或者订单号来获取卡号。
              </p>
            </div>
        </div>

        <div className='md:w-[700px] p-2 w-[300px] justify-center items-center text-2xl flex '>
          请在 <span className=' bg-green-300 px-2 py-1 rounded-md'>{formatTime(countdown)}</span> 内完成支付!
        </div>
    </div>
  )
}

export default CheckOut