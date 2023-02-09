import { FC } from 'react';
import { study } from '@/styles/study';
import { Field, Formik } from 'formik';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Loader from '../Loader/Loader';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';

const SignToMasterForm: FC<{ id: string }> = ({ id }) => {
  const { data = null, isLoading } = useGetOneEmployeeQuery(`${id}`);
  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
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
                Ім'я
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
                  placeholder="Ваше ім'я"
                />
              </label>
              <label className={study.label} htmlFor='phoneNumber'>
                Номер телефону
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
            </div>
            <section>
              <span className={study.label}>Ваш майстер</span>
              <h3 className={study.input}>
                {data?.name} {data?.surname}
              </h3>
            </section>
            <ButtonSubmit
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              //   children={isLoading ? <Loader /> : 'Зареєструватися'}
              children={'Зареєструватися'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignToMasterForm;
