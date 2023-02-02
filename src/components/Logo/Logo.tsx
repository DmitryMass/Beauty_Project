import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';

interface ILogoProps {
  modificator?: string;
}

const Logo: FC<ILogoProps> = ({ modificator }) => {
  return (
    <div className={`${modificator} w-[85px] ml-auto `}>
      <Link to={'/'}>
        <img className='w-[85px] h-[90px]' src={logo} alt='mainLogo' />
      </Link>
    </div>
  );
};

export default Logo;
