import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
import { useTranslation } from 'react-i18next';
//
import MessengersList from '../MessengersList/MessengersList';
import LangBtn from '../LangBtn/LangBtn';
//
import burger from '@/assets/icons/burger.svg';
import closeBtn from '@/assets/icons/closeButton.svg';

import { home } from '@/styles/home';
import './home.scss';

interface IBurgerMenuProps {
  modificator?: string;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ modificator }) => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const { t } = useTranslation();

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
                {t('main')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.SERVICES}
              >
                {t('services')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.MASTERS}
              >
                {t('masters')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.STUDY}
              >
                {t('study')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.CONTACTS}
              >
                {t('contacts')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.FEEDBACK}
              >
                {t('reviews')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.VACANCIES}
              >
                {t('vacancies')}
              </Link>
            </li>
          </ul>
          <LangBtn />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
