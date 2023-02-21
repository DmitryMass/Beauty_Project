import React, { FC } from 'react';

interface IGoldTitleBoxProps {
  children: React.ReactNode;
  modificator?: string;
}

import './goldTitleBox.scss';

const GoldTitleBox: FC<IGoldTitleBoxProps> = ({ children, modificator }) => {
  return (
    <div
      className={` linearBg  p-[15px] max-[576px]:p-[10px] w-[55%] text-right fixed top-[30px] left-0 ${modificator}`}
    >
      <h1 className='text-coal font-bold text-h2 leading-md max-[576px]:text-md'>
        {children}
      </h1>
    </div>
  );
};

export default GoldTitleBox;
