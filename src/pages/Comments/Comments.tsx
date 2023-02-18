import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { breakPointes } from './breakPointes';
//
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';
import LinkButton from '@/components/LinkButton/LinkButton';
import { useHideTitle } from '@/components/customHooks/useHideTitle';
//
import star from '@/assets/images/star.png';
import { IComments } from '@/types/employee';
import '../Comments/comments.scss';

const Comments: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className='relative h-full bg_img max-w-[1320px] w-full mx-auto px-[25px] max-[768px]:px-[15px]'>
      <GoldTitleBox
        modificator={`${
          visibility
            ? 'visible opacity-1 transition-all duration-150'
            : 'invisible opacity-0 transition-all duration-150'
        }`}
      >
        {t('reviews')}
      </GoldTitleBox>
      <BurgerMenu modificator='w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end ' />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator=' w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden'
      />
      <p className='text-white text-h3 text-center pt-[150px] mb-[70px]'>
        {t('reviewTitle')}
      </p>
      <div className='flex mt-[50px] max-w-[992px] w-full mx-auto justify-center py-[20px] max-h-[280px]'>
        <Swiper
          freeMode={true}
          modules={[FreeMode, Pagination]}
          breakpoints={breakPointes}
        >
          {data
            ? data.map((item: IComments) => (
                <SwiperSlide key={item.id}>
                  <div className='max-w-xs bg-gold rounded-[50px]'>
                    <div className='flex justify-between items-start ml-[25px] pt-[15px]'>
                      <div>
                        <p className='text-white text-[20px] font-bold'>
                          {item.name}
                        </p>
                        <div className='flex items-center'>
                          <p className='mt-[3px]'>{item.stars}</p>
                          <img
                            className='ml-[5px] w-[15px] h-[15px]'
                            src={star}
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='text-[14px] mr-[25px] mt-[6px]'>
                        {item.date}
                      </p>
                    </div>
                    <p className='text-[12px] ml-[25px] pt-[20px] pb-[35px]'>
                      {item.descripton}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <div className='max-w-[992px] flex mx-auto justify-between mb-[80px] mt-[30px] items-center'>
        <LinkButton modificator='max-w-[200px] text-classic bg-transparent text-[#F0DDA3] font-medium'>
          {t('moreReviews')}
        </LinkButton>
        <LinkButton modificator='max-w-[200px] text-classic bg-transparent text-[#F0DDA3] font-medium'>
          {t('leaveReview')}
        </LinkButton>
      </div>
      <div className='w-full text-center'>
        <p className='text-white text-h3'>{t('reviewFooterTitle')}</p>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: 'Anastasia',
    date: '10.02.2023',
    stars: 4.4,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
  {
    id: 2,
    name: 'Oleg',
    date: '11.02.2023',
    stars: 3.2,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
  {
    id: 4,
    name: 'Taras',
    date: '11.02.2023',
    stars: 2,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
  {
    id: 5,
    name: 'Anastasia',
    date: '10.02.2023',
    stars: 1.5,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
  {
    id: 6,
    name: 'Oleg',
    date: '11.02.2023',
    stars: 5,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
  {
    id: 7,
    name: 'Taras',
    date: '11.02.2023',
    stars: 3,
    descripton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
  },
];

export default Comments;
