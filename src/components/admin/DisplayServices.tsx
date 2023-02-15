import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useActions from '@/store/hooks/useActions';
import {
  useDeleteServiceMutation,
  useGetServicesApiQuery,
} from '@/store/api/adminApi';
//
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';
import Loader from '../Loader/Loader';
//
import editLogo from '@/assets/icons/editLogo.svg';
import deleteLogo from '@/assets/icons/closeIcon.svg';
import { IServices } from '@/types/services';

const DisplayServices: FC = () => {
  const dispatch = useDispatch();
  const { setServices } = useActions();
  const navigate = useNavigate();
  const {
    data = null,
    isLoading,
    isError,
    refetch,
  } = useGetServicesApiQuery('');

  const [deleteService, { isLoading: deleteLoading }] =
    useDeleteServiceMutation();

  const handleEdit = (id: string) => {
    dispatch(setServices(id));
    navigate(`${import.meta.env.VITE_ADMIN}/editingprice`);
  };

  const handleDelete = async (id: string) => {
    try {
      const response: any = await deleteService(id);
      if (response.data) {
        refetch();
      }
    } catch (err) {
      console.log(`${err} помилка в видаленні сервісу`);
    }
  };
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className='text-white grid grid-cols-2 mt-[30px] gap-[10px] max-[576px]:grid-cols-1'>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={
            'Вибачте йдуть технічні роботи. Перезавантажте сторінку або спробуйте пізніше.'
          }
        />
      ) : null}
      {isLoading ? (
        <div className='max-w-[200px] w-full mx-auto flex justify-center items-center min-h-[300px] h-full'>
          <Loader />
        </div>
      ) : null}
      {deleteLoading ? (
        <p className='text-gold text-s mb-[5px]'>Deleting service...</p>
      ) : null}
      {data
        ? data.map((service: IServices) => (
            <div key={service._id} className='bg-burgerLink  p-[10px] relative'>
              <h4 className=''>Категорія процедури:</h4>
              <h3 className='ml-[5px] text-green text-sm'>
                {service.procedure}
              </h3>
              <ul>
                <li className='ml-[20px] '>Входять в категорію:</li>
                {service.options
                  ? service.options.map((option) => (
                      <li
                        className='ml-[30px] text-classic leading-classic text-gold'
                        key={option.title}
                      >
                        {option.title}
                      </li>
                    ))
                  : null}
              </ul>
              <button
                onClick={() => handleEdit(`${service._id}`)}
                className='absolute top-[10px] right-[10px] bg-gold rounded-[4px]'
              >
                <img
                  className='w-[30px] h-[30px]'
                  src={editLogo}
                  alt='editLogo'
                />
              </button>
              <button
                onClick={() => handleDelete(`${service._id}`)}
                className='absolute top-[50px] right-[10px] bg-gold rounded-[4px]'
              >
                <img
                  className='w-[30px] h-[30px]'
                  src={deleteLogo}
                  alt='editLogo'
                />
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default DisplayServices;
