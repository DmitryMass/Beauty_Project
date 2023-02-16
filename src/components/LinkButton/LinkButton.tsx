import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IButtonLinkButtonProps {
  children: string;
  modificator?: string;
  route?: string;
}

const LinkButton: FC<IButtonLinkButtonProps> = ({
  children,
  modificator,
  route,
}) => {
  return (
    <Link
      className={`font-semibold text-classic text-darkGrey bg-gold flex items-center justify-center ${modificator}`}
      to={route ? route : '#'}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
