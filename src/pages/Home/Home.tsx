import Navigation from '@/components/home/Navigation';
import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import imgOnHome from '../../assets/images/girlOnHome.png';
import icon1 from '../../assets/icons/oneicon.svg';
import icon2 from '../../assets/icons/secondicon.svg';
import line from '../../assets/images/line.png';
import inst from '../../assets/icons/inst.svg';
import fb from '../../assets/icons/fb.svg';
import tg from '../../assets/icons/tg.svg';
import round from '../../assets/images/rounds.png';

import './home.scss';

const Home: FC = () => {
  return (
    <div className='wrapper'>
      <section>
        <div className='header__menu'>
          <div className='header__logo'>
            <Logo />
          </div>
          <Navigation />
        </div>
      </section>
      <section>
        <div className='header__block'>
          <div>
            <p className='header__desc'>Ищете мастера, понимающего желания клиента и ответственно подходящего к работе? </p>
            <p className='header__subtitle'>Приглашаем вас посетить наш салон красоты Style. </p>
            <button className='header__btn'>Записаться</button>
            <div className='header__info'>
              <img src={icon1} alt="icon" />
              <p className='header__block-p '>+380 12 345 67 89</p>
              <img src={icon2} alt="icon" />
              <p className='header__block-p '>г. Днепр, пр. Гагарина, 198</p>
            </div>
          </div>
          <img className='header__block-img' src={imgOnHome} alt="img-girl" />
          <div className='header__block-icons'>
            <img src={line} alt="" />
            <img src={inst} alt="" />
            <img src={fb} alt="" />
            <img src={tg} alt="" />
            <img src={line} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
