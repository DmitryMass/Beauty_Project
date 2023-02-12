import { FC } from 'react';
import instIcon from '@/assets/icons/instIcon.svg';
import fbIcon from '@/assets/icons/fbIcon.svg';
import tgIcon from '@/assets/icons/tgIcon.svg';

interface IMessengerListProps {
  modificator: string;
}

const MessengersList: FC<IMessengerListProps> = ({ modificator }) => {
  const iconsArr: string[] = [instIcon, fbIcon, tgIcon];

  return (
    <div className={modificator}>
      {iconsArr.map((icon) => (
        <a
          href='#'
          target={'_blank'}
          className='block w-[30px] h-[30px] my-[8px] hover:scale-[1.1] transition-all duration-150'
          key={icon}
        >
          <img src={icon} alt='icon' />
        </a>
      ))}
    </div>
  );
};

export default MessengersList;
