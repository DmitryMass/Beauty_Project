import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Formik, FormikHelpers } from 'formik';
//
import { useHideTitle } from '@/components/customHooks/useHideTitle';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
//
import { reviews } from '@/styles/reviews';
import { study } from '@/styles/study';
import { signToMaster } from '@/styles/signToMaster';
import { reviewFormValidation } from '@/utils/validation/createGroupValidation';
import { useSendReviewMutation } from '@/store/api/contactsApi';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';

interface IInitalValues {
  name: string;
  email: string;
  review: string;
  stars: string;
}

const ClientReviewForm: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();
  const [sendReview, { isLoading, isError, isSuccess, error }]: any =
    useSendReviewMutation();

  const handleSubmit = async (
    values: IInitalValues,
    { resetForm }: FormikHelpers<IInitalValues>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    await sendReview(body);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={reviews.container}>
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={`${t('thnxForReview')}`} />
      ) : null}
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={
            error?.data ? `${t(`${error.data.msg}`)}` : `${t('запис технічка')}`
          }
        />
      ) : null}
      <GoldTitleBox
        modificator={`${
          visibility
            ? 'visible opacity-1 transition-all duration-150'
            : 'invisible opacity-0 transition-all duration-150'
        }`}
      >
        {t('yourReview')}
      </GoldTitleBox>
      <BurgerMenu modificator={reviews.burgerModificator} />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator={reviews.logoModificator}
      />
      <div className='pt-[140px] pb-[20px] max-w-[768px] w-full mx-auto'>
        <h3 className='pb-[30px] text-center text-white text-md'>
          {t('дякуємо')} <br /> {t('відгук')}
        </h3>
        <Formik
          initialValues={{ name: '', email: '', stars: '', review: '' }}
          onSubmit={handleSubmit}
          validationSchema={reviewFormValidation}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='mb-[10px]'>
                <label className={study.label} htmlFor='name'>
                  {t('name')}
                  {touched.name && errors.name && (
                    <span className={study.error}>{t(`${errors.name}`)}</span>
                  )}
                  <Field
                    id='name'
                    type='text'
                    className={study.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name='name'
                    placeholder={t('namePlaceholder')}
                  />
                </label>

                <label className={`${study.label}`} htmlFor='email'>
                  {t('email')}
                  {touched.email && errors.email && (
                    <span className={study.error}>{t(`${errors.email}`)}</span>
                  )}
                  <Field
                    className={study.input}
                    id='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    placeholder='example@gmail.com'
                  />
                </label>
                <label htmlFor='stars' className={study.label}>
                  {t('rate')}
                  {touched.stars && errors.stars && (
                    <span className={study.error}>{t(`${errors.stars}`)}</span>
                  )}
                  <select
                    id='stars'
                    name='stars'
                    onBlur={handleBlur}
                    className={`${signToMaster.select} block `}
                    onChange={handleChange}
                    value={values.stars}
                  >
                    <option label={`${t('chooseRate')}`}>
                      {t('chooseRate')}
                    </option>
                    <option label='1' value='1'>
                      1
                    </option>
                    <option label='2' value='2'>
                      2
                    </option>
                    <option label='3' value='3'>
                      3
                    </option>
                    <option label='4' value='4'>
                      4
                    </option>
                    <option label='5' value='5'>
                      5
                    </option>
                  </select>
                </label>
                <label className={study.label} htmlFor='review'>
                  {t('yourReview')}
                  {touched.review && errors.review && (
                    <span className={study.error}>{t(`${errors.review}`)}</span>
                  )}
                  <Field
                    id='review'
                    component={'textarea'}
                    className={`${study.input} resize-none`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.review}
                    name='review'
                    placeholder={t('yourReview')}
                  />
                </label>
              </div>
              <ButtonSubmit
                children={isLoading ? <Loader /> : `${t('sendBtn')}`}
                modificator={
                  'bg-gold text-darkGrey text-classic leading-classic max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100"'
                }
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ClientReviewForm;
