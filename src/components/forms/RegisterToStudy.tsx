import { FC, memo } from 'react';
import { Formik, Field } from 'formik';
import { ITrainingRegister } from '@/types/user';
import { IGroup } from '@/types/admin';
import { useRegisterClientMutation } from '@/store/api/studyApi';
import { study } from '@/styles/study';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

interface IRegisterToStudyProps {
  data: IGroup | null;
  refetch?: any;
}

const RegisterToStudy: FC<IRegisterToStudyProps> = ({ data, refetch }) => {
  const [registerClient, { isLoading, isError }] = useRegisterClientMutation();
  const handleSubmit = async (
    values: ITrainingRegister,
    { resetForm }: any
  ) => {
    resetForm();
    console.log(values);
    const body = new FormData();
    if (!data) return;

    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toString().toLowerCase());
    });

    body.append('groupId', `${data._id}`);
    body.append('whenStart', `${data.whenStart}`);
    body.append('type', `${data.type}`);

    try {
      const response: any = await registerClient(body);
      if (response.data) {
        refetch();
      }
    } catch (err) {
      console.log(`${err} error in register study`);
    }
  };

  console.log(data);

  if (!data) return <div>Server error</div>;
  return (
    <div>
      <Formik
        initialValues={{ email: '', name: '', phoneNumber: '' }}
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
                Name
                {touched.name && errors.name && <span>{errors.name}</span>}
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
                  <span>{errors.phoneNumber}</span>
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
                {touched.email && errors.email && <span>{errors.email}</span>}
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
              children={isLoading ? 'Loading...' : 'Registration'}
            />
            <button type='submit'>{isLoading ? 'Loading...' : 'Submit'}</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(RegisterToStudy);
