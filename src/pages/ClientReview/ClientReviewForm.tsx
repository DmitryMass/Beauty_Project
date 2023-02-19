import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//
import { useHideTitle } from '@/components/customHooks/useHideTitle';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';
//
import { reviews } from '@/styles/reviews';
import { Field, Formik, FormikHelpers } from 'formik';
import { study } from '@/styles/study';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import { signToMaster } from '@/styles/signToMaster';

interface IInitalValues {
  name: string;
  email: string;
  review: string;
  stars: string;
}

const ClientReviewForm: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();

  const handleSubmit = async (
    values: IInitalValues,
    { resetForm }: FormikHelpers<IInitalValues>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });

    console.log(values);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className={reviews.container}>
      {/* {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={`${t('запис технічка')}`}
        />
      ) : null} */}
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
      <div className='pt-[180px] pb-[20px] max-w-[768px] w-full mx-auto'>
        <Formik
          initialValues={{ name: '', email: '', stars: '', review: '' }}
          onSubmit={handleSubmit}
          validationSchema={''}
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
                    <span className={study.error}>{errors.name}</span>
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
                    <span className={study.error}>{errors.email}</span>
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
                  Оцінка
                  <select
                    id='stars'
                    name='stars'
                    onBlur={handleBlur}
                    className={`${signToMaster.select} block `}
                    onChange={handleChange}
                    value={values.stars}
                  >
                    <option label='Виберіть оцінку' value='Виберіть оцінку' />
                    <option label='1' value='1' />
                    <option label='2' value='2' />
                    <option label='3' value='3' />
                    <option label='4' value='4' />
                    <option label='5' value='5' />
                  </select>
                </label>
                <label className={study.label} htmlFor='review'>
                  {t('yourQuestionLabel')}
                  {touched.review && errors.review && (
                    <span className={study.error}>{errors.review}</span>
                  )}
                  <Field
                    id='review'
                    component={'textarea'}
                    className={`${study.input} resize-none`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.review}
                    name='review'
                    placeholder={t('yourQuestionPlaceholder')}
                  />
                </label>
              </div>
              <ButtonSubmit
                // children={isLoading ? <Loader /> : `${t('sendBtn')}`}
                children={`${t('sendBtn')}`}
                modificator={
                  'max-w-[160px] flex items-center justify-center w-full py-[5px] font-semibold hover:bg-hoverGold transition-all duration-100 mx-auto'
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
