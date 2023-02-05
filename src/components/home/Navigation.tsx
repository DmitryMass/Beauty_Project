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
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={ROUTE.HOME}
          >
            Главная
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={ROUTE.SERVICES}
          >
            Услуги
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={ROUTE.PRICE}
          >
            Прайс
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={ROUTE.MASTERS}
          >
            Мастера
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={ROUTE.STUDY}
          >
            Обучение
          </Link>
        </li>
        <li className={`${home.additionalMenu} ml-[25px]`}>Ещё</li>
      </ul>
      <TranslateNav />
    </div>
  );
};

export default Navigation;
