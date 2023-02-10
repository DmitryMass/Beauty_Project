import { FC, memo } from 'react';

interface IDropDownProps {
  setSelected: (value: string) => void;
  setToggleDropDown: (value: boolean) => void;
  modificator?: string;
  options?: any[] | [];
  styles: string;
  visit?: boolean;
}
const DropDown: FC<IDropDownProps> = ({
  modificator,
  setSelected,
  setToggleDropDown,
  options,
  styles,
  visit = false,
}) => {
  const hanldeClick = (value: string) => {
    setSelected(value);
    setToggleDropDown(false);
  };

  return (
    <>
      {visit ? (
        <div className={modificator}>
          {options &&
            options.map((value) => (
              <div
                className={styles}
                key={value.procedure}
                onClick={() => hanldeClick(value.procedure)}
              >
                <span>{value.procedure}</span>
                <span>{value.price} грн</span>
              </div>
            ))}
        </div>
      ) : (
        <div className={modificator}>
          {options &&
            options.map((value) => (
              <div
                className={styles}
                key={value}
                onClick={() => hanldeClick(value)}
              >
                {value}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default memo(DropDown);
