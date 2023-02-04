import * as yup from 'yup';

export const createGroupValidation = yup.object().shape({
  countPlaces: yup
    .string()
    .max(3)
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
  price: yup
    .string()
    .label('Price')
    .max(4)
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
});

export const trainingRegistrationValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70)
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
    .label('Number')
    .min(6, 'Min 6 symbols')
    .max(14, 'Max 14 symbols')
    .matches(/^[0-9+/s]*$/gi, 'Numbers from 0 to 9')
    .required(),
});

export const createEmployeeValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70)
    .label('Email')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  name: yup
    .string()
    .label('Name')
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 15 символів')
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
    .max(25, 'Максимум 50 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z/s]*$/gi, 'Only ENG && UA letters')
    .required(),
  phoneNumber: yup
    .string()
    .label('Number')
    .min(6, 'Min 6 symbols')
    .max(14, 'Max 14 symbols')
    .matches(/^[0-9+/s]*$/gi, 'Numbers from 0 to 9')
    .required(),
});
