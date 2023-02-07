import { createGroup } from '@/styles/forms';
import { transformWithoutYear } from '@/utils/func/transformDate';
import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Schedule: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const changeDate = transformWithoutYear(startDate);

  return (
    <>
      <h2>Выберите дату работы</h2>
      <DatePicker
        className={`${createGroup.input} w-full`}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        minDate={startDate}
        dateFormat='dd/MM/yyyy'
      />
      <span className='text-white'>{changeDate}</span>
    </>
  );
};

export default Schedule;
