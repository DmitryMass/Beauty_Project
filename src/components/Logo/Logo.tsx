import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';

interface ILogoProps {
  modificator: string;
}

const Logo: FC<ILogoProps> = ({ modificator }) => {
  return (
    <Link to={'/'} className={modificator}>
      <img src={logo} alt='mainLogo' />
    </Link>
  );
};

export default Logo;
