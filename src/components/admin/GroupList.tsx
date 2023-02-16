import { memo, FC } from 'react';
//
import { useDeleteGroupMembersMutation } from '@/store/api/adminApi';
//
import deleteLogo from '@/assets/icons/deleteLogo.svg';
import loaderLogo from '@/assets/icons/loaderLogo.svg';
//
import { IGroupmembers, IMembers } from '@/types/admin';
import { admin } from '@/styles/admin';

interface IGroupListProps {
  member: IGroupmembers;
  active: string | null;
  setActive: any;
}

const GroupList: FC<IGroupListProps> = ({ member, active, setActive }) => {
  const [deleteGroupMembers, { isLoading }] = useDeleteGroupMembersMutation();
  const handleClick = () => {
    if (active === member._id) {
      setActive(null);
      return;
    }
    setActive(member._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteGroupMembers(id);
    } catch (err) {
      console.log(`${err} error deleting group.`);
    }
  };
  return (
    <div className='relative'>
      <button
        onClick={() => handleDelete(`${member._id}`)}
        className={admin.deleteBtn}
      >
        {isLoading ? (
          <img className='max-w-full' src={loaderLogo} alt='loader' />
        ) : (
          <img className='max-w-full' src={deleteLogo} alt='deletebtn' />
        )}
      </button>
      <div onClick={handleClick} className={admin.membersContainer}>
        <h3 className='text-white'>
          Початок: <span className='text-gold'>{member.whenStart}</span>
        </h3>
        <p className={admin.displayGroupType}>{member.type}</p>
      </div>
      <div
        className={
          active !== member._id
            ? `${admin.nonActiveContent}`
            : `${admin.activeContent}`
        }
      >
        {member.members.map((client: IMembers, i: number) => (
          <div className='mb-[15px]' key={client.email}>
            <p className='text-white text-classic'>
              {i + 1}.{' '}
              <span className={admin.displayGroupType}>{client.name}</span>
            </p>
            <p className='text-white'> - {client.email}</p>
            <p className='text-white'> - {client.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(GroupList);
