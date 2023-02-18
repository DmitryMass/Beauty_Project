import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
import { useTranslation } from 'react-i18next';
import LangBtn from '../LangBtn/LangBtn';
//
import { home } from '@/styles/home';
import '../../pages/Home/home.scss';

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
          className={`${home.navLink} list__wrapper  cursor-pointer relative mx-[15px] block`}
        >
          {t('more')}
          <ul className='list absolute rounded-[10px] z-[50] top-[25px] left-[-75px] py-[15px] px-[5px]'>
            <li className='w-full px-[20px] mb-[10px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block`}
                to={ROUTE.FEEDBACK}
              >
                {t('reviews')}
              </Link>
            </li>
            <li className='w-full px-[20px]'>
              <Link
                className={`${home.navLink} ${home.navLinkHoverEffect} inline-block cursor-pointer`}
                to={ROUTE.VACANCIES}
              >
                {t('vacancies')}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <LangBtn />
    </div>
  );
};

export default Navigation;
