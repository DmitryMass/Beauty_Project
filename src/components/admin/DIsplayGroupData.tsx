import { FC } from 'react';
import { useGetGroupsQuery } from '@/store/api/adminApi';
//
import { IGroup } from '@/types/admin';
import { admin } from '@/styles/admin';

const DisplayGroupData: FC = () => {
  const { data = null, isLoading } = useGetGroupsQuery('');
  return (
    <>
      <h2 className='text-whiteOpacity text-md leading-md my-[20px]'>
        Відкриті группи
      </h2>
      <div className={admin.displayGroupWrapper}>
        {isLoading ? <div>Loading...</div> : null}
        {data && data.length !== 0
          ? data.map(({ countPlaces, price, type, whenStart }: IGroup) => (
              <div
                className={admin.displayGroupContent}
                key={`${countPlaces}${type}`}
              >
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
