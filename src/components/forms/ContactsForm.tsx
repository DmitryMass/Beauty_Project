import { study } from '@/styles/study';
import { contactsValidation } from '@/utils/validation/createGroupValidation';
import { Field, Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Loader from '../Loader/Loader';
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';

interface IInitalValues {
  name: string;
  email: string;
  text: string;
}

const ContactsForm: FC = () => {
  // rtk-query request hook
  const handleSubmit = async (
    values: IInitalValues,
    { resetForm }: FormikHelpers<IInitalValues>
  ) => {
    resetForm();
    try {
      console.log(values);
    } catch (err) {
      console.log(`${err} помилка в звороньому зв'язку.`);
    }
  };

  return (
    <div className='max-w-[590px] w-full bg-contactFormBg px-[20px] py-[10px] rounded-tr-[50px] rounded-bl-[50px] border-[1px] border-gold'>
      <Formik
        initialValues={{ name: '', email: '', text: '' }}
        onSubmit={handleSubmit}
        validationSchema={contactsValidation}
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

              <label className={study.label} htmlFor='email'>
                Пошта
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
                  placeholder='example@gmail.com'
                />
              </label>
              <label className={study.label} htmlFor='text'>
                Ваше питання
                {touched.text && errors.text && (
                  <span className={study.error}>{errors.text}</span>
                )}
                <Field
                  id='text'
                  component={'textarea'}
                  className={`${study.input} resize-none`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  name='text'
                  placeholder='Поставте ваше запитання...'
                />
              </label>
            </div>
            <ButtonSubmit
              children={'Відправити'}
              //    children={isLoading ? <Loader /> : 'Відправити'}
              modificator={
                'flex items-center justify-center max-w-[160px] w-full py-[5px] font-semibold hover:bg-hoverGold  transition-all duration-200 mx-auto'
              }
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
