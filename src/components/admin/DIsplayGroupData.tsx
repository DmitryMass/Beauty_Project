import { FC, useEffect } from 'react';
import { useGetGroupsQuery } from '@/store/api/adminApi';
import { IGroup } from '@/types/admin';
import useTypedSelector from '@/store/hooks/useTypedSelector';

const DIsplayGroupData: FC = () => {
  const { data = null, isLoading, isError, refetch } = useGetGroupsQuery('');

  const { courses } = useTypedSelector((state) => state.studySlice);

  //   пока временно
  useEffect(() => {
    refetch();
  }, [courses]);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : null}
      {data && data.length !== 0
        ? data.map(({ countPlaces, price, type, whenStart }: IGroup) => (
            <div key={`${countPlaces}${type}`}>
              <p>Тип курса {type}</p>
              <p>Кол-во мест {countPlaces}</p>
              <p>Цена {price}</p>
              <p>Старт {whenStart}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default DIsplayGroupData;
