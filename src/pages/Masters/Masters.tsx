import { FC, useEffect } from 'react';
import { breakPoints } from '@/utils/swiper/breakPoints';
import { useTranslation } from 'react-i18next';

import MasterCard from '@/components/masters/MasterCard';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import { useGetEmployeesQuery } from '@/store/api/adminApi';
import Loader from '@/components/Loader/Loader';
import Logo from '@/components/Logo/Logo';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
//
import masterLeft from '@/assets/images/masterLeftLogo.png';
import masterRigth from '@/assets/images/masterRightLogo.png';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
//
import { IEmployee } from '@/types/employee';
import './masters.scss';
import { masters } from '@/styles/masters';
import { useHideTitle } from '@/components/customHooks/useHideTitle';

const Masters: FC = () => {
  const { t } = useTranslation();
  const { data = null, isLoading, isError } = useGetEmployeesQuery();
  const { listenToScroll, visibility } = useHideTitle();

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="' + ${className} + bg-gold '"></span>`;
    },
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className='relative'>
      <img className={masters.decorationImgLeft} src={masterLeft} alt='' />
      <img className={masters.decorationImgRight} src={masterRigth} alt='' />
      <div className={masters.infoWrapper}>
        <GoldTitleBox
          modificator={`${
            visibility
              ? 'visible opacity-1 transition-all duration-150'
              : 'invisible opacity-0 transition-all duration-150'
          } `}
        >
          {t('mastersTitle')}
        </GoldTitleBox>
        <div className={masters.blurBubble} />
        <BurgerMenu modificator={masters.burgerModificator} />
        <Logo
          imgModificator='w-[80px] h-[85px]'
          modificator={masters.logoModificator}
        />
        <div className={masters.swiperContainer}>
          <Swiper
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={pagination}
            className='mySwiper'
            breakpoints={breakPoints}
          >
            {isError ? (
              <GeneralErrorHandler
                isError={isError}
                data='?????????????? ?????????????? ??????????????. ?????????????????? ??????????????.'
              />
            ) : null}
            {isLoading ? (
              <div className={masters.loaderWrapper}>
                <Loader />
              </div>
            ) : null}
            {data
              ? data.map((employee: IEmployee) => (
                  <SwiperSlide key={employee._id}>
                    <MasterCard employee={employee} />
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Masters;
