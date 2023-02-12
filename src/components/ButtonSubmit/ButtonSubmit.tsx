import { FC, ReactNode } from 'react';

interface IButtonSubmitProps {
  children: string | ReactNode;
  modificator?: string;
  isDisabled?: boolean;
}

const ButtonSubmit: FC<IButtonSubmitProps> = ({
  children,
  modificator,
  isDisabled,
}) => {
  return (
    <button
      className={`bg-gold text-darkGrey text-classic leading-classic ${modificator}`}
      type='submit'
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
