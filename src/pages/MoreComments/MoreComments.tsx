import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetReviewsPaginationQuery } from '@/store/api/contactsApi';
//
import { useHideTitle } from '@/components/customHooks/useHideTitle';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Loader from '@/components/Loader/Loader';
import Logo from '@/components/Logo/Logo';
import ClientReview from '@/components/reviews/ClientReview/ClientReview';
//
import { reviews } from '@/styles/reviews';
import { IReview } from '@/types/review';
import '../Comments/comments.scss';

const MoreComments: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetReviewsPaginationQuery(
    { page },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={reviews.moreWrapper}>
      {isError ? (
        <GeneralErrorHandler isError={isError} data={t('запис технічка')} />
      ) : null}
      <GoldTitleBox
        modificator={`${
          visibility
            ? 'visible opacity-1 transition-all duration-75'
            : 'invisible opacity-0 transition-all duration-75'
        }`}
      >
        {t('reviews')}
      </GoldTitleBox>
      <BurgerMenu modificator={reviews.burgerModificator} />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator={reviews.logoModificator}
      />
      <div className={reviews.morePaginationContainer}>
        {isLoading ? (
          <div className='w-full max-w-[200px] mx-auto text-center'>
            <Loader />
          </div>
        ) : null}
        {data?.reviews
          ? data.reviews.map((review: IReview) => (
              <div className={reviews.moreReviewContainer} key={review._id}>
                <ClientReview
                  nameModificator='reviews__name-more'
                  item={review}
                />
              </div>
            ))
          : null}
        <div className={reviews.btnsWrapper}>
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className={reviews.btnMoreAndBack}
          >
            {t('back')}
          </button>
          <button
            disabled={page === data?.totalReviews}
            onClick={() => setPage((prev) => prev + 1)}
            className={reviews.btnMoreAndBack}
          >
            {t('more')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreComments;
