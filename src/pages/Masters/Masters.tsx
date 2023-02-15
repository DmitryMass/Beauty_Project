import { FC } from 'react';

import MasterCard from '@/components/masters/MasterCard';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import { useGetEmployeesQuery } from '@/store/api/adminApi';
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
import Loader from '@/components/Loader/Loader';
import { breakPoints } from '@/utils/swiper/breakPoints';
import { masters } from '@/styles/masters';
import Logo from '@/components/Logo/Logo';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';

const Masters: FC = () => {
  const { data = null, isLoading, isError } = useGetEmployeesQuery('');

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="' + ${className} + bg-gold '"></span>`;
    },
  };

  return (
    <div className='relative'>
      <img className={masters.decorationImgLeft} src={masterLeft} alt='' />
      <img className={masters.decorationImgRight} src={masterRigth} alt='' />
      <div className={masters.infoWrapper}>
        <GoldTitleBox>
          Нащі <br className='hidden max-[400px]:block' /> майстри
        </GoldTitleBox>
        <div className={masters.blurBubble} />
        <BurgerMenu modificator='w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end max-[400px]:top-[30px]' />
        <Logo
          imgModificator='w-[80px] h-[85px]'
          modificator=' w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden'
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
                data='Вибачте помилка серверу. Спробуйте пізніше.'
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
