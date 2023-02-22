import * as yup from 'yup';

export const createGroupValidation = yup.object().shape({
  countPlaces: yup
    .string()
    .label('Count')
    .max(3, 'Максимум 3 символи')
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
  price: yup
    .string()
    .label('Price')
    .max(4, 'Максимум 4 символи')
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
});

export const trainingRegistrationValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  phoneNumber: yup
    .string()
    .test(
      'len',
      'Number must be between 6 and 10 digits',
      (val: string | undefined) => {
        if (val === '0') return true;
        if (val?.length) {
          return val.length >= 6 && val.length <= 10;
        } else return false;
      }
    )
    .matches(/^[0-9+/s]*$/gi, 'Numbers from 0 to 9')
    .required(),
});

export const createEmployeeValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  surname: yup
    .string()
    .label('Surname')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  position: yup
    .string()
    .label('Position')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .required(),
  phoneNumber: yup
    .string()
    .test(
      'len',
      'Number must be between 6 and 10 digits',
      (val: string | undefined) => {
        if (val === '0') return true;
        if (val?.length) {
          return val.length >= 6 && val.length <= 10;
        } else return false;
      }
    )
    .matches(/^[0-9+/s]*$/gi, 'Numbers from 0 to 9')
    .required(),
});

export const contactsValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  text: yup.string(),
});

export const visitToMasterValidation = yup.object().shape({
  phoneNumber: yup
    .string()
    .test(
      'len',
      'Number must be between 6 and 10 digits',
      (val: string | undefined) => {
        if (val === '0') return true;
        if (val?.length) {
          return val.length >= 6 && val.length <= 10;
        } else return false;
      }
    )
    .matches(/^[0-9+/s]*$/gi, 'Numbers from 0 to 9')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
});

export const reviewFormValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  stars: yup.string().label('Rate').required(),
  review: yup.string().label('Review').required(),
});

export const cancelStudyValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  type: yup.string().label('Type').required(),
  whenStart: yup.string().label('Start').required(),
});
