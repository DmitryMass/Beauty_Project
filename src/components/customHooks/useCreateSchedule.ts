import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
//
import useActions from '@/store/hooks/useActions';
import useTypedSelector from '@/store/hooks/useTypedSelector';
//
import {
  useDeleteEmployeeScheduleMutation,
  useSetEmployeeScheduleMutation,
  useUpdateEmployeeScheduleMutation,
} from '@/store/api/adminApi';
//
import { transformWithoutYear } from '@/utils/func/transformDate';

export const useCreateSchedule = (id: string, refetchEmployee: any) => {
  const dispatch = useDispatch();
  const { setEmployeeTime, deleteEmployeeTime } = useActions();
  const employeeWorkTime = useTypedSelector(
    (state) => state.employees.employeeWorkTime
  );
  const [updateEmployee, { isLoading: updateLoading, isError: updateError }] =
    useUpdateEmployeeScheduleMutation();
  const [setEmployeeSchedule, { isLoading: setLoading, isError: setError }] =
    useSetEmployeeScheduleMutation();
  const [
    deleteEmployeeSchedule,
    { isLoading: deleteLoading, isError: deleteError },
  ] = useDeleteEmployeeScheduleMutation();

  const [startDate, setStartDate] = useState(new Date());

  const changeDate = useMemo(
    () => transformWithoutYear(startDate),
    [startDate]
  );

  const addTime = (add: string) => {
    dispatch(setEmployeeTime(add));
  };

  const delTime = (del: string) => {
    dispatch(deleteEmployeeTime(del));
  };

  const createEmployeeSchedule = async () => {
    const copyWorkTime = [...employeeWorkTime];
    const sortEmployeeTime = copyWorkTime.sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    );

    if (id) {
      const response: any = await setEmployeeSchedule({
        id,
        data: {
          day: changeDate,
          hours: sortEmployeeTime,
        },
      });
      if (response.data) {
        await refetchEmployee(id);
        return;
      }
    }
  };

  const updateEmployeeSchedule = async () => {
    const copyWorkTime = [...employeeWorkTime];
    const sortEmployeeTime = copyWorkTime.sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    );

    if (id) {
      const response: any = await updateEmployee({
        id,
        data: {
          day: changeDate,
          hours: sortEmployeeTime,
        },
      });
      if (response.data) {
        await refetchEmployee(id);
        return;
      }
    }
  };

  const deleteSchedule = async () => {
    if (id) {
      const response: any = await deleteEmployeeSchedule({
        id,
        data: {
          day: changeDate,
        },
      });
      if (response.data) {
        await refetchEmployee(id);
        return;
      }
    }
  };

  let isLoading;
  let isError;
  if (updateLoading || setLoading || deleteLoading) {
    isLoading = true;
  } else {
    isLoading = false;
  }
  if (updateError || setError || deleteError) {
    isError = true;
  } else {
    isError = false;
  }

  return {
    createEmployeeSchedule,
    updateEmployeeSchedule,
    addTime,
    delTime,
    setStartDate,
    startDate,
    changeDate,
    employeeWorkTime,
    deleteSchedule,
    isError,
    isLoading,
  };
};
