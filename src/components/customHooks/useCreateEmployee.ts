import {
  useCreateEmployeeMutation,
  useGetEmployeesQuery,
} from '@/store/api/adminApi';
import { FormikHelpers } from 'formik';

interface IOptions {
  procedure: string;
  price: string;
}

interface IInitialState {
  name: string;
  surname: string;
  position: string;
  email: string;
  img?: any;
  phoneNumber: string;
  options: IOptions[];
}

export const useCreateEmployee = () => {
  const [createEmployee, { isLoading, isSuccess, isError }] =
    useCreateEmployeeMutation();

  const handleSubmit = async (
    values: IInitialState,
    actions: FormikHelpers<IInitialState>
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      if (item[0] !== 'options') {
        body.append(item[0], item[1].toString());
      }
    });
    body.append('file', values.img);
    body.append('options', JSON.stringify([...values.options]));
    actions.resetForm();

    try {
      await createEmployee(body);
    } catch (err) {
      console.log(`${err} create employee error.`);
    }
  };

  return {
    handleSubmit,
    isLoading,
    isSuccess,
    isError,
  };
};
