import { FC } from 'react';

import MasterCard from '@/components/masters/MasterCard';
import { useGetEmployeesQuery } from '@/store/api/adminApi';
import { IEmployee } from '@/types/employee';
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
import './masters.scss';

const Masters: FC = () => {
  const { data = null, isLoading } = useGetEmployeesQuery('');

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="' + ${className} + bg-gold '"></span>`;
    },
  };

  return (
    <div className='relative'>
      <img
        className='absolute bottom-0 left-0 max-w-[350px] w-full'
        src={masterLeft}
        alt=''
      />
      <img
        className='absolute right-0 bottom-0 max-w-[300px] w-full'
        src={masterRigth}
        alt=''
      />
      <div className='min-h-[100vh] max-w-[1320px] w-full mx-auto px-[30px] relative flex justify-center items-center '>
        <div className='linearBg  p-[15px] w-[58%] text-right fixed top-[30px] left-0'>
          <h1 className='text-coal font-bold text-h2 leading-md'>
            Наші майстри
          </h1>
        </div>
        <div className='max-w-[235px] w-full max-h-[250px] h-full rounded-full bg-goldBlur blur-[200px] absolute top-0 right-0' />
        <div className='flex mt-[50px] max-w-[992px] w-full mx-auto justify-center  h-full py-[20px] '>
          <Swiper
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={pagination}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
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
