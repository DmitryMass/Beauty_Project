import { FC } from 'react';
import phoneIcon from '@/assets/icons/phoneIcon.svg';
import geopositionIcon from '@/assets/icons/geopositionIcon.svg';

const BlockInfo: FC = () => {
  return (
    <div className='max-w-[500px] w-full flex justify-start items-center gap-[25px] max-[992px]:flex-col max-[992px]:items-start max-[768px]:items-center max-[768px]:max-w-none'>
      <div className='flex justify-start items-center gap-[10px]'>
        <img src={phoneIcon} alt='icon' />
        <p className='font-medium text-[13px] leading-[22px] text-gold'>
          +380 12 345 67 89
        </p>
      </div>
      <div className='flex justify-start items-center gap-[10px]'>
        <img src={geopositionIcon} alt='icon' />
        <p className='font-medium text-[13px] leading-[22px] text-gold'>
          м. Дніпро, пр. Гагаріна, 198
        </p>
      </div>
    </div>
  );
};

export default BlockInfo;
