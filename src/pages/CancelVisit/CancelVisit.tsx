import { FC } from 'react';
import { useParams } from 'react-router-dom';
//
import CancelVisitToMaster from '@/components/masters/cancelVisitToMaster/CancelVisitToMaster';
//
import './cancelVisit.scss';
import BackBtn from '@/components/BackBtn/BackBtn';
import Logo from '@/components/Logo/Logo';
import BurgerMenu from '@/components/home/BurgerMenu';

const CancelVisit: FC = () => {
  const { id } = useParams();
  return (
    <div className='relative max-w-[1320px] mx-auto w-full px-[25px] max-[992px]:px-[15px]'>
      <div className='cancelVisitBgc' />
      <div className='cancelVisitGradient' />
      <BackBtn modificator='w-[35px] h-[35px] absolute top-[40px] left-[15px] z-[50] max-[992px]:hidden' />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator='w-[85px] ml-auto  max-[992px]:hidden relative z-[20]'
      />
      <BurgerMenu modificator='w-[85px] h-[85px] max-[576px]:h-[50px] ml-auto justify-end relative z-[20]' />
      <CancelVisitToMaster id={id!} />
    </div>
  );
};

export default CancelVisit;
