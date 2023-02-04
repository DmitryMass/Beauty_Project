import { FC } from 'react';

import Dropzone from 'react-dropzone';
import { Formik, Field } from 'formik';
import { createGroup } from '@/styles/forms';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import { useCreateEmployeeMutation } from '@/store/api/adminApi';
import { createEmployeeValidation } from '@/utils/validation/createGroupValidation';

interface IInitialState {
  name: string;
  surname: string;
  position: string;
  email: string;
  img?: any;
  phoneNumber: string;
}

const CreateEmployee: FC = () => {
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

  const handleSubmit = async (values: IInitialState, { resetForm }: any) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toString());
    });

    body.append('file', values.img);
    resetForm();
    try {
      const response = await createEmployee(body);
      console.log(response);
    } catch (err) {
      console.log(`${err} create employee error.`);
    }
  };

  return (
    <div className='text-white'>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          position: '',
          email: '',
          phoneNumber: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={createEmployeeValidation}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          setFieldValue,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={createGroup.inputsWrapper}>
              <p>Фото сотрудника</p>
              <div
                className={`${createGroup.input} relative w-full py-[10px] cursor-cell text-center`}
              >
                <Dropzone
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setFieldValue('img', acceptedFiles[0])
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {!values.img ? (
                        <p className='text-white text-[12px]'>
                          Прикрепить фото сотрудника
                        </p>
                      ) : (
                        <span className='text-white text-[12px] text-ellipsis overflow-hidden whitespace-nowrap'>
                          Фото сотрудника добавлено
                        </span>
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>
              <label className={createGroup.label} htmlFor='name'>
                Name
                {touched.name && errors.name && (
                  <span className={createGroup.errorSpan}>{errors.name}</span>
                )}
                <Field
                  className={createGroup.input}
                  id='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder='Employee name'
                />
              </label>
              <label className={createGroup.label} htmlFor='surname'>
                Surname
                {touched.surname && errors.surname && (
                  <span className={createGroup.errorSpan}>
                    {errors.surname}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='surname'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  name='surname'
                  placeholder='Employee surname'
                />
              </label>
              <label className={createGroup.label} htmlFor='email'>
                Email
                {touched.email && errors.email && (
                  <span className={createGroup.errorSpan}>{errors.email}</span>
                )}
                <Field
                  className={createGroup.input}
                  id='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name='email'
                  placeholder='Employee email'
                />
              </label>
              <label className={createGroup.label} htmlFor='position'>
                Position
                {touched.position && errors.position && (
                  <span className={createGroup.errorSpan}>
                    {errors.position}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='position'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.position}
                  name='position'
                  placeholder='Employee position'
                />
              </label>
              <label className={createGroup.label} htmlFor='phoneNumber'>
                Phone number
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={createGroup.errorSpan}>
                    {errors.phoneNumber}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='position'
                  type='number'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  name='phoneNumber'
                  placeholder='Employee phone number'
                />
              </label>
            </div>
            <ButtonSubmit
              //   children={isLoading ? 'Loading...' : 'Create Group'}
              children={'Add employee'}
              modificator={createGroup.btnSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEmployee;
