import { memo, FC } from 'react';
//
import deleteLogo from '@/assets/icons/deleteLogo.svg';
import { IGroupmembers, IMembers } from '@/types/admin';
import { admin } from '@/styles/admin';

interface IGroupListProps {
  member: IGroupmembers;
  active: string | null;
  setActive: any;
}

const GroupList: FC<IGroupListProps> = ({ member, active, setActive }) => {
  const handleClick = () => {
    if (active === member._id) {
      setActive(null);
      return;
    }
    setActive(member._id);
  };
  return (
    <div>
      <div onClick={handleClick} className={admin.membersContainer}>
        <h3 className='text-white'>
          Start: <span className='text-gold'>{member.whenStart}</span>
        </h3>
        <p className={admin.displayGroupType}>{member.type}</p>
        <button className={admin.deleteBtn}>
          <img className='max-w-full' src={deleteLogo} alt='' />
        </button>
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
