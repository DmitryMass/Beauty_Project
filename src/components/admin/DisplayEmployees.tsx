import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from '@/store/api/adminApi';
//
import closeBtn from '@/assets/icons/closeIcon.svg';
import loaderLogo from '@/assets/icons/loaderLogo.svg';
import editLogo from '@/assets/icons/editLogo.svg';
//
import { employees } from '@/styles/employee';
import { IEmployee } from '@/types/employee';
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';

const DisplayEmployees: FC = () => {
  const navigate = useNavigate();
  const { data = null, isLoading, isError } = useGetEmployeesQuery();
  const [deleteEmployee, { isLoading: deleteLoading, isError: deleteError }] =
    useDeleteEmployeeMutation();

  const handleDelete = async (id: string) => {
    await deleteEmployee(id);
  };

  return (
    <div className={employees.container}>
      {isLoading ? <div className='text-white'>Loading...</div> : null}
      {isError || deleteError ? (
        <GeneralErrorHandler
          data='Вибачте сервер відключено або отримав помилку'
          isError={isError || deleteError}
        />
      ) : null}
      <h2 className={employees.title}>Перелік співробітників</h2>
      <div className='flex justify-start gap-[25px] w-full'>
        <span className={employees.employeeSpan}>ПІБ</span>
        <span className={employees.employeeSpan}>Спеціальність</span>
        <span className={employees.employeeSpan}>Номер телефону</span>
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
              className='max-w-[50px] w-full cursor-pointer flex justify-center items-center bg-red-100'
            >
              {deleteLoading ? (
                <img
                  className='w-[25px] h-[25px]'
                  src={loaderLogo}
                  alt='closeBtn'
                />
              ) : (
                <img
                  className='w-[25px] h-[25px]'
                  src={closeBtn}
                  alt='closeBtn'
                />
              )}
            </li>
            <li
              onClick={() =>
                navigate(`${import.meta.env.VITE_ADMIN}/${employee._id}`)
              }
              className='max-w-[50px] w-full cursor-pointer flex justify-center items-center bg-orange-300'
            >
              <img
                className='w-[25px] h-[25px]'
                src={editLogo}
                alt='closeBtn'
              />
            </li>
          </ul>
        ))}
    </div>
  );
};

export default DisplayEmployees;
