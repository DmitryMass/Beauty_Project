import { FC } from 'react';
import { Field, FieldArray, FieldProps, Formik, FormikHelpers } from 'formik';
import { useCreateVacancyMutation } from '@/store/api/adminApi';
//
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';
//
import { IVacancy } from '@/types/vacancies';
import { createGroup } from '@/styles/forms';

const CreateJobVacancy: FC = () => {
  const [createVacancy, { isLoading, isSuccess, isError }] =
    useCreateVacancyMutation();
  const handleSubmit = async (
    values: IVacancy,
    { resetForm }: FormikHelpers<IVacancy>
  ) => {
    resetForm();
    const body = new FormData();

    Object.entries(values).forEach((item) => {
      if (item[0] !== 'requirements' && item[0] !== 'conditions') {
        body.append(item[0], item[1].toString());
      }
    });
    body.append('requirements', JSON.stringify([...values.requirements]));
    body.append('conditions', JSON.stringify([...values.conditions]));
    try {
      const response = await createVacancy(body);
      console.log(response);
    } catch (err) {
      console.log(`${err} помилка у створені вакансії`);
    }
    console.log(values);
  };

  return (
    <div className='mb-[30px]'>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={
            'Вибачте йдуть технічні роботи. Перезавантажте сторінку або спробуйте пізніше.'
          }
        />
      ) : null}
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={'Вакансію створено.'} />
      ) : null}
      <Formik
        initialValues={{
          vacancy: '',
          requirements: [{ require: '' }],
          conditions: [{ condition: '' }],
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
              <label className={createGroup.label} htmlFor='vacancy'>
                Ім'я
                {touched.vacancy && errors.vacancy && (
                  <span className={createGroup.errorSpan}>
                    {errors.vacancy}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='vacancy'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vacancy}
                  name='vacancy'
                  placeholder='Вакансія'
                />
              </label>
              <FieldArray name='requirements'>
                {(fieldArrayProps) => (
                  <>
                    <div>
                      <div>
                        <button
                          className='text-white bg-goldOpacity p-[5px] my-[10px] rounded-[4px]'
                          type='button'
                          onClick={() => fieldArrayProps.push({ require: '' })}
                        >
                          Додати вимогу
                        </button>
                      </div>
                      {values.requirements.map((option: any, index: any) => (
                        <div className='flex items-center' key={index}>
                          <Field name={`requirements.${index}.require`}>
                            {(fieldProps: FieldProps) => (
                              <>
                                <input
                                  className={createGroup.input}
                                  placeholder='Вимога'
                                  {...fieldProps.field}
                                />
                                <button
                                  className='block bg-red-600 mt-[6px] ml-[3px] rounded-[4px] px-[6px]'
                                  onClick={() => fieldArrayProps.remove(index)}
                                >
                                  X
                                </button>
                              </>
                            )}
                          </Field>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </FieldArray>
              <FieldArray name='conditions'>
                {(fieldArrayProps) => (
                  <>
                    <div>
                      <button
                        className='text-white bg-goldOpacity p-[5px] my-[10px] rounded-[4px]'
                        type='button'
                        onClick={() => fieldArrayProps.push({ condition: '' })}
                      >
                        Додати умову
                      </button>
                    </div>
                    {values.conditions.map((option: any, index: any) => (
                      <div className='flex items-center' key={index}>
                        <Field name={`conditions.${index}.condition`}>
                          {(fieldProps: FieldProps) => (
                            <>
                              <input
                                className={createGroup.input}
                                placeholder='Умова'
                                {...fieldProps.field}
                              />
                              <button
                                className='block bg-red-600 mt-[6px] ml-[3px] rounded-[4px] px-[6px]'
                                onClick={() => fieldArrayProps.remove(index)}
                              >
                                X
                              </button>
                            </>
                          )}
                        </Field>
                      </div>
                    ))}
                  </>
                )}
              </FieldArray>
            </div>
            <ButtonSubmit
              children={isLoading ? 'Завантажую...' : 'Додати вакансію'}
              modificator={createGroup.btnSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateJobVacancy;
