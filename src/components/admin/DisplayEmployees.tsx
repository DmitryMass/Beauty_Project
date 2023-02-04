import { useGetEmployeesQuery } from '@/store/api/adminApi';
import useTypedSelector from '@/store/hooks/useTypedSelector';
import { FC } from 'react';

const DisplayEmployees: FC = () => {
  const { data = null, isLoading } = useGetEmployeesQuery('');
  return (
    <div className='w-full flex flex-col justify-start items-start mt-[30px] gap-[20px]'>
      {isLoading ? <div className='text-white'>Loading...</div> : null}
      <h2 className='text-whiteOpacity text-md leading-md my-[20px]'>
        Список сотрудников
      </h2>
      {data &&
        data.map((employee: any) => (
          <div className='w-full' key={employee._id}>
            <ul className='flex justify-start gap-[25px] w-full'>
              <li>
                <span className='block mb-[5px] text-whiteOpacity text-s'>
                  ФИО
                </span>
                <span className='text-coal block  bg-white py-[10px] text-center font-medium  w-[200px]  text-ellipsis overflow-hidden whitespace-nowrap px-[5px]'>
                  {employee.name} {employee.surname}
                </span>
              </li>
              <li>
                <span className='block mb-[5px] text-whiteOpacity text-s'>
                  Специальность
                </span>
                <span className='text-coal block  bg-white py-[10px] text-center font-medium  w-[200px]  text-ellipsis overflow-hidden whitespace-nowrap px-[5px]'>
                  {employee.position}
                </span>
              </li>
              <li>
                <span className='block mb-[5px] text-whiteOpacity text-s'>
                  Номер телефона
                </span>
                <span className='text-coal block  bg-white py-[10px] text-center font-medium  w-[200px]  text-ellipsis overflow-hidden whitespace-nowrap px-[5px]'>
                  {employee.phoneNumber}
                </span>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default DisplayEmployees;
