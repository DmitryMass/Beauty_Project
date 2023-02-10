import { IWorkDays } from '@/types/employee';
import { FC, useMemo, useState } from 'react';

interface ISelectTimeAndDateProps {
  workDays: IWorkDays[] | [];
}

const SelectTimeAndDate: FC<ISelectTimeAndDateProps> = ({ workDays }) => {
  const [selectDay, setSelectDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const selectTime = useMemo(
    () => workDays.find(({ day }) => day === selectDay),
    [selectDay]
  );

  return (
    <div className='flex justify-start items-center gap-[40px]'>
      <select
        className={
          'px-[15px] py-[10px] rounded-[6px] bg-inputBg text-gold placeholder:text-goldOpacity cursor-pointer border-[1px] border-gold mb-[10px] font-medium mt-[3px] focus-visible:outline-none focus:shadow-[inset_0_0px_2px_2px_rgba(0,0,0,0.6)] focus:shadow-gold'
        }
        defaultValue={'Дата'}
        onChange={(e) => setSelectDay(e.target.value)}
      >
        <option disabled value={'Дата'}>
          Дата
        </option>
        {workDays &&
          workDays.map((data) => (
            <option key={data.day} value={data.day}>
              {data.day}
            </option>
          ))}
      </select>
      <select
        className={
          'px-[15px] py-[10px] rounded-[6px] bg-inputBg text-gold placeholder:text-goldOpacity cursor-pointer border-[1px] border-gold mb-[10px] font-medium mt-[3px] focus-visible:outline-none focus:shadow-[inset_0_0px_2px_2px_rgba(0,0,0,0.6)] focus:shadow-gold'
        }
        defaultValue={'Вільний час'}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        <option value={'Вільний час'}>Вільний час</option>
        {selectTime &&
          selectTime.hours.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectTimeAndDate;
