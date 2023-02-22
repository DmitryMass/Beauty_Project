import React, { FC } from 'react';

import './goldTitleBox.scss';
import BackBtn from '../BackBtn/BackBtn';

interface IGoldTitleBoxProps {
  children: React.ReactNode;
  modificator?: string;
}

const GoldTitleBox: FC<IGoldTitleBoxProps> = ({ children, modificator }) => {
  return (
    <div
      className={` linearBg flex justify-between items-center max-[992px]:justify-end  p-[15px] max-[576px]:p-[10px] w-[55%] text-right fixed top-[30px] left-0 ${modificator}`}
    >
      <BackBtn modificator='ml-[20px] w-[40px] h-[40px] max-[992px]:hidden' />
      <h1 className='text-coal font-bold text-h2 leading-md max-[576px]:text-md'>
        {children}
      </h1>
    </div>
  );
};

export default GoldTitleBox;
