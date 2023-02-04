import { home } from '@/styles/home';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Home/home.scss';
import TranslateNav from './TranslateNav';

const Navigation: FC = () => {
  return (
    <div className='flex justify-end items-center gap-[25px]'>
      <ul className='flex justify-between items-center'>
        <li className=''>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/'}
          >
            Главная
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/'}
          >
            Услуги
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/'}
          >
            Прайс
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/'}
          >
            Мастера
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/study'}
          >
            Обучение
          </Link>
        </li>
        <li className='ml-[25px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect}`}
            to={'/'}
          >
            Ещё
          </Link>
        </li>
      </ul>
      <TranslateNav />
    </div>
  );
};

export default Navigation;
