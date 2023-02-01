import { FC } from 'react';
import { Formik, Field } from 'formik';
import { ITrainingRegister } from '@/types/user';

const Study: FC = () => {
  const handleSubmit = async (
    values: ITrainingRegister,
    { resetForm }: any
  ) => {
    console.log(values);
  };
  return (
    <div>
      <div>photo</div>
      <div>
        <Formik
          initialValues={{ email: '', name: '' }}
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
              <div>
                <label htmlFor='email'>
                  Number of places
                  {touched.email && errors.email && <span>{errors.email}</span>}
                  <Field
                    id='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    placeholder='Your email address'
                  />
                </label>
                <label htmlFor='name'>
                  Type
                  {touched.name && errors.name && <span>{errors.name}</span>}
                  <Field
                    id='name'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name='name'
                    placeholder='Your name'
                  />
                </label>
              </div>
              <button type='submit'>Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Study;
