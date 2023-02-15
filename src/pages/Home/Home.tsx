import { FC } from 'react';
import Navigation from '@/components/home/Navigation';
import Logo from '@/components/Logo/Logo';
import LinkButton from '@/components/LinkButton/LinkButton';
import BlockInfo from '@/components/home/BlockInfo';
//
import imgOnHome from '@/assets/images/girlHomeBgc.png';

//
import { home } from '@/styles/home';
import './home.scss';
import MessengersList from '@/components/MessengersList/MessengersList';
import { ROUTE } from '@/utils/route/route';
import BurgerMenu from '@/components/home/BurgerMenu';

const Home: FC = () => {
  return (
    <div className='bg-coal'>
      <div className={home.container}>
        <div className={home.navWrapper}>
          <Logo imgModificator='w-[80px] h-[74px]' />
          <Navigation />
          <BurgerMenu />
        </div>
        <section className={home.contentWrapper}>
          <div className={home.textContainter}>
            <h1 className={home.title}>
              Шукаєте майстра, який розуміє бажання клієнта та відповідально
              підходить до роботи?{' '}
            </h1>
            <p className={home.subtitle}>
              Запрошуємо вас до нашої студії{' '}
              <span className={home.subtitleSpan}>Style</span>
            </p>
            <LinkButton
              modificator='max-w-[160px] w-full py-[10px]  mb-[100px] max-[1140px]:mb-[80px] font-semibold hover:bg-hoverGold hover:scale-[1.03] transition-all duration-200 max-[992px]:mb-[40px] max-[768px]:mx-auto'
              children='Записатись'
              route={ROUTE.MASTERS}
            />
            <BlockInfo />
          </div>
          <div className={home.imagesWrapper}>
            <div className={home.elipseBlur} />
            <img className={home.imgGirl} src={imgOnHome} alt='img-girl' />
          </div>
          <div className={home.messengersWrapper}>
            <div className={home.messengersLine} />
            <MessengersList modificator='flex flex-col' />
            <div className={home.messengersLine} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
