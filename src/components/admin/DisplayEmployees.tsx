import { FC } from 'react';
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
import { useDispatch } from 'react-redux';
import useActions from '@/store/hooks/useActions';
import { useNavigate } from 'react-router-dom';

const DisplayEmployees: FC = () => {
  const dispatch = useDispatch();
  const { setEmployees } = useActions();
  const navigate = useNavigate();
  const { data = null, isLoading, refetch } = useGetEmployeesQuery('');
  const [deleteEmployee, { isLoading: deleteLoading }] =
    useDeleteEmployeeMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteEmployee(id);
      refetch();
    } catch (err) {
      console.log(`${err} помилка у видалинні співробітника`);
    }
  };

  const handleEditAndNavigate = (id: string) => {
    dispatch(setEmployees(id));
    navigate(`${import.meta.env.VITE_ADMIN}/${id}`);
  };

  return (
    <div className={employees.container}>
      {isLoading ? <div className='text-white'>Loading...</div> : null}
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
              onClick={() => handleEditAndNavigate(`${employee._id}`)}
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
