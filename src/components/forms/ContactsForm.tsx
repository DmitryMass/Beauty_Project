import { FC } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

import { useSendFeedbackMutation } from '@/store/api/contactsApi';
import { contactsValidation } from '@/utils/validation/createGroupValidation';
//
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import Loader from '../Loader/Loader';
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';
import SuccessHandler from '../SuccessHandler/SuccessHandler';
//
import { study } from '@/styles/study';

interface IInitalValues {
  name: string;
  email: string;
  text: string;
}

const ContactsForm: FC = () => {
  const { t } = useTranslation();

  const [sendFeedback, { isSuccess, isError, isLoading }] =
    useSendFeedbackMutation();

  const handleSubmit = async (
    values: IInitalValues,
    { resetForm }: FormikHelpers<IInitalValues>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    await sendFeedback(body);
  };

  return (
    <div className='max-w-[590px] w-full bg-servicesAndPriceBg px-[20px] py-[10px] rounded-tr-[50px] rounded-bl-[50px] border-[1px] border-gold'>
      {isSuccess ? (
        <SuccessHandler
          success={isSuccess}
          data={'Ми отримали ваше повідомлення. Дякую.'}
        />
      ) : null}
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={
            'Вибачте йдуть технічні роботи. Перезавантажте сторінку або спробуйте пізніше.'
          }
        />
      ) : null}
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
                {t('name')}
                {touched.name && errors.name && (
                  <span className={study.error}>{t(`${errors.name}`)}</span>
                )}
                <Field
                  id='name'
                  type='text'
                  className={study.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder={t('namePlaceholder')}
                />
              </label>

              <label className={study.label} htmlFor='email'>
                {t('email')}
                {touched.email && errors.email && (
                  <span className={study.error}>{t(`${errors.email}`)}</span>
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
                {t('yourQuestionLabel')}
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
                  placeholder={t('yourQuestionPlaceholder')}
                />
              </label>
            </div>
            <ButtonSubmit
              children={isLoading ? <Loader /> : `${t('sendBtn')}`}
              modificator={
                'max-w-[160px] flex items-center justify-center w-full py-[5px] font-semibold hover:bg-hoverGold transition-all duration-100 mx-auto'
              }
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
