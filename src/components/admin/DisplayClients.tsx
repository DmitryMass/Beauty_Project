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
      <select
        className='p-[5px] max-w-[300px] w-full focus-visible:outline-none mb-[30px]'
        defaultValue={'Выберите сотрудника'}
        onChange={handleGetEmployee}
      >
        <option disabled value='Выберите сотрудника'>
          Выберите сотрудника
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
        <div className='text-white'>
          <h2>
            {employeeData.name} {employeeData.surname}
          </h2>
          <div>
            {employeeData.workDays?.map((day) => {
              return (
                <div
                  className='flex  gap-[20px] p-[5px] bg-goldOpacity mb-[15px]'
                  key={day.day}
                >
                  <p>{day.day}</p>
                  <div className='grow'>
                    {day.clients.map((client: IClient) => (
                      <div
                        className='flex flex-col gap-[3px] bg-darkGrey p-[10px] mb-[10px]'
                        key={`${client.day}${client.hour}`}
                      >
                        <p className='block'>
                          Ім'я клієнта:{' '}
                          <span className='text-sm leading-sm text-green'>
                            {client.name}
                          </span>
                        </p>
                        <p className='block'>
                          Мобільний:{' '}
                          <span className='text-sm leading-sm text-green'>
                            {client.phoneNumber}
                          </span>
                        </p>

                        <p className='block'>
                          Процедура:{' '}
                          <span className='text-sm leading-sm text-green'>
                            {client.procedure}
                          </span>
                        </p>
                        <p className='block'>
                          Час запису:{' '}
                          <span className='text-sm leading-sm text-green'>
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
