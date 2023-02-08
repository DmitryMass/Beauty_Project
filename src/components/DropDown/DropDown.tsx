import { FC, memo } from 'react';

interface IDropDownProps {
  setSelected: (value: string) => void;
  setToggleDropDown: (value: boolean) => void;
  modificator?: string;
  options: any[] | [];
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

export default memo(DropDown);
