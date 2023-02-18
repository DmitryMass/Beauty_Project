import { FC } from 'react';
import { Field, FieldArray, FieldProps, Formik, FormikHelpers } from 'formik';
//
import {
  useCreateServicesApiMutation,
  useGetServicesApiQuery,
} from '@/store/api/adminApi';
//
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';
//
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
//
import { createGroup } from '@/styles/forms';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';

interface IOptions {
  title: string;
  subtitle: string;
  price: string;
}

interface IInitialState {
  procedure: string;
  options: IOptions[];
}

const CreateServices: FC = () => {
  const [createServicesApi, { isLoading, isSuccess, isError }] =
    useCreateServicesApiMutation();

  const handleSubmit = async (
    values: IInitialState,
    { resetForm }: FormikHelpers<IInitialState>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      if (item[0] !== 'options') {
        body.append(item[0], item[1].toString());
      }
    });
    body.append('options', JSON.stringify([...values.options]));
    await createServicesApi(body);
  };

  return (
    <div>
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={'Сервіс створено'} />
      ) : null}
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={'Помилка при створенні сервісу.'}
        />
      ) : null}
      <Formik
        initialValues={{
          procedure: '',
          options: [{ title: '', subtitle: '', price: '' }],
        }}
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
            <div className={createGroup.inputsWrapper}>
              <label className={createGroup.label} htmlFor='procedure'>
                Процедура
                {touched.procedure && errors.procedure && (
                  <span className={createGroup.errorSpan}>
                    {errors.procedure}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='procedure'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.procedure}
                  name='procedure'
                  placeholder='Манікюр / педікюр / брови...'
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
                            fieldArrayProps.push({
                              title: '',
                              subtitle: '',
                              price: '',
                            })
                          }
                        >
                          Додати сервіс
                        </button>
                      </div>
                      {values.options.map((option: any, index: any) => (
                        <div className='flex items-center flex-col' key={index}>
                          <Field name={`options.${index}.title`}>
                            {(fieldProps: FieldProps) => (
                              <input
                                className={createGroup.input}
                                placeholder='Назва сервісу'
                                {...fieldProps.field}
                              />
                            )}
                          </Field>
                          <Field name={`options.${index}.subtitle`}>
                            {(fieldProps: FieldProps) => (
                              <input
                                className={createGroup.input}
                                placeholder='Опис сервісу'
                                {...fieldProps.field}
                              />
                            )}
                          </Field>
                          <Field name={`options.${index}.price`}>
                            {(fieldProps: FieldProps) => (
                              <div className='flex items-start'>
                                <input
                                  className={createGroup.input}
                                  placeholder='Приклад: 250 / 370 / 520'
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
              children={isLoading ? 'Завантажую...' : 'Додати процедуру'}
              modificator={createGroup.btnSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateServices;
