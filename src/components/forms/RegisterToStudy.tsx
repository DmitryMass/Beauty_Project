import { FC } from 'react';
import { Formik, Field } from 'formik';
import { ITrainingRegister } from '@/types/user';
import { IGroup } from '@/types/admin';
import { useRegisterClientMutation } from '@/store/api/studyApi';
import useActions from '@/store/hooks/useActions';
import { useDispatch } from 'react-redux';

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
    const body = new FormData();
    if (!data) return;

    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toLowerCase());
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

  return (
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
            <button type='submit'>{isLoading ? 'Loading...' : 'Submit'}</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterToStudy;
