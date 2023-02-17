import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
import { useTranslation } from 'react-i18next';
//
import { home } from '@/styles/home';
import '../../pages/Home/home.scss';
import LangBtn from '../LangBtn/LangBtn';

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='flex justify-end items-center gap-[15px] max-[992px]:hidden'>
      <ul className='flex justify-between items-center'>
        <li className='  px-[15px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.SERVICES}
          >
            {t('services')}
          </Link>
        </li>
        <li className=' px-[15px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.MASTERS}
          >
            {t('masters')}
          </Link>
        </li>
        <li className='px-[15px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.STUDY}
          >
            {t('study')}
          </Link>
        </li>
        <li className=' px-[15px]'>
          <Link
            className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
            to={ROUTE.CONTACTS}
          >
            {t('contacts')}
          </Link>
        </li>
        <li
          className={` ${home.navLink} ${home.navLinkHoverEffect} inline-block px-[15px]`}
        >
          {t('more')}
        </li>
      </ul>
      <LangBtn />
    </div>
  );
};

export default Navigation;
