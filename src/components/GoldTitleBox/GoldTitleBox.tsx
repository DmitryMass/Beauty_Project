import React, { FC } from 'react';

interface IGoldTitleBoxProps {
  children: React.ReactNode;
}

import './goldTitleBox.scss';

const GoldTitleBox: FC<IGoldTitleBoxProps> = ({ children }) => {
  return (
    <div
      className={`linearBg  p-[15px] w-[58%] text-right fixed top-[30px] left-0`}
    >
      <h1 className='text-coal font-bold text-h2 leading-md'>{children}</h1>
    </div>
  );
};

export default GoldTitleBox;
