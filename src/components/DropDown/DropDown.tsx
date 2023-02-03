import { study } from '@/styles/study';
import { FC } from 'react';

interface IDropDownProps {
  setSelected: any;
  setToggleDropDown: any;
  modificator?: string;
  options: string[];
  styles: string;
}
const DropDown: FC<IDropDownProps> = ({
  modificator,
  setSelected,
  setToggleDropDown,
  options,
  styles,
}) => {
  const hanldeClick = (value: string) => {
    setSelected(value);
    setToggleDropDown(false);
  };

  return (
    <div className={modificator}>
      {options.map((value) => (
        <div className={styles} key={value} onClick={() => hanldeClick(value)}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
