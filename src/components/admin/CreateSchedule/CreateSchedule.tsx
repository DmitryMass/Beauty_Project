import {
  useSetEmployeeScheduleMutation,
  useUpdateEmployeeScheduleMutation,
} from '@/store/api/adminApi';
import useActions from '@/store/hooks/useActions';
import useTypedSelector from '@/store/hooks/useTypedSelector';
import { memo, useMemo, useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { createGroup } from '@/styles/forms';
import { transformWithoutYear } from '@/utils/func/transformDate';

import 'react-datepicker/dist/react-datepicker.css';

interface ICreateSchedulteProps {
  id?: string;
  refetchEmployee?: any;
}

const workHours = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

const CreateSchedule: FC<ICreateSchedulteProps> = ({ id, refetchEmployee }) => {
  const dispatch = useDispatch();
  const { setEmployeeTime, deleteEmployeeTime } = useActions();
  const employeeWorkTime = useTypedSelector(
    (state) => state.employees.employeeWorkTime
  );
  const [updateEmployee] = useUpdateEmployeeScheduleMutation();
  const [setEmployeeSchedule] = useSetEmployeeScheduleMutation();

  const [startDate, setStartDate] = useState(new Date());
  const changeDate = useMemo(
    () => transformWithoutYear(startDate),
    [startDate]
  );

  const handler = (add: string) => {
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
    try {
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
    } catch (err) {
      console.log(`${err} error in creating schedule`);
    }
  };

  const updateEmployeeSchedule = async () => {
    const copyWorkTime = [...employeeWorkTime];
    const sortEmployeeTime = copyWorkTime.sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    );

    try {
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
    } catch (err) {
      console.log(`${err} error in updateSchedule`);
    }
  };

  return (
    <div className='text-white flex flex-col w-full mb-[30px]'>
      <div className='mb-[35px]'>
        <h2>Выберите дату работы</h2>
        <DatePicker
          className={`${createGroup.input} w-full`}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat='dd/MM/yyyy'
        />
      </div>
      <div className='grid grid-cols-2 mb-[25px]'>
        <div className='max-w-[250px] w-full'>
          <h2 className='text-sm leading-md mb-[5px]'>Выберите время работы</h2>
          {workHours.map((hour: string) => (
            <div key={hour} className='w-full'>
              <div className='flex justify-between items-center my-[5px] gap-[10px]'>
                <p className='flex justify-center items-center max-w-[60px] w-full px-[10px] bg-slate-300 text-coal font-medium text-sm leading-sm'>
                  {hour}
                </p>

                <button
                  className='flex justify-center items-center max-w-[60px] w-full px-[10px] bg-green text-coal font-medium text-sm leading-sm '
                  onClick={() => handler(hour)}
                >
                  Add
                </button>
                <button
                  className='flex justify-center items-center max-w-[60px] w-full px-[10px] bg-red-700 text-whiteOpacity font-medium text-sm leading-sm '
                  onClick={() => delTime(hour)}
                >
                  DEL
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='min-h-[305px]'>
          <h2 className='text-sm leading-md mb-[5px]'>Текущее изменение</h2>
          <p>
            Выбраный день{' '}
            <span className='text-sm leading-sm font-medium underline ml-[5px] text-green'>
              {changeDate}
            </span>
          </p>
          <p className='mb-[5px]'>Выбранное время:</p>
          <ul className='w-[150px] flex flex-col justify-items-center gap-[3px] '>
            {employeeWorkTime.map((time) => (
              <li
                className='flex justify-center items-center max-w-[60px] w-full px-[10px] py-[5px] bg-slate-300 text-coal font-medium text-sm leading-sm'
                key={time}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className='py-[5px] px-[5px] bg-green my-[10px]'
        disabled={employeeWorkTime.length === 0}
        onClick={createEmployeeSchedule}
      >
        Добавить рабочий день
      </button>
      <button
        className='py-[5px] px-[5px] bg-slate-500 my-[10px]'
        disabled={employeeWorkTime.length === 0}
        onClick={updateEmployeeSchedule}
      >
        Обновить график
      </button>
    </div>
  );
};

export default memo(CreateSchedule);
