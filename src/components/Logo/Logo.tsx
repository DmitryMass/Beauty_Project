import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';

interface ILogoProps {
  modificator?: string;
  imgModificator?: string;
}

const Logo: FC<ILogoProps> = ({ modificator, imgModificator }) => {
  return (
    <div className={`${modificator}`}>
      <Link to={'/'}>
        <img className={`${imgModificator}`} src={logo} alt='mainLogo' />
      </Link>
    </div>
  );
};

export default Logo;
