import { transformDate } from '@/utils/func/transformDate';
import { useDispatch } from 'react-redux';
import useActions from '@/store/hooks/useActions';
import { useCreateGroupReqMutation } from '@/store/api/adminApi';
import { ICreateGroupInitialValue } from '@/types/admin';

export const useCreateGroup = (date: Date) => {
  const dispatch = useDispatch();
  const [createGroupReq, { isError, isLoading }] = useCreateGroupReqMutation();
  const { setCourses } = useActions();
  const handleSubmit = async (
    values: ICreateGroupInitialValue,
    { resetForm }: any
  ) => {
    resetForm();
    const trainingDate = transformDate(date);
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    body.append('whenStart', trainingDate);

    try {
      const response: any = await createGroupReq(body);
      if (response.data.group) {
        dispatch(setCourses(response.data.group));
      }
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
