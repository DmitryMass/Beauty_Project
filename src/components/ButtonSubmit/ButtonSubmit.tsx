import { FC } from 'react';

interface IButtonSubmitProps {
  children: string;
  modificator?: string;
}

const ButtonSubmit: FC<IButtonSubmitProps> = ({ children, modificator }) => {
  return (
    <button
      className={`bg-gold text-darkGrey text-classic leading-classic ${modificator}`}
      type='submit'
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
