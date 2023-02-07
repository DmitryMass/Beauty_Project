import useActions from '@/store/hooks/useActions';
import useTypedSelector from '@/store/hooks/useTypedSelector';
import React, { useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Schedule from './ScheduleEmployee';

const workHours = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

const CreateSchedule: FC = () => {
  const dispatch = useDispatch();
  const { setEmployeeTime, deleteEmployeeTime } = useActions();
  const employeeWorkTime = useTypedSelector(
    (state) => state.employees.employeeWorkTime
  );

  const handler = (add: string) => {
    dispatch(setEmployeeTime(add));
  };

  const delTime = (del: string) => {
    dispatch(deleteEmployeeTime(del));
  };

  //   const arr2 = arr.sort((a,b) => parseFloat(a) - parseFloat(b))

  console.log(employeeWorkTime);

  return (
    <div className='text-white flex flex-col w-full'>
      <Schedule />
      <p>Выберите время работы</p>
      {workHours.map((hour: string) => (
        <div key={hour} className='flex justify-start text-white'>
          {hour}
          <span onClick={() => handler(hour)}>ADD</span>
          <span className='block ml-[50px]' onClick={() => delTime(hour)}>
            DEL
          </span>
        </div>
      ))}
    </div>
  );
};

export default CreateSchedule;
