import { useGetMembersQuery } from '@/store/api/adminApi';
import { FC } from 'react';

const GetMembers: FC = () => {
  const { data = null, isLoading, isError } = useGetMembersQuery('');
  console.log(data);
  return (
    <div className='mt-[40px]'>
      {isLoading ? <div>Loading...</div> : null}
      {data
        ? data.map((member: any) => (
            <div key={member._id}>
              <h3>Start: {member.whenStart}</h3>
              {member.members.map((client: any) => (
                <div
                  className='border-[1px] border-green-400 ml-[15px]'
                  key={client.email}
                >
                  <p>{client.email}</p>
                  <p>{client.name}</p>
                  <p>Уровень курса: {client.type}</p>
                </div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
};

export default GetMembers;
