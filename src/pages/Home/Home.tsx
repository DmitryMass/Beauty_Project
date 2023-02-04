import Navigation from '@/components/home/Navigation';
import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import imgOnHome from '@/assets/images/girlOnHome.png';
import instIcon from '@/assets/icons/instIcon.svg';
import fbIcon from '@/assets/icons/fbIcon.svg';
import tgIcon from '@/assets/icons/tgIcon.svg';
import LinkButton from '@/components/LinkButton/LinkButton';
import BlockInfo from '@/components/home/BlockInfo';

import './home.scss';
import { home } from '@/styles/home';

const Home: FC = () => {
  const iconsArr: Array<string> = [instIcon, fbIcon, tgIcon];
  return (
    <div className={home.container}>
      <div className={home.navWrapper}>
        <Logo imgModificator='w-[80px] h-[90px]' />
        <Navigation />
      </div>
      <section className={home.contentWrapper}>
        <div className={home.textContainter}>
          <h1 className={home.title}>
            Ищете мастера, понимающего желания клиента и ответственно
            подходящего к работе?{' '}
          </h1>
          <p className={home.subtitle}>
            Приглашаем вас посетить наш салон красоты{' '}
            <span className={home.subtitleSpan}>Style</span> .{' '}
          </p>
          <LinkButton
            modificator='max-w-[160px] w-full py-[10px]  mb-[100px] font-semibold hover:bg-hoverGold hover:scale-[1.03] transition-all duration-200'
            children='Записаться'
          />
          <BlockInfo />
        </div>
        <div className={home.imagesWrapper}>
          <div className={home.elipseBlur} />
          <img className={home.imgGirl} src={imgOnHome} alt='img-girl' />
        </div>
        <div className={home.messengersWrapper}>
          <div className={home.messengersLine} />
          <div>
            {iconsArr.map((icon) => (
              <a
                href='#'
                target={'_blank'}
                className='block w-[30px] h-[30px] my-[8px]'
                key={Math.random()}
              >
                <img src={icon} alt='icon' />
              </a>
            ))}
          </div>
          <div className={home.messengersLine} />
        </div>
      </section>
    </div>
  );
};

export default Home;
