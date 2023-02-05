import { FC } from 'react';
import { useGetEmployeesQuery } from '@/store/api/adminApi';
//
import { employees } from '@/styles/employee';
import { IEmployee } from '@/types/employee';

const DisplayEmployees: FC = () => {
  const { data = null, isLoading } = useGetEmployeesQuery('');
  return (
    <div className={employees.container}>
      {isLoading ? <div className='text-white'>Loading...</div> : null}
      <h2 className={employees.title}>Список сотрудников</h2>
      <div className='flex justify-start gap-[25px] w-full'>
        <span className={employees.employeeSpan}>ФИО</span>
        <span className={employees.employeeSpan}>Специальность</span>
        <span className={employees.employeeSpan}>Номер телефона</span>
      </div>
      {data &&
        data.map((employee: IEmployee) => (
          <ul
            key={employee._id}
            className='flex justify-start gap-[25px] w-full'
          >
            <li className='max-w-[200px] w-full'>
              <span className={employees.employeeInfo}>
                {employee.name} {employee.surname}
              </span>
            </li>
            <li className='max-w-[200px] w-full'>
              <span className={employees.employeeInfo}>
                {employee.position}
              </span>
            </li>
            <li className='max-w-[200px] w-full'>
              <span className={employees.employeeInfo}>
                {employee.phoneNumber}
              </span>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default DisplayEmployees;
