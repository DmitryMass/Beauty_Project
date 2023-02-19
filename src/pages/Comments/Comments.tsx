import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { reviewsBreakPoints } from './breakPointes';
import { useGetReviewsQuery } from '@/store/api/contactsApi';
import { ROUTE } from '@/utils/route/route';
//
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';
import LinkButton from '@/components/LinkButton/LinkButton';
import { useHideTitle } from '@/components/customHooks/useHideTitle';
import ClientReview from '@/components/reviews/ClientReview/ClientReview';
import Loader from '@/components/Loader/Loader';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
//
import { IReview } from '@/types/review';
import { reviews } from '@/styles/reviews';
import '../Comments/comments.scss';

const Comments: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();
  const { data = [], isLoading, isError } = useGetReviewsQuery();

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="' + ${className} + bg-gold mt-[0px]'"></span>`;
    },
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={reviews.container}>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={`${t('запис технічка')}`}
        />
      ) : null}
      <GoldTitleBox
        modificator={`${
          visibility
            ? 'visible opacity-1 transition-all duration-150'
            : 'invisible opacity-0 transition-all duration-150'
        }`}
      >
        {t('reviews')}
      </GoldTitleBox>
      <BurgerMenu modificator={reviews.burgerModificator} />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator={reviews.logoModificator}
      />
      <p className={reviews.title}>{t('reviewTitle')}</p>
      {isLoading ? (
        <div className='max-w-[200px] w-full mx-auto '>
          <Loader />
        </div>
      ) : null}
      <div className={reviews.reviewsSwiperContainer}>
        <Swiper
          className='reviews__swiper'
          freeMode={true}
          modules={[FreeMode, Pagination]}
          pagination={pagination}
          breakpoints={reviewsBreakPoints}
        >
          {data
            ? data.map((item: IReview) => (
                <SwiperSlide key={item._id}>
                  <div className={reviews.reviewContainer}>
                    <ClientReview item={item} nameModificator='reviews__name' />
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <div className={reviews.footerWrapper}>
        <LinkButton
          route={ROUTE.FEEDBACKMORE}
          modificator='max-w-[200px] text-classic bg-transparent text-[#F0DDA3] font-medium'
        >
          {t('moreReviews')}
        </LinkButton>
        <LinkButton
          route={ROUTE.CLIENTFEEDBACK}
          modificator='max-w-[200px] text-classic bg-transparent text-[#F0DDA3] font-medium'
        >
          {t('leaveReview')}
        </LinkButton>
      </div>
      <div className='w-full text-center'>
        <p className={reviews.footerTitle}>{t('reviewFooterTitle')}</p>
      </div>
    </div>
  );
};

export default Comments;
