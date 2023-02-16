import { FC } from 'react';
import {
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from '@/store/api/adminApi';
//
import GeneralErrorHandler from '../ErrorHandler/GeneralErrorHandler';
//
import closeBtn from '@/assets/icons/closeButton.svg';
import loaderLogo from '@/assets/icons/loaderLogo.svg';
//
import { IGroup } from '@/types/admin';
import { admin } from '@/styles/admin';

const DisplayGroupData: FC = () => {
  const { data = null, isLoading, isError } = useGetGroupsQuery('');
  const [deleteGroup, { isLoading: deleteGroupLoading, isError: deleteError }] =
    useDeleteGroupMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteGroup(id);
    } catch (err) {
      console.log(`${err} помилка при видалинні групи`);
    }
  };

  return (
    <>
      {isError || deleteError ? (
        <GeneralErrorHandler
          isError={isError || deleteError}
          data={
            'Вибачте йдуть технічні роботи. Спробуйте пізніше або перезавантажте сторінку.'
          }
        />
      ) : null}
      <h2 className='text-whiteOpacity text-md leading-md my-[20px]'>
        Відкриті группи
      </h2>
      <div className={admin.displayGroupWrapper}>
        {isLoading ? <div>Loading...</div> : null}
        {data && data.length !== 0
          ? data.map(({ countPlaces, price, type, whenStart, _id }: IGroup) => (
              <div
                className={admin.displayGroupContent}
                key={`${countPlaces}${type}`}
              >
                <button
                  onClick={() => handleDelete(`${_id}`)}
                  className='absolute top-[5px] right-[5px]'
                >
                  {deleteGroupLoading ? (
                    <img
                      className='w-[22px] h-[22px]'
                      src={loaderLogo}
                      alt='closeBtn'
                    />
                  ) : (
                    <img
                      className='w-[22px] h-[22px]'
                      src={closeBtn}
                      alt='closeBtn'
                    />
                  )}
                </button>
                <p className='text-white'>
                  Тип курсу: <br />
                  <span className={admin.displayGroupType}>{type}</span>
                </p>
                <p className='text-white'>
                  Кількість місць :{' '}
                  <span className='text-gold'>{countPlaces}</span>
                </p>
                <p className='text-white'>
                  Ціна: <span className='text-gold'>{price} грн</span>
                </p>
                <p className='text-white'>
                  Початок: <span className='text-gold'>{whenStart}</span>
                </p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default DisplayGroupData;
