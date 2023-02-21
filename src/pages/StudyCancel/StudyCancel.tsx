import { FC } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import { cancelStudyValidation } from '@/utils/validation/createGroupValidation';
import { useGetMembersQuery } from '@/store/api/adminApi';
//
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import Logo from '@/components/Logo/Logo';
import BurgerMenu from '@/components/home/BurgerMenu';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import Loader from '@/components/Loader/Loader';
//
import { IGroupmembers } from '@/types/admin';
import { signToMaster } from '@/styles/signToMaster';
import { study } from '@/styles/study';
import { useCancelRegisterMutation } from '@/store/api/studyApi';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';

interface IInitialValues {
  email: string;
  name: string;
  type: string;
  whenStart: string;
}

const StudyCancel: FC = () => {
  const { t } = useTranslation();
  const [
    cancelRegister,
    { isLoading: cancelLoading, isError: cancelError, isSuccess },
  ] = useCancelRegisterMutation();
  const { data = null, isLoading, isError } = useGetMembersQuery('');

  const handleSubmit = async (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toString().toLowerCase());
    });
    await cancelRegister(body);
  };

  return (
    <div className='bg_img max-w-[1320px] w-full mx-auto relative px-[25px] max-[768px]:px-[15px]'>
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={`${t('cancelSuccess')}`} />
      ) : null}
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={`${t('запис технічка')}`}
        />
      ) : null}
      {cancelError ? (
        <GeneralErrorHandler
          isError={cancelError}
          data={`${t('запис технічка')}`}
        />
      ) : null}
      <GoldTitleBox children='Скасування запису' />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator='w-[85px] ml-auto max-[992px]:hidden'
      />
      <BurgerMenu modificator='ml-auto justify-end w-[80px] h-[85px]  max-[992px]:pt-[35px] max-[576px]:pt-[25px]  ' />
      <div className='max-w-[768px] pt-[90px] w-full mx-auto max-[576px]:pt-[70px]'>
        <h3 className='text-h3 font-medium max-[576px]:text-md mb-[50px] text-center text-white'>
          {t('cancelTitle')}
        </h3>
        <Formik
          initialValues={{ email: '', name: '', type: '', whenStart: '' }}
          onSubmit={handleSubmit}
          validationSchema={cancelStudyValidation}
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
                <label className={study.label} htmlFor='email'>
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
                <div className='flex items-center gap-[20px] max-[576px]:flex-col max-[576px]:items-start max-[576px]:gap-[5px]'>
                  {isLoading ? <Loader /> : null}
                  {data ? (
                    <>
                      <div>
                        {touched.type && errors.type && (
                          <span className={study.error}>
                            {t(`${errors.type}`)}
                          </span>
                        )}
                        <select
                          id='type'
                          name='type'
                          onBlur={handleBlur}
                          className={`${signToMaster.select} block`}
                          onChange={handleChange}
                          value={values.type}
                        >
                          <option label={`${t('courseType')}`} />
                          {data.map((group: IGroupmembers) => (
                            <option key={group._id}>{group.type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        {touched.whenStart && errors.whenStart && (
                          <span className={study.error}>
                            {t(`${errors.whenStart}`)}
                          </span>
                        )}
                        <select
                          id='whenStart'
                          name='whenStart'
                          onBlur={handleBlur}
                          className={`${signToMaster.select} block `}
                          onChange={handleChange}
                          value={values.whenStart}
                        >
                          <option label={`${t('chooseDate')}`} />
                          {data.map((group: IGroupmembers) => (
                            <option key={group._id}>{group.whenStart}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <ButtonSubmit
                modificator='max-w-[200px]  max-[576px]:flex max-[576px]:justify-center max-[576px]:items-center max-[576px]:mx-auto w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
                children={cancelLoading ? <Loader /> : `${t('cancel')}`}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StudyCancel;
