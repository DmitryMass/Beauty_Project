import Navigation from '@/components/home/Navigation';
import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import imgOnHome from '@/assets/images/girlOnHome.png';
import line from '@/assets/images/line.png';
import instIcon from '@/assets/icons/instIcon.svg';
import fbIcon from '@/assets/icons/fbIcon.svg';
import tgIcon from '@/assets/icons/tgIcon.svg';


import './home.scss';
import LinkButton from '@/components/LinkButton/LinkButton';
import BlockInfo from '@/components/home/BlockInfo';

const Home: FC = () => {
  const iconsArr: Array<string> = [line, instIcon, fbIcon, tgIcon, line];
  return (
    <div className='max-w-[1440px] mx-auto'>
      <section>
        <div className='flex justify-between'>
          <div>
            <Logo />
          </div>
          <Navigation />
        </div>
      </section>
      <section>
        <div className='flex justify-between'>
          <div>
            <p className='font-normal	text-[24px] leading-[44px] text-white w-[500px] mt-[268px]'>Ищете мастера, понимающего желания клиента и ответственно подходящего к работе? </p>
            <p className='font-medium text-[17px] leading-[29px] text-white mt-[35px]'>Приглашаем вас посетить наш салон красоты <span className="font-monteCarlo">Style</span>. </p>
            <LinkButton modificator='w-[160px] py-[10px] mt-[74px] font-semibold'
              children='Записаться' />
            <BlockInfo />
          </div>
          <img className='max-w-[600px] w-full' src={imgOnHome} alt="img-girl" />
          <div className='header__block-icons'>
            {iconsArr.map((icon) => (
              <img src={icon} alt="icon" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
