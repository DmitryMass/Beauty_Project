import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
//
import TranslateNav from '@/components/home/TranslateNav';
//
import { home } from '@/styles/home';
import '../../pages/Home/home.scss';

const Navigation: FC = () => {
  return (
    <div className='flex justify-end items-center gap-[25px]'>
      <ul className='flex justify-between items-center'>
        <li className=''>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.HOME}
          >
            Головна
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.SERVICES}
          >
            Послуги та ціни
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.MASTERS}
          >
            Майстри
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.STUDY}
          >
            Навчання
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.CONTACTS}
          >
            Контакти
          </Link>
        </li>
        <li
          className={` ${home.navLink} ${home.navLinkHoverEffect} inline-block ml-[25px]`}
        >
          Ще
        </li>
      </ul>
      <TranslateNav />
    </div>
  );
};

export default Navigation;
