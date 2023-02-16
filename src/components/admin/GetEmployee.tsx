import { FC } from 'react';
import {
  useGetEmployeesQuery,
  useLazyGetOneEmployeeQuery,
} from '@/store/api/adminApi';
//
import CreateSchedule from './CreateSchedule/CreateSchedule';

const GetEmployee: FC = () => {
  const { data = null, isLoading } = useGetEmployeesQuery('');
  const [getOneEmployee, { data: employeeData }] = useLazyGetOneEmployeeQuery();

  const handleGetEmployee = async (e: any) => {
    try {
      await getOneEmployee(`${e.target.value}`);
    } catch (err) {
      console.log(`${err} cannot get employee`);
    }
  };

  return (
    <div className='relative w-full py-[10px] z-20'>
      <CreateSchedule id={employeeData?._id} refetchEmployee={getOneEmployee} />
      <div>
        <p className='text-white mb-[10px]'>Дані співробітника</p>
        <select
          className='p-[5px] max-w-[300px] w-full focus-visible:outline-none mb-[30px]'
          defaultValue={'Виберіть співробітника'}
          onChange={handleGetEmployee}
        >
          <option disabled value='Виберіть співробітника'>
            Виберіть співробітника
          </option>
          {data
            ? data.map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.email}
                </option>
              ))
            : null}
        </select>
        {employeeData ? (
          <div className='text-white flex gap-[20px]'>
            <div>
              <p className='text-whiteOpacity text-sm leading-sm'>
                {employeeData.name} {employeeData.surname}
              </p>
              <p className='text-whiteOpacity text-sm leading-sm mb-[5px]'>
                {employeeData.email}
              </p>
            </div>
            <div>
              <h3 className='text-whiteOpacity mb-[5px] text-sm leading-sm'>
                Графік роботи:
              </h3>
              {employeeData.schedule.map((graphic: any) => (
                <div key={graphic.day} className='flex gap-[20px] mb-[10px]'>
                  <span className='flex justify-center items-center max-w-[60px] w-full px-[10px] bg-green text-coal font-medium text-sm leading-sm'>
                    {graphic.day}
                  </span>
                  {graphic.hours.map((hour: string) => (
                    <span
                      className='flex justify-center items-center max-w-[60px] w-full px-[10px] bg-slate-300 text-coal font-medium text-sm leading-sm'
                      key={hour}
                    >
                      {hour}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GetEmployee;
