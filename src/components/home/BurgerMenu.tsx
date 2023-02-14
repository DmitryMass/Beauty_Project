import { FC, useState } from 'react';
import burger from '@/assets/icons/burger.svg';
import closeBtn from '@/assets/icons/closeButton.svg';
import TranslateNav from './TranslateNav';
import './home.scss';
import { ROUTE } from '@/utils/route/route';
import { home } from '@/styles/home';
import { Link } from 'react-router-dom';
import MessengersList from '../MessengersList/MessengersList';

interface IBurgerMenuProps {
  modificator?: string;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ modificator }) => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  return (
    <div className={`hidden  max-[992px]:flex gap-[15px] ${modificator}`}>
      <button onClick={() => setBurgerMenu((prev) => !prev)}>
        <img src={burger} alt='burger' />
      </button>
      <div
        className={`${
          burgerMenu
            ? 'translate-x-0 transition-all duration-300 visible'
            : 'translate-x-full transition-all duration-300 invisible'
        } fixed z-[100]  h-full  top-0 right-0  w-full flex justify-end `}
      >
        <div className='burgerBg bg-coal text-white max-w-[350px] w-full  h-full relative flex flex-col justify-center gap-[30px]'>
          <button
            className='absolute top-[15px] right-[15px]'
            onClick={() => setBurgerMenu((prev) => !prev)}
          >
            <img className='w-[30px] h-[30px]' src={closeBtn} alt='close' />
          </button>
          <MessengersList modificator='flex justify-center items-center gap-[15px]' />
          <ul className='flex flex-col justify-start items-start max-w-[250px] w-full mx-auto gap-[5px]'>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.HOME}
              >
                Головна
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.SERVICES}
              >
                Послуги та ціни
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.MASTERS}
              >
                Майстри
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.STUDY}
              >
                Навчання
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.CONTACTS}
              >
                Контакти
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.FEEDBACK}
              >
                Відгуки
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.VACANCIES}
              >
                Вакансії
              </Link>
            </li>
          </ul>
          <TranslateNav />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
