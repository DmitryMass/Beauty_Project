import { FC } from 'react';
import {
  useDeleteVacancyMutation,
  useGetAllVacanciesQuery,
} from '@/store/api/adminApi';
//
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';
import Loader from '../Loader/Loader';
//
import closeBtn from '@/assets/icons/closeButton.svg';

const DisplayJobVacancy: FC = () => {
  const { data = null, isLoading, isError } = useGetAllVacanciesQuery('');
  const [deleteVacancy] = useDeleteVacancyMutation();
  const handleDelete = async (id: string) => {
    await deleteVacancy(id);
  };

  return (
    <div>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={
            'Вибайте йдуть технічні роботи. Перезавантажте сторінку або спробуйте пізніше'
          }
        />
      ) : null}

      {isLoading ? (
        <div className='max-w-[200px] mx-auto flex justify-center items-center'>
          <Loader />
        </div>
      ) : null}
      <h3 className='text-md mb-[15px] text-whiteOpacity text-center'>
        Активні вакансії
      </h3>
      <div className='grid grid-cols-1 gap-[20px] justify-items-center '>
        {data
          ? data.map((vacancy) => (
              <div
                className='bg-goldOpacity flex justify-between items-center gap-[20px] max-w-[500px] w-full p-[5px]'
                key={vacancy._id}
              >
                <h2 className='text-classic font-semibold text-coal'>
                  {vacancy.vacancy}
                </h2>
                <button onClick={() => handleDelete(`${vacancy._id}`)}>
                  <img className='w-[25px] h-[25px]' src={closeBtn} alt='' />
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default DisplayJobVacancy;
