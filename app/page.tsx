import Board from '@/components/board'
import Navbar from '@/components/nav-bar'
import Link from 'next/link'
import {AiOutlineNotification,AiOutlineShoppingCart} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import Card from '@/components/card'
import { jdCards,shiHuaCards,huarunCards,walmartCards } from '@/data/cards'
import {FcInvite} from 'react-icons/fc'
import CartModal from '@/components/modals/cartModal'
import StarterModal from '@/components/modals/starterModal'


const Content = (
  <div className='w-full flex flex-col gap-3 text-sm'>
    <CartModal />
    <div>
      <div className='flex'>
        <span>
          提示交易所使用教程：强烈推荐
        </span>
        <Link href={'https://www.huobi.com'}
              target='_blank'
              className=' text-blue-700' >
          【火必交易所】
        </Link>
        <span>
          T0即买即用,世界前三交易所👈
        </span>
      </div>
    </div>

    <div className='flex'>
      火必官网： <Link href={'https://www.huobi.com'}
                    target='_blank'
                    className=' text-blue-700' >
                      http://www.huobi.com
                </Link>
    </div>

    <div>
      购买充值卡 「 选择充值卡 → 提币至购卡时所需地址 → 系统自动发卡密 」
    </div>

    <div>
      帮助 - 项目介绍及教程
    </div>

    <Link href={'https://t.me/+RZnz-nSM9VliZmY0'} className=' text-red-400 underline  flex gap-2 items-center'>
      <BsTelegram size={25}/>
      <span>潘达卡券官方Telegram频道</span>
      
    </Link>
     
    <Link href={'/'} className=' text-green-400 underline flex gap-2 items-center'>
      <FcInvite size={25}/>
      <span>邀请好友加入, 立即得50元京东卡！</span>
      
    </Link>


    <Link href={'https://t.me/panda_guoji'} className=' text-red-400 underline flex gap-2 items-center'>
      <BsTelegram size={25}/>
      <span>客服 - 客户服务问题</span>
      
    </Link>

    <div>
      联系高盛卡券Telegram客服
    </div>
    <div className=' text-3xl text-red-600 font-bold'>
      !!!请妥善保管好卡密，不要将卡密泄露给他人以免造成财产损失
    </div>
  </div>
)



export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <StarterModal/>
      <Board titleIcon={AiOutlineNotification}
             title='公告'
             content={Content}

      />
      <Board  titleImage='/jd.jpeg'
              title='京东E卡系列'
              content={<Card cards={jdCards}/>}
      />
   
      <Board  titleImage='/shihua.png'
              title='中石化加油卡'
              content={<Card cards={shiHuaCards}/>}
      />

      <Board  titleImage='/walmart.png'
              title='沃尔玛卡'
              content={<Card cards={walmartCards}/>}
      />

      <Board  titleImage='/huarun.png'
              title='华润万家卡'
              content={<Card cards={huarunCards}/>}
      />
    </main>
  )
}
