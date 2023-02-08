import { FC, memo } from 'react';
import DatePicker from 'react-datepicker';
//
import { useCreateSchedule } from '@/components/customHooks/useCreateSchedule';
//
import { createGroup } from '@/styles/forms';
import 'react-datepicker/dist/react-datepicker.css';
import { schedule } from '@/styles/schedule';

interface ICreateSchedulteProps {
  id?: string;
  refetchEmployee?: any;
}

const workHours = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

const CreateSchedule: FC<ICreateSchedulteProps> = ({ id, refetchEmployee }) => {
  const {
    addTime,
    createEmployeeSchedule,
    delTime,
    setStartDate,
    updateEmployeeSchedule,
    startDate,
    changeDate,
    employeeWorkTime,
  } = useCreateSchedule(id!, refetchEmployee);

  return (
    <div className={schedule.container}>
      <div className='mb-[35px]'>
        <h2>Оберіть дату роботи</h2>
        <DatePicker
          className={`${createGroup.input} w-full`}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat='dd/MM/yyyy'
        />
      </div>
      <div className={schedule.workHoursWrapper}>
        <div className='max-w-[250px] w-full'>
          <h2 className='text-sm leading-md mb-[5px]'>Оберіть час роботи</h2>
          {workHours.map((hour: string) => (
            <div key={hour} className='w-full'>
              <div className={schedule.hourContainer}>
                <p className={schedule.hour}>{hour}</p>

                <button
                  className={schedule.addBtn}
                  onClick={() => addTime(hour)}
                >
                  Дод
                </button>
                <button
                  className={schedule.delBtn}
                  onClick={() => delTime(hour)}
                >
                  Вид
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='min-h-[305px]'>
          <h2 className='text-sm leading-md mb-[5px]'>Поточні зміни</h2>
          <p>
            Обраний день{' '}
            <span className={schedule.currentDate}>{changeDate}</span>
          </p>
          <p className='mb-[5px]'>Обраний час:</p>
          <ul className={schedule.timeListWrapper}>
            {employeeWorkTime.map((time) => (
              <li className={schedule.time} key={time}>
                {time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className={`${schedule.sendBtn}  bg-green`}
        disabled={employeeWorkTime.length === 0}
        onClick={createEmployeeSchedule}
      >
        Додати робочий день
      </button>
      <button
        className={`${schedule.sendBtn}  bg-slate-500`}
        disabled={employeeWorkTime.length === 0}
        onClick={updateEmployeeSchedule}
      >
        Оновити графік
      </button>
    </div>
  );
};

export default memo(CreateSchedule);
