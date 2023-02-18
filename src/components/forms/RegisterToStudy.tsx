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
      setResponseData('Sorry failed connect to server...');
      return;
    }
  };

  return (
    <div>
      {responseData ? (
        <ErrorHandler data={responseData} setResponseData={setResponseData} />
      ) : null}
      {isSuccess ? (
        <SuccessResponse register success type={registerResponse?.type} />
      ) : null}
      <Formik
        initialValues={{ email: '', name: '', phoneNumber: '' }}
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
              <label className={study.label} htmlFor='phoneNumber'>
                {t('number')}
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={study.error}>{errors.phoneNumber}</span>
                )}
                <Field
                  id='phoneNumber'
                  type='number'
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
            </div>
            {isError ? (
              <div className='mb-[25px] text-white'>
                <span>Набору до даного курсу наразі немає.</span>
                <br />
                <span>Або вы ще не обрали курс.</span>
              </div>
            ) : data ? (
              <div className='flex gap-[15px] items-center mb-[25px]'>
                <div className='flex flex-col justify-start'>
                  <p className={study.dataTitle}>Ціна</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>{data.price} ГРН</p>
                  </div>
                </div>
                <div>
                  <p className={study.dataTitle}>Вільні місця</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>{data.countPlaces}</p>
                  </div>
                </div>
                <div>
                  <p className={study.dataTitle}>Дата початку</p>
                  <div className={study.dataWrapper}>
                    <p className={study.dataBoxInfo}>{data.whenStart}</p>
                  </div>
                </div>
              </div>
            ) : null}
            <ButtonSubmit
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              children={isLoading ? <Loader /> : 'Зареєструватися'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(RegisterToStudy);
