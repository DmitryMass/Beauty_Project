import {
  useGetEmployeesQuery,
  useLazyGetOneEmployeeQuery,
} from '@/store/api/adminApi';
import { clients } from '@/styles/clients';
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
      <h2 className={clients.title}>Оберіть майстра</h2>
      <select
        className={clients.select}
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
                <div className={clients.workDayWrapper} key={day.day}>
                  <p className='text-whiteOpacity font-semibold'>{day.day}</p>
                  <div className='grow'>
                    {day.clients.map((client: IClient) => (
                      <div
                        className={clients.clientsWrapper}
                        key={`${client.day}${client.hour}`}
                      >
                        <p className={clients.workLabel}>
                          Ім'я клієнта:{' '}
                          <span className={clients.workInfo}>
                            {client.name}
                          </span>
                        </p>
                        <p className={clients.workLabel}>
                          Мобільний:{' '}
                          <span className={clients.workInfo}>
                            {client.phoneNumber}
                          </span>
                        </p>

                        <p className={clients.workLabel}>
                          Процедура:{' '}
                          <span className={clients.workInfo}>
                            {client.procedure}
                          </span>
                        </p>
                        <p className={clients.workLabel}>
                          Час запису:{' '}
                          <span className={clients.workInfo}>
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
