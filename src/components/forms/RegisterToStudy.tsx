import { FC, memo, useState } from 'react';
import { Formik, Field } from 'formik';
import { useRegisterClientMutation } from '@/store/api/studyApi';
import { useTranslation } from 'react-i18next';

//
import Loader from '@/components/Loader/Loader';
import ErrorHandler from '@/components/ErrorHandler/ErrorHandler';
import SuccessResponse from '@/components/SuccessResponse/SuccessResponse';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
//
import { IGroup } from '@/types/admin';
import { ITrainingRegister } from '@/types/user';
import { trainingRegistrationValidation } from '@/utils/validation/createGroupValidation';
import { study } from '@/styles/study';
import LinkButton from '../LinkButton/LinkButton';
import { ROUTE } from '@/utils/route/route';

interface IRegisterToStudyProps {
  data: IGroup | null;
  refetch?: any;
  isError?: boolean;
}

const RegisterToStudy: FC<IRegisterToStudyProps> = ({
  data,
  refetch,
  isError,
}) => {
  const { t } = useTranslation();

  const [registerClient, { isLoading, isSuccess, data: registerResponse }] =
    useRegisterClientMutation();
  const [responseData, setResponseData] = useState<string | null>(null);

  const handleSubmit = async (
    values: ITrainingRegister,
    { resetForm }: any
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toString().toLowerCase());
    });
    body.append('groupId', `${data?._id}`);
    body.append('whenStart', `${data?.whenStart}`);
    body.append('type', `${data?.type}`);
    const response: any = await registerClient(body);
    if (response.data) {
      await refetch();
      return;
    } else if (response?.error?.data?.msg) {
      setResponseData(response?.error?.data?.msg);
      return;
    } else {
      setResponseData('запис технічка');
      return;
    }
  };

  return (
    <div className='pb-[30px]'>
      {responseData ? (
        <ErrorHandler
          data={`${t(`${responseData}`)}`}
          setResponseData={setResponseData}
        />
      ) : null}
      {isSuccess ? (
        <SuccessResponse register success type={registerResponse?.type} />
      ) : null}
      <Formik
        initialValues={{ email: '', name: '', phoneNumber: '0' }}
        onSubmit={handleSubmit}
        validationSchema={trainingRegistrationValidation}
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
              <label className={study.label} htmlFor='phoneNumber'>
                {t('number')}
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={study.error}>
                    {t(`${errors.phoneNumber}`)}
                  </span>
                )}
                <Field
                  id='phoneNumber'
                  type='string'
                  className={study.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  name='phoneNumber'
                  placeholder='0991223445'
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
            </div>
            {isError ? (
              <div className='mb-[25px] text-white'>
                <span>{t('noGroupEntry')}</span>
                <br />
                <span>{t('didntChoose')}</span>
              </div>
            ) : data ? (
              <div className='flex gap-[15px] items-center mb-[25px] max-[576px]:flex-wrap max-[576px]:justify-center'>
                <div className='flex flex-col justify-start'>
                  <p className={study.dataTitle}>{t('price')}</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>
                      {data.price} {t('money')}
                    </p>
                  </div>
                </div>
                <div>
                  <p className={study.dataTitle}>{t('freePlaces')}</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>{data.countPlaces}</p>
                  </div>
                </div>
                <div>
                  <p className={study.dataTitle}>{t('startDate')}</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>{data.whenStart}</p>
                  </div>
                </div>
              </div>
            ) : null}
            <div className=' flex gap-[30px] items-center max-[576px]:flex-col max-[576px]:gap-[20px]'>
              <ButtonSubmit
                modificator='max-w-[200px]  max-[576px]:flex max-[576px]:justify-center max-[576px]:items-center max-[576px]:mx-auto w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
                children={isLoading ? <Loader /> : `${t('signUp')}`}
              />
              <LinkButton
                route={ROUTE.CANCELSTUDY}
                modificator='bg-transparent text-[#F0DDA3] border-b-[1px] border-gold'
              >
                Скасувати запис
              </LinkButton>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(RegisterToStudy);
