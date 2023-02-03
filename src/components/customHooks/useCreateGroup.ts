import { transformDate } from '@/utils/func/transformDate';
import {
  useCreateGroupReqMutation,
  useGetGroupsQuery,
} from '@/store/api/adminApi';
import { ICreateGroupInitialValue } from '@/types/admin';

export const useCreateGroup = (date: Date, type: string) => {
  const [createGroupReq, { isError, isLoading }] = useCreateGroupReqMutation();
  const { refetch } = useGetGroupsQuery('');

  const handleSubmit = async (
    values: ICreateGroupInitialValue,
    { resetForm }: any
  ) => {
    resetForm();
    console.log(values);
    const trainingDate = transformDate(date);
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toLowerCase());
    });
    body.append('whenStart', trainingDate);
    body.append('type', type.toLowerCase());

    try {
      await createGroupReq(body);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handleSubmit,
    isLoading,
    isError,
  };
};
