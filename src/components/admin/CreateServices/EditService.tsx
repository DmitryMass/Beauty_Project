import { FC, useEffect } from 'react';
import {
  useEditServiceMutation,
  useGetOneServiceQuery,
  useGetServicesApiQuery,
} from '@/store/api/adminApi';
import useTypedSelector from '@/store/hooks/useTypedSelector';
import { Field, FieldArray, FieldProps, Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createGroup } from '@/styles/forms';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import Loader from '@/components/Loader/Loader';
import { useDispatch } from 'react-redux';
import useActions from '@/store/hooks/useActions';

interface IOptions {
  title: string;
  subtitle: string;
  price: string;
}

interface IInitialState {
  procedure: string;
  options: IOptions[];
}

const EditService: FC = () => {
  const id = useTypedSelector((state) => state.employees.services);
  const {
    data = null,
    isLoading,
    isError,
    refetch,
  } = useGetOneServiceQuery(`${id}`);
  const [editService, { isLoading: editLoading }] = useEditServiceMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setServices } = useActions();

  const handleEdit = async (
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

    try {
      const response: any = await editService({ id: `${id}`, data: body });
      if (response.data) {
        await refetch();
        navigate(import.meta.env.VITE_ADMIN);
      }
    } catch (err) {
      console.log(`${err} помилка в створенні сервісу.`);
    }
  };

  if (isError)
    return (
      <GeneralErrorHandler
        edit
        isError
        data={
          'Вибачте йдуть технічни роботи. Спробуйте пізніше або перезавантажте сторінку'
        }
      />
    );
  if (editLoading) {
    return (
      <div className='max-w-[200px] w-full mx-auto h-full flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='max-w-[992px] w-full mx-auto px-[15px] pt-[40px] pb-[50px] '>
      {isLoading ? (
        <div className='h-full max-w-[200px] w-full mx-auto flex justify-center items-center '>
          <Loader />
        </div>
      ) : (
        <Formik
          initialValues={{
            procedure: data?.procedure!,
            options: data?.options!,
          }}
          onSubmit={handleEdit}
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
                          <div
                            className='flex items-center flex-col'
                            key={index}
                          >
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
                                    onClick={() =>
                                      fieldArrayProps.remove(index)
                                    }
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
                children={isLoading ? 'Завантажую...' : 'Редагувати процедуру'}
                modificator={createGroup.btnSubmit}
              />
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditService;
