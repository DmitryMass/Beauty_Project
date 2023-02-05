import { FC, memo, useState } from 'react';
import { Formik, Field } from 'formik';
import { useRegisterClientMutation } from '@/store/api/studyApi';
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
}

const RegisterToStudy: FC<IRegisterToStudyProps> = ({ data, refetch }) => {
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

    try {
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
    } catch (err) {
      console.log(`${err} error in register study`);
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
                Name
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
                  placeholder='Your name'
                />
              </label>
              <label className={study.label} htmlFor='phoneNumber'>
                Phone
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
                  placeholder='+380991223445'
                />
              </label>
              <label className={study.label} htmlFor='email'>
                E-mail
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
                  placeholder='Example@gmail.com'
                />
              </label>
            </div>
            {data ? (
              <div className='flex gap-[15px] items-center mb-[25px]'>
                <div className='flex flex-col justify-start'>
                  <p className='text-white mb-[5px] text-classic leading-classic'>
                    Price
                  </p>
                  <div className='p-[10px] bg-white w-[140px] flex justify-center items-center rounded-[6px]'>
                    <p className='text-coal text-classic leading-classic font-medium'>
                      {data.price} UAH
                    </p>
                  </div>
                </div>
                <div>
                  <p className='text-white mb-[5px] text-classic leading-classic'>
                    Free places
                  </p>
                  <div className='p-[10px] bg-white w-[140px] flex justify-center items-center rounded-[6px]'>
                    <p className='text-coal text-classic leading-classic  font-medium'>
                      {data.countPlaces}
                    </p>
                  </div>
                </div>
                <div>
                  <p className='text-white mb-[5px] text-classic leading-classic'>
                    Date of start
                  </p>
                  <div className='p-[10px] bg-white w-[140px] flex justify-center items-center rounded-[6px]'>
                    <p className='text-coal text-classic leading-classic  font-medium'>
                      {data.whenStart}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            <ButtonSubmit
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              children={isLoading ? <Loader /> : 'Registration'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(RegisterToStudy);
