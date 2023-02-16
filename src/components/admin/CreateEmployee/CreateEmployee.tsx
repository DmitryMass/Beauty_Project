import { FC } from 'react';
import Dropzone from 'react-dropzone';
import { Formik, Field, FieldArray, FieldProps } from 'formik';
import { createEmployeeValidation } from '@/utils/validation/createGroupValidation';
//
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import EmployeeSuccess from '@/components/admin/CreateEmployee/EmployeeSuccess';
import { useCreateEmployee } from '@/components/customHooks/useCreateEmployee';
//
import { createGroup } from '@/styles/forms';

const CreateEmployee: FC = () => {
  const { handleSubmit, isError, isLoading, isSuccess } = useCreateEmployee();

  return (
    <div className='text-white'>
      {isSuccess ? <EmployeeSuccess success /> : null}
      {isError ? (
        <div className='text-white'>
          Помилка серверу або співробітник вже існує.
        </div>
      ) : null}
      <Formik
        initialValues={{
          name: '',
          surname: '',
          position: '',
          email: '',
          phoneNumber: '',
          options: [{ procedure: '', price: '' }],
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
              <p>Фото співробітника</p>
              <div
                className={`${createGroup.input} relative w-full py-[10px] cursor-pointer text-center`}
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
                          Додати фото співробітника
                        </p>
                      ) : (
                        <span className='text-white text-[12px] text-ellipsis overflow-hidden whitespace-nowrap'>
                          Фото співробітника додано
                        </span>
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>
              <label className={createGroup.label} htmlFor='name'>
                Ім'я
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
                  placeholder="Ім'я"
                />
              </label>
              <label className={createGroup.label} htmlFor='surname'>
                Фамілія
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
                  placeholder='Фамілія'
                />
              </label>
              <label className={createGroup.label} htmlFor='email'>
                Пошта
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
                  placeholder='Пошта'
                />
              </label>
              <label className={createGroup.label} htmlFor='position'>
                Спеціальність
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
                  placeholder='Спеціальність'
                />
              </label>
              <label className={createGroup.label} htmlFor='phoneNumber'>
                Номер телефону
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
                  placeholder='09987654321'
                />
              </label>
              <FieldArray name='options'>
                {(fieldArrayProps) => (
                  <>
                    <div>
                      <div>
                        <button
                          className='text-white bg-goldOpacity p-[5px] my-[10px] rounded-[4px]'
                          type='button'
                          onClick={() =>
                            fieldArrayProps.push({ procedure: '', price: '' })
                          }
                        >
                          Додати процедуру
                        </button>
                      </div>
                      {values.options.map((option: any, index: any) => (
                        <div className='flex items-center' key={index}>
                          <Field name={`options.${index}.procedure`}>
                            {(fieldProps: FieldProps) => (
                              <input
                                className={createGroup.input}
                                placeholder='Процедура'
                                {...fieldProps.field}
                              />
                            )}
                          </Field>
                          <Field name={`options.${index}.price`}>
                            {(fieldProps: FieldProps) => (
                              <div className='flex items-start'>
                                <input
                                  className={createGroup.input}
                                  placeholder='Ціна'
                                  {...fieldProps.field}
                                />
                                <button
                                  className='block bg-red-600 mt-[6px] ml-[3px] rounded-[4px] px-[6px]'
                                  onClick={() => fieldArrayProps.remove(index)}
                                >
                                  X
                                </button>
                              </div>
                            )}
                          </Field>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </FieldArray>
            </div>
            <ButtonSubmit
              children={isLoading ? 'Завантажую...' : 'Додати співробітника'}
              modificator={createGroup.btnSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEmployee;
