import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  titleIcon?: IconType;
  titleImage?: string;
  title: string;
  subtitle?: string;
  content: React.ReactElement;
};

const Board = ({ titleIcon, titleImage, title, subtitle, content }: Props) => {
  const renderTitleIcon = () => {
    if (titleIcon) {
      const Icon = titleIcon;
      return <Icon />;
    }
    return null;
  };

  return (
    <div className='md:w-4/5 w-11/12 shadow-md text-neutral-600 mt-5 p-4 rounded-lg'>
      <div className='flex gap-2 items-center h-10 font-bold border-b-[1px] border-dashed w-full'>
        {renderTitleIcon()}
        {titleImage && <Image height={40} width={40} alt='jd' src={titleImage} />}
        <p>{title}</p>
      </div>
      <div>{subtitle}</div>
      <div className='w-full'>{content}</div>
    </div>
  );
};

export default Board;
