import { FC } from 'react';
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from '@/store/api/adminApi';
//
import { employees } from '@/styles/employee';
import { IEmployee } from '@/types/employee';

const DisplayEmployees: FC = () => {
  const { data = null, isLoading, refetch } = useGetEmployeesQuery('');
  const [deleteEmployee, { isLoading: deleteLoading }] =
    useDeleteEmployeeMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteEmployee(id);
      refetch();
    } catch (err) {
      console.log(`${err} delete error`);
    }
  };

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
            <li
              onClick={() => handleDelete(`${employee._id}`)}
              className='max-w-[50px] w-full cursor-pointer '
            >
              <span className={`${employees.employeeInfo} bg-red-500`}>X</span>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default DisplayEmployees;
