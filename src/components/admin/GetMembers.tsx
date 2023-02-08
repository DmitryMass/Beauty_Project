import { FC, useState } from 'react';
import { useGetMembersQuery } from '@/store/api/adminApi';
//
import GroupList from '@/components/admin/GroupList';
//
import { IGroupmembers } from '@/types/admin';

const GetMembers: FC = () => {
  const { data = null, isLoading, error, refetch } = useGetMembersQuery('');
  const [active, setActive] = useState<string | null>('');

  if (error) {
    return (
      <div className='text-white'>
        Не вийшло отримати учасників та групи. Сервер не активний.
      </div>
    );
  }

  return (
    <>
      <h2 className='text-whiteOpacity text-md leading-md my-[20px]'>
        Групи клієнтів
      </h2>
      <div className=' grid gap-[5px] grid-cols-1'>
        {isLoading ? <div className='text-white'>Завантажую...</div> : null}
        {data
          ? data.map((members: IGroupmembers) => (
              <GroupList
                refetch={refetch}
                member={members}
                key={members._id}
                active={active}
                setActive={setActive}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default GetMembers;
