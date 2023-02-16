import { FormikHelpers } from 'formik';
import { transformDate } from '@/utils/func/transformDate';
import {
  useCreateGroupReqMutation,
  useGetMembersQuery,
} from '@/store/api/adminApi';
import { ICreateGroupInitialValue } from '@/types/admin';

export const useCreateGroup = (date: Date, type: string) => {
  const [createGroupReq, { isError, isLoading, isSuccess, data }] =
    useCreateGroupReqMutation();
  const { refetch } = useGetMembersQuery('');

  const handleSubmit = async (
    values: ICreateGroupInitialValue,
    actions: FormikHelpers<ICreateGroupInitialValue>
  ) => {
    actions.resetForm();

    const trainingDate = transformDate(date);
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toLowerCase());
    });
    body.append('whenStart', trainingDate);
    body.append('type', type.toLowerCase());

    try {
      await createGroupReq(body);
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handleSubmit,
    isLoading,
    isError,
    isSuccess,
    data,
  };
};
