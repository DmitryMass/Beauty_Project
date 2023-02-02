import { transformDate } from '@/utils/func/transformDate';
import { useCreateGroupReqMutation } from '@/store/api/adminApi';
import { ICreateGroupInitialValue } from '@/types/admin';

export const useCreateGroup = (date: Date) => {
  const [createGroupReq, { isError, isLoading }] = useCreateGroupReqMutation();
  const handleSubmit = async (
    values: ICreateGroupInitialValue,
    { resetForm }: any
  ) => {
    resetForm();
    const trainingDate = transformDate(date);
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toLowerCase());
    });
    body.append('whenStart', trainingDate);

    try {
      await createGroupReq(body);
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
