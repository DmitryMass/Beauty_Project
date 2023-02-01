import * as yup from 'yup';

export const createGroupValidation = yup.object().shape({
  countPlaces: yup
    .string()
    .label('Number of places')
    .max(3)
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
  type: yup.string().label('Type').max(50).required(),
  price: yup
    .string()
    .label('Price')
    .max(4)
    .matches(/^[0-9]*$/gi, 'Numbers only')
    .required(),
});
