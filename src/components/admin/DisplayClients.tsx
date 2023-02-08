import {
  useGetEmployeesQuery,
  useLazyGetOneEmployeeQuery,
} from '@/store/api/adminApi';
import { IClient } from '@/types/clientTypes';
import { FC } from 'react';

const DisplayClients: FC = () => {
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
    <div>
      <h2 className='mb-[15px] text-white text-sm leading-s'>
        Оберіть майстра
      </h2>
      <select
        className='p-[5px] max-w-[300px] w-full focus-visible:outline-none mb-[30px]'
        defaultValue={'Оберіть співробітника'}
        onChange={handleGetEmployee}
      >
        <option disabled value='Оберіть співробітника'>
          Оберіть співробітника
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
        <div>
          <h2 className='text-whiteOpacity text-s'>
            Мастер{' '}
            <span className='text-sm ml-[15px]'>
              {employeeData.name} {employeeData.surname}
            </span>
          </h2>
          <div>
            {employeeData.workDays?.map((day) => {
              return (
                <div
                  className='flex  gap-[20px] p-[5px] bg-goldOpacity mb-[15px]'
                  key={day.day}
                >
                  <p className='text-whiteOpacity font-semibold'>{day.day}</p>
                  <div className='grow'>
                    {day.clients.map((client: IClient) => (
                      <div
                        className='flex flex-col gap-[3px] bg-darkGrey p-[10px] mb-[10px]'
                        key={`${client.day}${client.hour}`}
                      >
                        <p className='block text-s text-whiteOpacity'>
                          Ім'я клієнта:{' '}
                          <span className='text-sm leading-sm text-green ml-[5px]'>
                            {client.name}
                          </span>
                        </p>
                        <p className='block text-s text-whiteOpacity'>
                          Мобільний:{' '}
                          <span className='text-sm leading-sm text-green ml-[5px]'>
                            {client.phoneNumber}
                          </span>
                        </p>

                        <p className='block text-s text-whiteOpacity'>
                          Процедура:{' '}
                          <span className='text-sm leading-sm text-green ml-[5px]'>
                            {client.procedure}
                          </span>
                        </p>
                        <p className='block text-s text-whiteOpacity'>
                          Час запису:{' '}
                          <span className='text-sm leading-sm text-green ml-[5px]'>
                            {client.hour}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayClients;
